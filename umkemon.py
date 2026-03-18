import asyncio
import sys
import io
import aiohttp

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

API_BASE = "https://pokeapi.co/api/v2"
SEMAPHORE = asyncio.Semaphore(30)  # 동시 요청 수 제한

# ──────────────────────────────────────────────
# 필터 설정 (None이면 필터 없이 전체 출력)
# 예: "dragon", "fire", "water", "electric" 등
# 여러 타입: {"dragon", "fire"}
# 필터 끄기: TYPE_FILTER = None
# ──────────────────────────────────────────────
TYPE_FILTER = None


async def fetch_json(session: aiohttp.ClientSession, url: str) -> dict:
    async with SEMAPHORE:
        async with session.get(url) as resp:
            return await resp.json()


async def get_korean_name(session: aiohttp.ClientSession, url: str) -> tuple[int, str | None]:
    """포켓몬 종(species) URL에서 한글 이름을 가져온다."""
    data = await fetch_json(session, url)
    pid = data["id"]
    for name_entry in data["names"]:
        if name_entry["language"]["name"] == "ko":
            return pid, name_entry["name"]
    return pid, None


async def get_type_filter_ids(session: aiohttp.ClientSession, type_names: set[str]) -> set[int]:
    """타입별 포켓몬 ID 집합을 가져온다. (합집합)"""
    all_ids = set()
    tasks = [fetch_json(session, f"{API_BASE}/type/{t}") for t in type_names]
    type_data_list = await asyncio.gather(*tasks)
    for type_data in type_data_list:
        for entry in type_data["pokemon"]:
            url = entry["pokemon"]["url"]
            pid = int(url.rstrip("/").split("/")[-1])
            all_ids.add(pid)
    return all_ids


def umkemon(name: str) -> str:
    """첫 글자와 연속으로 같은 글자를 모두 '엄'으로 바꾼다."""
    first = name[0]
    count = 1
    while count < len(name) and name[count] == first:
        count += 1
    return "엄" * count + name[count:] + "노"


async def main():
    async with aiohttp.ClientSession() as session:
        # 1) 타입 필터 ID 미리 가져오기
        filter_ids = None
        if TYPE_FILTER:
            filter_ids = await get_type_filter_ids(session, TYPE_FILTER)
            filter_label = ", ".join(TYPE_FILTER)
            print(f"[필터] 타입: {filter_label} ({len(filter_ids)}종 해당)\n")

        # 2) 전체 포켓몬 종 목록 가져오기
        data = await fetch_json(session, f"{API_BASE}/pokemon-species?limit=10000")
        species_list = data["results"]

        # 3) 모든 종의 한글 이름을 병렬로 가져오기
        tasks = [get_korean_name(session, s["url"]) for s in species_list]
        results = await asyncio.gather(*tasks)

        # 4) ID 순 정렬 + 필터 적용 후 출력
        results = sorted(results, key=lambda x: x[0])
        filtered = [
            (pid, ko_name) for pid, ko_name in results
            if ko_name and (filter_ids is None or pid in filter_ids)
        ]

        for pid, ko_name in filtered:
            print(f"#{pid:04d}  {ko_name} → {umkemon(ko_name)}")

        print(f"\n결과: {len(filtered)}종")

        # 5) 결과를 파일로도 저장
        with open("umkemon_result.txt", "w", encoding="utf-8") as f:
            if TYPE_FILTER:
                f.write(f"[필터] 타입: {', '.join(TYPE_FILTER)}\n\n")
            for pid, ko_name in filtered:
                f.write(f"#{pid:04d}  {ko_name} → {umkemon(ko_name)}\n")
            f.write(f"\n결과: {len(filtered)}종\n")
        print("결과가 umkemon_result.txt 에 저장되었습니다.")


if __name__ == "__main__":
    asyncio.run(main())
