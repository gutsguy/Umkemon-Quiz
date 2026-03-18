import asyncio
import sys
import io
import aiohttp

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

API_BASE = "https://pokeapi.co/api/v2"
SEMAPHORE = asyncio.Semaphore(30)

# ──────────────────────────────────────────────
# 필터 설정 (None이면 전체/최신)
# ──────────────────────────────────────────────
TYPE_FILTER = None

# 도감 설명 버전 필터 (None이면 최신 항목 사용)
# ⚠ 한글 도감 설명은 6세대(X/Y)부터 존재합니다.
# 사용 가능한 한글 버전:
#   6세대: "x", "y", "omega-ruby", "alpha-sapphire"
#   7세대: "sun", "moon", "ultra-sun", "ultra-moon",
#          "lets-go-pikachu", "lets-go-eevee"
#   8세대: "sword", "shield", "the-isle-of-armor", "the-crown-tundra",
#          "brilliant-diamond", "shining-pearl", "legends-arceus"
#   9세대: "scarlet", "violet", "the-teal-mask", "the-indigo-disk"
VERSION_FILTER = "x"


async def fetch_json(session: aiohttp.ClientSession, url: str) -> dict:
    async with SEMAPHORE:
        async with session.get(url) as resp:
            return await resp.json()


async def get_type_filter_ids(session: aiohttp.ClientSession, type_names: set[str]) -> set[int]:
    all_ids = set()
    tasks = [fetch_json(session, f"{API_BASE}/type/{t}") for t in type_names]
    for type_data in await asyncio.gather(*tasks):
        for entry in type_data["pokemon"]:
            url = entry["pokemon"]["url"]
            all_ids.add(int(url.rstrip("/").split("/")[-1]))
    return all_ids


async def get_species_data(session: aiohttp.ClientSession, url: str, version: str | None = None) -> tuple[int, str | None, str | None]:
    """종 URL에서 한글 이름과 도감 설명을 가져온다."""
    data = await fetch_json(session, url)
    pid = data["id"]
    ko_name = None
    ko_flavor = None
    for entry in data["names"]:
        if entry["language"]["name"] == "ko":
            ko_name = entry["name"]
            break
    for entry in data["flavor_text_entries"]:
        if entry["language"]["name"] != "ko":
            continue
        if version and entry["version"]["name"] != version:
            continue
        ko_flavor = entry["flavor_text"]
        if version:
            break  # 특정 버전이면 첫 매칭에서 바로 종료
    return pid, ko_name, ko_flavor


def umkemon_name(name: str) -> str:
    """포켓몬 이름: 연속 같은 첫 글자를 모두 '엄'으로 바꾸고 '노' 붙임."""
    first = name[0]
    count = 1
    while count < len(name) and name[count] == first:
        count += 1
    return "엄" * count + name[count:]


def starts_with_pokemon_name(word: str, name_set: set[str]) -> bool:
    """단어가 포켓몬 이름으로 시작하는지 확인한다. (조사 포함 대응)"""
    return any(word.startswith(name) for name in name_set)


def umkemon_word(word: str, name_set: set[str]) -> str:
    """포켓몬 이름이면 무조건, 아니면 4글자 이상일 때만 첫 글자를 '엄'으로 바꾼다."""
    if not word or word[0] < "\uac00" or word[0] > "\ud7a3":
        return word
    korean_len = sum(1 for c in word if "\uac00" <= c <= "\ud7a3")
    if starts_with_pokemon_name(word, name_set) or korean_len >= 4:
        return "엄" + word[1:]
    return word


def umkemon_text(text: str, name_set: set[str]) -> str:
    """문장의 단어를 규칙에 따라 '엄'으로 바꾼다."""
    lines = text.replace("\f", "\n").split("\n")
    result = []
    for line in lines:
        words = line.split(" ")
        result.append(" ".join(umkemon_word(w, name_set) for w in words))
    return " ".join(result).strip()


async def main():
    async with aiohttp.ClientSession() as session:
        filter_ids = None
        if TYPE_FILTER:
            filter_ids = await get_type_filter_ids(session, TYPE_FILTER)
            print(f"[필터] 타입: {', '.join(TYPE_FILTER)} ({len(filter_ids)}종 해당)\n")

        data = await fetch_json(session, f"{API_BASE}/pokemon-species?limit=10000")
        species_list = data["results"]

        tasks = [get_species_data(session, s["url"], VERSION_FILTER) for s in species_list]
        results = await asyncio.gather(*tasks)
        results = sorted(results, key=lambda x: x[0])

        # 포켓몬 한글 이름 set 구성
        name_set = {name for _, name, _ in results if name}

        filtered = [
            (pid, name, flavor) for pid, name, flavor in results
            if name and flavor and (filter_ids is None or pid in filter_ids)
        ]

        lines = []
        for pid, name, flavor in filtered:
            clean = flavor.replace("\f", " ").replace("\n", " ").replace("  ", " ").strip()
            um_name = umkemon_name(name)
            um_flavor = umkemon_text(flavor, name_set)

            out = f"#{pid:04d}  {name} → {um_name}\n"
            out += f"  [원본] {clean}\n"
            out += f"  [엄켓몬] {um_flavor}\n"
            print(out)
            lines.append(out)

        print(f"결과: {len(filtered)}종")

        with open("umkedex_result.txt", "w", encoding="utf-8") as f:
            if TYPE_FILTER:
                f.write(f"[필터] 타입: {', '.join(TYPE_FILTER)}\n\n")
            for line in lines:
                f.write(line + "\n")
            f.write(f"결과: {len(filtered)}종\n")
        print("결과가 umkedex_result.txt 에 저장되었습니다.")


if __name__ == "__main__":
    asyncio.run(main())
