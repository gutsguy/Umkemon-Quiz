const POKEMON_DB_RAW = [
  {
    "id": 1,
    "koName": "이상해씨",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "독"
    ],
    "koFlavor": "태어났을 때부터 등에\n이상한 씨앗이 심어져 있으며\n몸과 함께 자란다고 한다.",
    "gen": 1
  },
  {
    "id": 2,
    "koName": "이상해풀",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "독"
    ],
    "koFlavor": "꽃봉오리가 등에 붙어 있으며\n양분을 흡수해가면\n커다란 꽃이 핀다고 한다.",
    "gen": 1
  },
  {
    "id": 3,
    "koName": "이상해꽃",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "독"
    ],
    "koFlavor": "큰 꽃잎을 펼쳐\n햇빛을 받고 있으면\n몸에 힘이 넘쳐흐른다.",
    "gen": 1
  },
  {
    "id": 10033,
    "koName": "이상해꽃",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "풀",
      "독"
    ],
    "koFlavor": "큰 꽃잎을 펼쳐\n햇빛을 받고 있으면\n몸에 힘이 넘쳐흐른다.",
    "gen": 1
  },
  {
    "id": 10195,
    "koName": "이상해꽃",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "풀",
      "독"
    ],
    "koFlavor": "큰 꽃잎을 펼쳐\n햇빛을 받고 있으면\n몸에 힘이 넘쳐흐른다.",
    "gen": 1
  },
  {
    "id": 4,
    "koName": "파이리",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "꼬리의 불꽃은 파이리의\n생명력의 상징이다.\n건강할 때 왕성하게 불타오른다.",
    "gen": 1
  },
  {
    "id": 5,
    "koName": "리자드",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "꼬리를 휘둘러 상대를\n쓰러트리고 날카로운 발톱으로\n갈기갈기 찢어버린다.",
    "gen": 1
  },
  {
    "id": 6,
    "koName": "리자몽",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃",
      "비행"
    ],
    "koFlavor": "입에서 작렬하는 불꽃을\n토해낼 때 꼬리의 끝이\n더욱 붉고 격렬하게 타오른다.",
    "gen": 1
  },
  {
    "id": 10034,
    "koName": "리자몽",
    "formType": "mega",
    "formLabel": "X",
    "types": [
      "불꽃",
      "드래곤"
    ],
    "koFlavor": "입에서 작렬하는 불꽃을\n토해낼 때 꼬리의 끝이\n더욱 붉고 격렬하게 타오른다.",
    "gen": 1
  },
  {
    "id": 10035,
    "koName": "리자몽",
    "formType": "mega",
    "formLabel": "Y",
    "types": [
      "불꽃",
      "비행"
    ],
    "koFlavor": "입에서 작렬하는 불꽃을\n토해낼 때 꼬리의 끝이\n더욱 붉고 격렬하게 타오른다.",
    "gen": 1
  },
  {
    "id": 10196,
    "koName": "리자몽",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "불꽃",
      "비행"
    ],
    "koFlavor": "입에서 작렬하는 불꽃을\n토해낼 때 꼬리의 끝이\n더욱 붉고 격렬하게 타오른다.",
    "gen": 1
  },
  {
    "id": 7,
    "koName": "꼬부기",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "등껍질에 숨어 몸을 보호한다.\n상대의 빈틈을 놓치지 않고\n물을 뿜어내어 반격한다.",
    "gen": 1
  },
  {
    "id": 8,
    "koName": "어니부기",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "딱 하고 머리를 맞을 때\n등껍질로 숨어서 피한다. 하지만\n꼬리가 살짝 삐져나와 있다.",
    "gen": 1
  },
  {
    "id": 9,
    "koName": "거북왕",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "무거운 몸으로 상대를\n덮쳐서 기절시킨다.\n위기에 처하면 등껍질에 숨는다.",
    "gen": 1
  },
  {
    "id": 10036,
    "koName": "거북왕",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "무거운 몸으로 상대를\n덮쳐서 기절시킨다.\n위기에 처하면 등껍질에 숨는다.",
    "gen": 1
  },
  {
    "id": 10197,
    "koName": "거북왕",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "무거운 몸으로 상대를\n덮쳐서 기절시킨다.\n위기에 처하면 등껍질에 숨는다.",
    "gen": 1
  },
  {
    "id": 10,
    "koName": "캐터피",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레"
    ],
    "koFlavor": "머리의 더듬이로부터\n강렬한 냄새를 내어\n적을 물리치고 몸을 보호한다.",
    "gen": 1
  },
  {
    "id": 11,
    "koName": "단데기",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레"
    ],
    "koFlavor": "강철같이 단단한 껍질로\n부드러운 몸을 보호하고 있다.\n진화할 때까지 가만히 참고 있다.",
    "gen": 1
  },
  {
    "id": 12,
    "koName": "버터플",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "비행"
    ],
    "koFlavor": "꽃의 꿀을 매우 좋아한다.\n약간의 꽃가루만으로 꽃밭이\n있는 장소를 찾아낼 수 있다.",
    "gen": 1
  },
  {
    "id": 10198,
    "koName": "버터플",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "벌레",
      "비행"
    ],
    "koFlavor": "꽃의 꿀을 매우 좋아한다.\n약간의 꽃가루만으로 꽃밭이\n있는 장소를 찾아낼 수 있다.",
    "gen": 1
  },
  {
    "id": 13,
    "koName": "뿔충이",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "독"
    ],
    "koFlavor": "숲이나 풀밭에 많이 서식한다.\n머리끝에 5cm 정도의\n작고 날카로운 독침을 지니고 있다.",
    "gen": 1
  },
  {
    "id": 14,
    "koName": "딱충이",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "독"
    ],
    "koFlavor": "스스로는 거의 움직일 수 없지만\n위험할 때는 단단해져서\n몸을 보호하고 있는 것 같다.",
    "gen": 1
  },
  {
    "id": 15,
    "koName": "독침붕",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "독"
    ],
    "koFlavor": "양손과 엉덩이에 있는 3개의\n독침으로 상대를 찌르고 찌르고\n또 찌르며 공격한다.",
    "gen": 1
  },
  {
    "id": 10090,
    "koName": "독침붕",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "벌레",
      "독"
    ],
    "koFlavor": "양손과 엉덩이에 있는 3개의\n독침으로 상대를 찌르고 찌르고\n또 찌르며 공격한다.",
    "gen": 1
  },
  {
    "id": 16,
    "koName": "구구",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "비행"
    ],
    "koFlavor": "숲이나 수풀에 많이 분포해 있다.\n땅에서도 격렬한 날갯짓으로\n모래를 뿌리기도 한다.",
    "gen": 1
  },
  {
    "id": 17,
    "koName": "피죤",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "비행"
    ],
    "koFlavor": "발톱이 발달해 있다.\n먹이인 아라리를 잡아\n100km 떨어져 있는 둥지까지 나른다.",
    "gen": 1
  },
  {
    "id": 18,
    "koName": "피죤투",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "비행"
    ],
    "koFlavor": "먹이를 찾을 때 수면을\n아슬아슬하게 미끄러지듯 날아\n잉어킹 등을 움켜잡는다.",
    "gen": 1
  },
  {
    "id": 10073,
    "koName": "피죤투",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "노말",
      "비행"
    ],
    "koFlavor": "먹이를 찾을 때 수면을\n아슬아슬하게 미끄러지듯 날아\n잉어킹 등을 움켜잡는다.",
    "gen": 1
  },
  {
    "id": 19,
    "koName": "꼬렛",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "먹을 것이 있는 곳이라면\n어디서든 서식한다.\n온종일 먹이를 찾아다닌다.",
    "gen": 1
  },
  {
    "id": 10091,
    "koName": "꼬렛",
    "formType": "alola",
    "formLabel": "",
    "types": [
      "악",
      "노말"
    ],
    "koFlavor": "먹을 것이 있는 곳이라면\n어디서든 서식한다.\n온종일 먹이를 찾아다닌다.",
    "gen": 1
  },
  {
    "id": 20,
    "koName": "레트라",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "계속 자라는 앞니를 갈아내려고\n딱딱한 것을 갉는 습성이 있다.\n벽돌로 된 벽도 갉아서 부순다.",
    "gen": 1
  },
  {
    "id": 10092,
    "koName": "레트라",
    "formType": "alola",
    "formLabel": "",
    "types": [
      "악",
      "노말"
    ],
    "koFlavor": "계속 자라는 앞니를 갈아내려고\n딱딱한 것을 갉는 습성이 있다.\n벽돌로 된 벽도 갉아서 부순다.",
    "gen": 1
  },
  {
    "id": 21,
    "koName": "깨비참",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "비행"
    ],
    "koFlavor": "자신의 영역을 지키기 위해\n작은 날개를 쳐서\n바쁘게 주위를 날아 맴돈다.",
    "gen": 1
  },
  {
    "id": 22,
    "koName": "깨비드릴조",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "비행"
    ],
    "koFlavor": "커다란 날개로 넓은 하늘을\n계속 날 수 있다.\n한 번도 내려앉지 않아도 괜찮다.",
    "gen": 1
  },
  {
    "id": 23,
    "koName": "아보",
    "formType": null,
    "formLabel": "",
    "types": [
      "독"
    ],
    "koFlavor": "성장할수록 점점 길어진다.\n밤에는 나뭇가지에\n몸을 돌돌 말고 쉰다.",
    "gen": 1
  },
  {
    "id": 24,
    "koName": "아보크",
    "formType": null,
    "formLabel": "",
    "types": [
      "독"
    ],
    "koFlavor": "배의 무늬가 무서운 얼굴로\n보인다. 약한 적은 그 무늬만\n보고도 도망치고 만다.",
    "gen": 1
  },
  {
    "id": 25,
    "koName": "피카츄",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "꼬리를 세우고 주변의\n상황을 살피다 보면 가끔\n꼬리에 번개가 친다.",
    "gen": 1
  },
  {
    "id": 10199,
    "koName": "피카츄",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "꼬리를 세우고 주변의\n상황을 살피다 보면 가끔\n꼬리에 번개가 친다.",
    "gen": 1
  },
  {
    "id": 26,
    "koName": "라이츄",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "전기가 모이면\n근육이 자극되어 여느 때보다\n공격적이 된다.",
    "gen": 1
  },
  {
    "id": 10100,
    "koName": "라이츄",
    "formType": "alola",
    "formLabel": "",
    "types": [
      "전기",
      "에스퍼"
    ],
    "koFlavor": "전기가 모이면\n근육이 자극되어 여느 때보다\n공격적이 된다.",
    "gen": 1
  },
  {
    "id": 10304,
    "koName": "라이츄",
    "formType": "mega",
    "formLabel": "X",
    "types": [
      "전기"
    ],
    "koFlavor": "전기가 모이면\n근육이 자극되어 여느 때보다\n공격적이 된다.",
    "gen": 1
  },
  {
    "id": 10305,
    "koName": "라이츄",
    "formType": "mega",
    "formLabel": "Y",
    "types": [
      "전기"
    ],
    "koFlavor": "전기가 모이면\n근육이 자극되어 여느 때보다\n공격적이 된다.",
    "gen": 1
  },
  {
    "id": 27,
    "koName": "모래두지",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅"
    ],
    "koFlavor": "지면에 구멍을 파고 산다.\n자신에게 위험이 닥쳐오면\n둥글게 말아서 몸을 보호한다.",
    "gen": 1
  },
  {
    "id": 10101,
    "koName": "모래두지",
    "formType": "alola",
    "formLabel": "",
    "types": [
      "얼음",
      "강철"
    ],
    "koFlavor": "지면에 구멍을 파고 산다.\n자신에게 위험이 닥쳐오면\n둥글게 말아서 몸을 보호한다.",
    "gen": 1
  },
  {
    "id": 28,
    "koName": "고지",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅"
    ],
    "koFlavor": "굉장한 기세로 지면을 파면\n가시와 발톱이 부러져 버리지만\n다음 날에는 바로 돋아나 있다.",
    "gen": 1
  },
  {
    "id": 29,
    "koName": "니드런♀",
    "formType": null,
    "formLabel": "",
    "types": [
      "독"
    ],
    "koFlavor": "몸은 작지만 독침을\n지니고 있기 때문에 주의가 필요하다.\n암컷의 뿔이 더 작다.",
    "gen": 1
  },
  {
    "id": 30,
    "koName": "니드리나",
    "formType": null,
    "formLabel": "",
    "types": [
      "독"
    ],
    "koFlavor": "암컷으로 성격은 온화하다.\n입에서 내보내는 초음파는\n상대를 혼란시키는 힘이 있다.",
    "gen": 1
  },
  {
    "id": 31,
    "koName": "니드퀸",
    "formType": null,
    "formLabel": "",
    "types": [
      "독",
      "땅"
    ],
    "koFlavor": "비늘로 뒤덮인 튼튼한\n몸으로 둥지의 입구를 막아\n상대로부터 새끼들을 지킨다.",
    "gen": 1
  },
  {
    "id": 32,
    "koName": "니드런♂",
    "formType": null,
    "formLabel": "",
    "types": [
      "독"
    ],
    "koFlavor": "풀밭 위로 귀만 내어\n주위의 낌새를 살핀다.\n맹독의 뿔로 몸을 보호한다.",
    "gen": 1
  },
  {
    "id": 33,
    "koName": "니드리노",
    "formType": null,
    "formLabel": "",
    "types": [
      "독"
    ],
    "koFlavor": "발달한 귀를 세워\n주위의 낌새를 살핀다.\n무슨 일이 생기면 바로 덤벼든다.",
    "gen": 1
  },
  {
    "id": 34,
    "koName": "니드킹",
    "formType": null,
    "formLabel": "",
    "types": [
      "독",
      "땅"
    ],
    "koFlavor": "돌처럼 딱딱한 피부와\n길게 뻗은 뿔이 특징이다.\n뿔에는 독이 있으니 주의해야 한다.",
    "gen": 1
  },
  {
    "id": 35,
    "koName": "삐삐",
    "formType": null,
    "formLabel": "",
    "types": [
      "페어리"
    ],
    "koFlavor": "보름달 밤에 삐삐가 모여\n춤을 추는 모습을 보면\n행복해진다고 전해진다.",
    "gen": 1
  },
  {
    "id": 36,
    "koName": "픽시",
    "formType": null,
    "formLabel": "",
    "types": [
      "페어리"
    ],
    "koFlavor": "1km 전방에 떨어진 바늘 소리도\n분간할 수 있는 우수한 귀를 가지고\n있다. 조용한 산속에 살고 있다.",
    "gen": 1
  },
  {
    "id": 10278,
    "koName": "픽시",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "페어리",
      "비행"
    ],
    "koFlavor": "1km 전방에 떨어진 바늘 소리도\n분간할 수 있는 우수한 귀를 가지고\n있다. 조용한 산속에 살고 있다.",
    "gen": 1
  },
  {
    "id": 37,
    "koName": "식스테일",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "태어났을 때는 꼬리가 새하얗고\n하나밖에 없다. 성장하면\n끝이 갈라지며 꼬리 수가 늘어난다.",
    "gen": 1
  },
  {
    "id": 10103,
    "koName": "식스테일",
    "formType": "alola",
    "formLabel": "",
    "types": [
      "얼음"
    ],
    "koFlavor": "태어났을 때는 꼬리가 새하얗고\n하나밖에 없다. 성장하면\n끝이 갈라지며 꼬리 수가 늘어난다.",
    "gen": 1
  },
  {
    "id": 38,
    "koName": "나인테일",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "황금빛으로 빛나는 털과\n9개의 긴 꼬리를 지녔다.\n1000년을 산다고 한다.",
    "gen": 1
  },
  {
    "id": 10104,
    "koName": "나인테일",
    "formType": "alola",
    "formLabel": "",
    "types": [
      "얼음",
      "페어리"
    ],
    "koFlavor": "황금빛으로 빛나는 털과\n9개의 긴 꼬리를 지녔다.\n1000년을 산다고 한다.",
    "gen": 1
  },
  {
    "id": 39,
    "koName": "푸린",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "페어리"
    ],
    "koFlavor": "동그랗고 커다란 눈동자로\n유인하고 기분 좋은 노래를\n불러 상대방을 잠들게 한다.",
    "gen": 1
  },
  {
    "id": 40,
    "koName": "푸크린",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "페어리"
    ],
    "koFlavor": "2마리가 바싹 붙어 있으면 서로의\n털이 너무 기분 좋아서\n떨어지지 않게 되어버린다.",
    "gen": 1
  },
  {
    "id": 41,
    "koName": "주뱃",
    "formType": null,
    "formLabel": "",
    "types": [
      "독",
      "비행"
    ],
    "koFlavor": "입에서 내는 초음파로\n두 눈이 없어도 주위의\n장애물을 탐색할 수 있다.",
    "gen": 1
  },
  {
    "id": 42,
    "koName": "골뱃",
    "formType": null,
    "formLabel": "",
    "types": [
      "독",
      "비행"
    ],
    "koFlavor": "물리면 끝이다. 죽을 정도로\n피를 빨아들이기 때문에 무거워져서\n날 수 없게 될 때도 있다.",
    "gen": 1
  },
  {
    "id": 43,
    "koName": "뚜벅쵸",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "독"
    ],
    "koFlavor": "낮에는 태양을 피하려고\n차가운 땅속에 들어가 있다.\n달빛을 쬐어 성장한다.",
    "gen": 1
  },
  {
    "id": 44,
    "koName": "냄새꼬",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "독"
    ],
    "koFlavor": "강렬한 악취가 난다! 그럼에도\n불구하고 1000명에 한 명 정도\n이 냄새를 즐겨 맡는 사람이 있다.",
    "gen": 1
  },
  {
    "id": 45,
    "koName": "라플레시아",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "독"
    ],
    "koFlavor": "꽃잎이 클수록 많은\n꽃가루를 만들어 내지만 머리가\n무거워서 지쳐버린다고 한다.",
    "gen": 1
  },
  {
    "id": 46,
    "koName": "파라스",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "풀"
    ],
    "koFlavor": "벌레의 등에 돋아나 있는 것은\n동충하초라는 버섯이다.\n성장하면 버섯도 커진다.",
    "gen": 1
  },
  {
    "id": 47,
    "koName": "파라섹트",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "풀"
    ],
    "koFlavor": "몸보다 큰 버섯이\n파라섹트를 조종하고 있다.\n독 포자를 여기저기 뿌린다.",
    "gen": 1
  },
  {
    "id": 48,
    "koName": "콘팡",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "독"
    ],
    "koFlavor": "작은 눈이 많이 모여\n큰 눈을 이루고 있다.\n밤이 되면 불빛을 향해 모여든다.",
    "gen": 1
  },
  {
    "id": 49,
    "koName": "도나리",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "독"
    ],
    "koFlavor": "흩뿌려진 날개 가루에 닿으면\n몸의 감각이 이상해져서\n똑바로 서 있을 수 없게 된다.",
    "gen": 1
  },
  {
    "id": 50,
    "koName": "디그다",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅"
    ],
    "koFlavor": "지하 1m 정도를 파고들어 가서\n나무뿌리 등을 씹어 먹고 산다.\n가끔 지상으로 얼굴을 내민다.",
    "gen": 1
  },
  {
    "id": 10105,
    "koName": "디그다",
    "formType": "alola",
    "formLabel": "",
    "types": [
      "땅",
      "강철"
    ],
    "koFlavor": "지하 1m 정도를 파고들어 가서\n나무뿌리 등을 씹어 먹고 산다.\n가끔 지상으로 얼굴을 내민다.",
    "gen": 1
  },
  {
    "id": 51,
    "koName": "닥트리오",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅"
    ],
    "koFlavor": "땅속을 파고들어 가\n상대가 방심하고 있을 때\n다른 곳에서 공격한다.",
    "gen": 1
  },
  {
    "id": 10106,
    "koName": "닥트리오",
    "formType": "alola",
    "formLabel": "",
    "types": [
      "땅",
      "강철"
    ],
    "koFlavor": "땅속을 파고들어 가\n상대가 방심하고 있을 때\n다른 곳에서 공격한다.",
    "gen": 1
  },
  {
    "id": 52,
    "koName": "나옹",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "한밤중에 움직이는 습성이 있다.\n반짝반짝 빛나는 것을 발견하면\n그에 못지않게 눈동자가 반짝인다.",
    "gen": 1
  },
  {
    "id": 10107,
    "koName": "나옹",
    "formType": "alola",
    "formLabel": "",
    "types": [
      "악"
    ],
    "koFlavor": "한밤중에 움직이는 습성이 있다.\n반짝반짝 빛나는 것을 발견하면\n그에 못지않게 눈동자가 반짝인다.",
    "gen": 1
  },
  {
    "id": 10161,
    "koName": "나옹",
    "formType": "galar",
    "formLabel": "",
    "types": [
      "강철"
    ],
    "koFlavor": "한밤중에 움직이는 습성이 있다.\n반짝반짝 빛나는 것을 발견하면\n그에 못지않게 눈동자가 반짝인다.",
    "gen": 1
  },
  {
    "id": 10200,
    "koName": "나옹",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "한밤중에 움직이는 습성이 있다.\n반짝반짝 빛나는 것을 발견하면\n그에 못지않게 눈동자가 반짝인다.",
    "gen": 1
  },
  {
    "id": 53,
    "koName": "페르시온",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "털의 결이 아름다워 애완용으로\n기르려는 사람이 많지만, 곧잘\n할퀴려 들기 때문에 쉽지 않다.",
    "gen": 1
  },
  {
    "id": 10108,
    "koName": "페르시온",
    "formType": "alola",
    "formLabel": "",
    "types": [
      "악"
    ],
    "koFlavor": "털의 결이 아름다워 애완용으로\n기르려는 사람이 많지만, 곧잘\n할퀴려 들기 때문에 쉽지 않다.",
    "gen": 1
  },
  {
    "id": 54,
    "koName": "고라파덕",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "항상 두통에 시달리고 있다.\n이 두통이 심해지면\n이상한 힘을 쓰기 시작한다.",
    "gen": 1
  },
  {
    "id": 55,
    "koName": "골덕",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "해 질 무렵 강가에 모습을 나타낸다.\n이마가 이상하게 빛날 때\n신통력을 발휘한다고 전해진다.",
    "gen": 1
  },
  {
    "id": 56,
    "koName": "망키",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투"
    ],
    "koFlavor": "이유 없이 화내고 날뛰기 시작하면\n동료도 구별하지 못하기 때문에\n가까이 가는 것은 매우 위험하다.",
    "gen": 1
  },
  {
    "id": 57,
    "koName": "성원숭",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투"
    ],
    "koFlavor": "주위에 아무도 없을 때만은\n화를 내지 않고 있다. 그러나\n그 모습을 보기가 어렵다.",
    "gen": 1
  },
  {
    "id": 58,
    "koName": "가디",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "사람을 잘 따르는 충실한 성격이다.\n적에게는 짖거나 물며\n쫓아내려고 한다.",
    "gen": 1
  },
  {
    "id": 10229,
    "koName": "가디",
    "formType": "hisui",
    "formLabel": "",
    "types": [
      "불꽃",
      "바위"
    ],
    "koFlavor": "사람을 잘 따르는 충실한 성격이다.\n적에게는 짖거나 물며\n쫓아내려고 한다.",
    "gen": 1
  },
  {
    "id": 59,
    "koName": "윈디",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "옛날부터 많은 사람의\n마음을 사로잡은 아름다운 포켓몬이다.\n날듯이 경쾌하게 달린다.",
    "gen": 1
  },
  {
    "id": 10230,
    "koName": "윈디",
    "formType": "hisui",
    "formLabel": "",
    "types": [
      "불꽃",
      "바위"
    ],
    "koFlavor": "옛날부터 많은 사람의\n마음을 사로잡은 아름다운 포켓몬이다.\n날듯이 경쾌하게 달린다.",
    "gen": 1
  },
  {
    "id": 60,
    "koName": "발챙이",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "매끄럽고 검은 피부는 얇고\n축축하다. 내장 일부가\n비쳐서 소용돌이 모양으로 보인다.",
    "gen": 1
  },
  {
    "id": 61,
    "koName": "슈륙챙이",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "육지에서도 수중에서도 살 수 있다.\n지상에서는 항상 땀을 흘려서\n피부를 미끌미끌하게 하고 있다.",
    "gen": 1
  },
  {
    "id": 62,
    "koName": "강챙이",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "격투"
    ],
    "koFlavor": "강인한 근육을 가지고 있다.\n태평양을 쉬지 않고\n계속 헤엄칠 수 있다.",
    "gen": 1
  },
  {
    "id": 63,
    "koName": "캐이시",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "하루에 18시간은 자고 있다.\n자는 동안에도 다양한\n초능력을 사용한다.",
    "gen": 1
  },
  {
    "id": 64,
    "koName": "윤겔라",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "초능력을 발휘하면\n강한 알파파를 내어\n정밀 기계를 고장 내 버린다.",
    "gen": 1
  },
  {
    "id": 65,
    "koName": "후딘",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "뇌세포는 항상 분열해서\n죽을 때까지 늘어나기 때문에\n모든 것을 기억해 놓을 수 있다.",
    "gen": 1
  },
  {
    "id": 10037,
    "koName": "후딘",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "뇌세포는 항상 분열해서\n죽을 때까지 늘어나기 때문에\n모든 것을 기억해 놓을 수 있다.",
    "gen": 1
  },
  {
    "id": 66,
    "koName": "알통몬",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투"
    ],
    "koFlavor": "데구리를 수없이 들었다 놨다 하며\n전신의 근육을 단련한다.\n모든 격투기를 사용한다.",
    "gen": 1
  },
  {
    "id": 67,
    "koName": "근육몬",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투"
    ],
    "koFlavor": "엄청나게 강한 육체를 지녔기 때문에\n파워 세이브 벨트를 차서\n힘을 제어하고 있다.",
    "gen": 1
  },
  {
    "id": 68,
    "koName": "괴력몬",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투"
    ],
    "koFlavor": "발달한 4개의 팔은\n2초 동안 1000번의\n펀치를 날릴 수 있다.",
    "gen": 1
  },
  {
    "id": 10201,
    "koName": "괴력몬",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "격투"
    ],
    "koFlavor": "발달한 4개의 팔은\n2초 동안 1000번의\n펀치를 날릴 수 있다.",
    "gen": 1
  },
  {
    "id": 69,
    "koName": "모다피",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "독"
    ],
    "koFlavor": "홀쭉한 체격이지만\n먹이를 잡을 때의 움직임은\n눈에 보이지 않을 정도로 빠르다.",
    "gen": 1
  },
  {
    "id": 70,
    "koName": "우츠동",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "독"
    ],
    "koFlavor": "잎사귀 부분은 칼날이 되어\n상대를 베어버린다. 입에서는\n무엇이든 녹이는 액체를 뿜어낸다.",
    "gen": 1
  },
  {
    "id": 71,
    "koName": "우츠보트",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "독"
    ],
    "koFlavor": "정글의 안쪽에 우츠보트만\n있는 지대가 있어서\n한 번 가면 두 번 다시 돌아올 수 없다.",
    "gen": 1
  },
  {
    "id": 10279,
    "koName": "우츠보트",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "풀",
      "독"
    ],
    "koFlavor": "정글의 안쪽에 우츠보트만\n있는 지대가 있어서\n한 번 가면 두 번 다시 돌아올 수 없다.",
    "gen": 1
  },
  {
    "id": 72,
    "koName": "왕눈해",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "독"
    ],
    "koFlavor": "몸 대부분이 수분이다.\n수정 같은 눈에서\n이상한 빔을 발사한다.",
    "gen": 1
  },
  {
    "id": 73,
    "koName": "독파리",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "독"
    ],
    "koFlavor": "촉수는 평소에는 짧고\n먹이를 찌를 때\n길게 늘어나 휘감는다.",
    "gen": 1
  },
  {
    "id": 74,
    "koName": "꼬마돌",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "땅"
    ],
    "koFlavor": "초원이나 산에 서식한다.\n돌멩이와 닮은 탓에 알아채지 못하고\n밟거나 발이 걸려 넘어지기도 한다.",
    "gen": 1
  },
  {
    "id": 10109,
    "koName": "꼬마돌",
    "formType": "alola",
    "formLabel": "",
    "types": [
      "바위",
      "전기"
    ],
    "koFlavor": "초원이나 산에 서식한다.\n돌멩이와 닮은 탓에 알아채지 못하고\n밟거나 발이 걸려 넘어지기도 한다.",
    "gen": 1
  },
  {
    "id": 75,
    "koName": "데구리",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "땅"
    ],
    "koFlavor": "산에서 굴러 떨어질 때\n몸의 여기저기가 부서져도\n신경 쓰지 않는 호쾌한 성격이다.",
    "gen": 1
  },
  {
    "id": 10110,
    "koName": "데구리",
    "formType": "alola",
    "formLabel": "",
    "types": [
      "바위",
      "전기"
    ],
    "koFlavor": "산에서 굴러 떨어질 때\n몸의 여기저기가 부서져도\n신경 쓰지 않는 호쾌한 성격이다.",
    "gen": 1
  },
  {
    "id": 76,
    "koName": "딱구리",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "땅"
    ],
    "koFlavor": "산 정상에서 산기슭까지 이어지는\n움푹 패인 홈은 딱구리가 굴러\n다니는 길이므로 주의가 필요하다.",
    "gen": 1
  },
  {
    "id": 10111,
    "koName": "딱구리",
    "formType": "alola",
    "formLabel": "",
    "types": [
      "바위",
      "전기"
    ],
    "koFlavor": "산 정상에서 산기슭까지 이어지는\n움푹 패인 홈은 딱구리가 굴러\n다니는 길이므로 주의가 필요하다.",
    "gen": 1
  },
  {
    "id": 77,
    "koName": "포니타",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "막 태어나서는 겨우 일어설 수 있을\n정도이지만 많이 달리면 하반신이\n단련되어 달리는 속도가 빨라진다.",
    "gen": 1
  },
  {
    "id": 10162,
    "koName": "포니타",
    "formType": "galar",
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "막 태어나서는 겨우 일어설 수 있을\n정도이지만 많이 달리면 하반신이\n단련되어 달리는 속도가 빨라진다.",
    "gen": 1
  },
  {
    "id": 78,
    "koName": "날쌩마",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "빠르게 움직이는 물체를 보면\n경주를 하고 싶어져서 맹렬한\n스피드로 쫓아가기 시작한다.",
    "gen": 1
  },
  {
    "id": 79,
    "koName": "야돈",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "에스퍼"
    ],
    "koFlavor": "항상 멍하니 있으므로 무슨\n생각을 하고 있는지 알 수 없다.\n꼬리로 먹이를 낚는 것이 특기다.",
    "gen": 1
  },
  {
    "id": 10164,
    "koName": "야돈",
    "formType": "galar",
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "항상 멍하니 있으므로 무슨\n생각을 하고 있는지 알 수 없다.\n꼬리로 먹이를 낚는 것이 특기다.",
    "gen": 1
  },
  {
    "id": 80,
    "koName": "야도란",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "에스퍼"
    ],
    "koFlavor": "붙어 있는 셀러는\n꼬리에서 배어 나오는 맛을\n좋아해서 계속 떨어지지 않는다.",
    "gen": 1
  },
  {
    "id": 10071,
    "koName": "야도란",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "물",
      "에스퍼"
    ],
    "koFlavor": "붙어 있는 셀러는\n꼬리에서 배어 나오는 맛을\n좋아해서 계속 떨어지지 않는다.",
    "gen": 1
  },
  {
    "id": 10165,
    "koName": "야도란",
    "formType": "galar",
    "formLabel": "",
    "types": [
      "독",
      "에스퍼"
    ],
    "koFlavor": "붙어 있는 셀러는\n꼬리에서 배어 나오는 맛을\n좋아해서 계속 떨어지지 않는다.",
    "gen": 1
  },
  {
    "id": 81,
    "koName": "코일",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기",
      "강철"
    ],
    "koFlavor": "좌우의 유닛에서\n중력을 차단하는 힘을\n발휘하기에 공중에 뜰 수 있다.",
    "gen": 1
  },
  {
    "id": 82,
    "koName": "레어코일",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기",
      "강철"
    ],
    "koFlavor": "다수의 코일이 연결되어\n강력한 자기장과\n높은 전압을 방사한다.",
    "gen": 1
  },
  {
    "id": 83,
    "koName": "파오리",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "비행"
    ],
    "koFlavor": "가지고 있는 파 줄기는 소중한\n무기이기도 하며 칼을 휘두르듯\n다양한 것을 자를 수 있다.",
    "gen": 1
  },
  {
    "id": 10166,
    "koName": "파오리",
    "formType": "galar",
    "formLabel": "",
    "types": [
      "격투"
    ],
    "koFlavor": "가지고 있는 파 줄기는 소중한\n무기이기도 하며 칼을 휘두르듯\n다양한 것을 자를 수 있다.",
    "gen": 1
  },
  {
    "id": 84,
    "koName": "두두",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "비행"
    ],
    "koFlavor": "돌연변이로 발견된\n두 개의 머리를 지닌 포켓몬이다.\n시속 100km로 달린다.",
    "gen": 1
  },
  {
    "id": 85,
    "koName": "두트리오",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "비행"
    ],
    "koFlavor": "3개의 머리가 보고 있는 앞에서\n조금이라도 빈틈을 보이면\n부리로 격렬하게 쪼아댄다.",
    "gen": 1
  },
  {
    "id": 86,
    "koName": "쥬쥬",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "빙산에 사는 포켓몬이다.\n머리의 뾰족하게 돌출된 부분으로\n얼음을 깨고 바다를 헤엄친다.",
    "gen": 1
  },
  {
    "id": 87,
    "koName": "쥬레곤",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "얼음"
    ],
    "koFlavor": "전신이 새하얀 털로\n뒤덮여 있다. 추위에 강해서\n오히려 추울수록 힘이 넘쳐 난다.",
    "gen": 1
  },
  {
    "id": 88,
    "koName": "질퍽이",
    "formType": null,
    "formLabel": "",
    "types": [
      "독"
    ],
    "koFlavor": "달로부터의 X선을 쬔\n오물이 질퍽이로 변화했다.\n더러운 것을 좋아한다.",
    "gen": 1
  },
  {
    "id": 10112,
    "koName": "질퍽이",
    "formType": "alola",
    "formLabel": "",
    "types": [
      "독",
      "악"
    ],
    "koFlavor": "달로부터의 X선을 쬔\n오물이 질퍽이로 변화했다.\n더러운 것을 좋아한다.",
    "gen": 1
  },
  {
    "id": 89,
    "koName": "질뻐기",
    "formType": null,
    "formLabel": "",
    "types": [
      "독"
    ],
    "koFlavor": "진흙이 쌓여 악취가 나는 장소를\n좋아해서 모여들기 때문에\n주변은 더욱 악취가 난다.",
    "gen": 1
  },
  {
    "id": 10113,
    "koName": "질뻐기",
    "formType": "alola",
    "formLabel": "",
    "types": [
      "독",
      "악"
    ],
    "koFlavor": "진흙이 쌓여 악취가 나는 장소를\n좋아해서 모여들기 때문에\n주변은 더욱 악취가 난다.",
    "gen": 1
  },
  {
    "id": 90,
    "koName": "셀러",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "단단한 껍데기는 어떤 공격도\n튕겨낸다. 껍데기를 벌리고 있을 때\n안쪽을 공격당하는 것에는 약하다.",
    "gen": 1
  },
  {
    "id": 91,
    "koName": "파르셀",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "얼음"
    ],
    "koFlavor": "조수의 흐름이 격한 바다에\n서식하고 있는 파르셀의\n껍질의 가시는 크고 날카롭다.",
    "gen": 1
  },
  {
    "id": 92,
    "koName": "고오스",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트",
      "독"
    ],
    "koFlavor": "가스로 만들어진 몸은\n어떠한 크기의 상대라도\n둘러싸서 숨을 못 쉬게 한다.",
    "gen": 1
  },
  {
    "id": 93,
    "koName": "고우스트",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트",
      "독"
    ],
    "koFlavor": "어둠 속에서 아무도 없는데도\n누군가가 보고 있다는 느낌이 들면\n그곳에 고우스트가 있는 것이다.",
    "gen": 1
  },
  {
    "id": 94,
    "koName": "팬텀",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트",
      "독"
    ],
    "koFlavor": "그림자에 모습을 숨긴다.\n팬텀이 숨어 있는 방은\n온도가 5도 내려간다고 전해진다.",
    "gen": 1
  },
  {
    "id": 10038,
    "koName": "팬텀",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "고스트",
      "독"
    ],
    "koFlavor": "그림자에 모습을 숨긴다.\n팬텀이 숨어 있는 방은\n온도가 5도 내려간다고 전해진다.",
    "gen": 1
  },
  {
    "id": 10202,
    "koName": "팬텀",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "고스트",
      "독"
    ],
    "koFlavor": "그림자에 모습을 숨긴다.\n팬텀이 숨어 있는 방은\n온도가 5도 내려간다고 전해진다.",
    "gen": 1
  },
  {
    "id": 95,
    "koName": "롱스톤",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "땅"
    ],
    "koFlavor": "땅속을 엄청난 기세로\n뚫고 나아가며 먹이를 찾는다. 지나간\n곳은 디그다의 보금자리가 된다.",
    "gen": 1
  },
  {
    "id": 96,
    "koName": "슬리프",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "잠들게 한 뒤 꿈을 먹지만\n나쁜 꿈만 먹고 있으면\n배탈이 날 때도 있는 것 같다.",
    "gen": 1
  },
  {
    "id": 97,
    "koName": "슬리퍼",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "추 같은 것을 들고 다닌다.\n어린아이에게 최면술을 걸어\n어딘가로 데려가 버린 사건이 있었다.",
    "gen": 1
  },
  {
    "id": 98,
    "koName": "크랩",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "위험이 닥치면 입에서 뿜어내는\n거품으로 전신을 감싸서\n몸을 크게 보이려고 한다.",
    "gen": 1
  },
  {
    "id": 99,
    "koName": "킹크랩",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "단단한 집게는 1만 마력의\n파워를 지녔지만\n너무 커서 움직임이 둔하다.",
    "gen": 1
  },
  {
    "id": 10203,
    "koName": "킹크랩",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "단단한 집게는 1만 마력의\n파워를 지녔지만\n너무 커서 움직임이 둔하다.",
    "gen": 1
  },
  {
    "id": 100,
    "koName": "찌리리공",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "몬스터볼이 팔리기 시작했을 때와\n같은 시기에 발견되었다.\n뭔가 관계가 있다고 전해진다.",
    "gen": 1
  },
  {
    "id": 10231,
    "koName": "찌리리공",
    "formType": "hisui",
    "formLabel": "",
    "types": [
      "전기",
      "풀"
    ],
    "koFlavor": "몬스터볼이 팔리기 시작했을 때와\n같은 시기에 발견되었다.\n뭔가 관계가 있다고 전해진다.",
    "gen": 1
  },
  {
    "id": 101,
    "koName": "붐볼",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "작은 자극에도 반응해서\n폭발한다. 폭탄볼이라 불리며\n두려움의 대상이 되고 있다.",
    "gen": 1
  },
  {
    "id": 10232,
    "koName": "붐볼",
    "formType": "hisui",
    "formLabel": "",
    "types": [
      "전기",
      "풀"
    ],
    "koFlavor": "작은 자극에도 반응해서\n폭발한다. 폭탄볼이라 불리며\n두려움의 대상이 되고 있다.",
    "gen": 1
  },
  {
    "id": 102,
    "koName": "아라리",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "에스퍼"
    ],
    "koFlavor": "텔레파시로 대화를 하기 때문에\n아라리를 갈라놓으려 해도\n바로 모여들어 6마리가 된다.",
    "gen": 1
  },
  {
    "id": 103,
    "koName": "나시",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "에스퍼"
    ],
    "koFlavor": "3개의 머리는 생각하는 것이\n각각 다르지만 사이가 좋아서\n싸우지 않는 것 같다.",
    "gen": 1
  },
  {
    "id": 10114,
    "koName": "나시",
    "formType": "alola",
    "formLabel": "",
    "types": [
      "풀",
      "드래곤"
    ],
    "koFlavor": "3개의 머리는 생각하는 것이\n각각 다르지만 사이가 좋아서\n싸우지 않는 것 같다.",
    "gen": 1
  },
  {
    "id": 104,
    "koName": "탕구리",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅"
    ],
    "koFlavor": "죽은 어미의 해골을\n머리에 쓰고 있다. 외로울 때는\n큰 소리로 운다고 한다.",
    "gen": 1
  },
  {
    "id": 105,
    "koName": "텅구리",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅"
    ],
    "koFlavor": "몸집도 작으며 원래는\n약했다. 뼈를 쓰기 시작하면서\n성격이 흉포해졌다.",
    "gen": 1
  },
  {
    "id": 10115,
    "koName": "텅구리",
    "formType": "alola",
    "formLabel": "",
    "types": [
      "불꽃",
      "고스트"
    ],
    "koFlavor": "몸집도 작으며 원래는\n약했다. 뼈를 쓰기 시작하면서\n성격이 흉포해졌다.",
    "gen": 1
  },
  {
    "id": 106,
    "koName": "시라소몬",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투"
    ],
    "koFlavor": "다리를 자유자재로 늘였다 줄였다 한다.\n멀리 떨어져 있을 때도\n상대를 차올릴 수 있다.",
    "gen": 1
  },
  {
    "id": 107,
    "koName": "홍수몬",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투"
    ],
    "koFlavor": "팔을 비틀며 날리는 펀치는\n콘크리트도 부스러뜨린다.\n3분 싸우면 잠시 쉰다.",
    "gen": 1
  },
  {
    "id": 108,
    "koName": "내루미",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "긴 혀는 끈적끈적한\n침으로 덮여 있다. 어떤 것이든\n달라붙어서 매우 편리하다.",
    "gen": 1
  },
  {
    "id": 109,
    "koName": "또가스",
    "formType": null,
    "formLabel": "",
    "types": [
      "독"
    ],
    "koFlavor": "얇고 풍선 같은 몸에\n맹독 가스가 차있다.\n가까이 오면 역겨운 냄새가 난다.",
    "gen": 1
  },
  {
    "id": 110,
    "koName": "또도가스",
    "formType": null,
    "formLabel": "",
    "types": [
      "독"
    ],
    "koFlavor": "한쪽이 부풀어 오르면 다른 한쪽은\n오그라드는 쌍둥이 또가스. 항상\n체내의 독가스를 섞고 있다.",
    "gen": 1
  },
  {
    "id": 10167,
    "koName": "또도가스",
    "formType": "galar",
    "formLabel": "",
    "types": [
      "독",
      "페어리"
    ],
    "koFlavor": "한쪽이 부풀어 오르면 다른 한쪽은\n오그라드는 쌍둥이 또가스. 항상\n체내의 독가스를 섞고 있다.",
    "gen": 1
  },
  {
    "id": 111,
    "koName": "뿔카노",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅",
      "바위"
    ],
    "koFlavor": "머리는 나쁘지만 힘이 세서\n고층 빌딩도 몸통박치기로\n산산조각 낸다.",
    "gen": 1
  },
  {
    "id": 112,
    "koName": "코뿌리",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅",
      "바위"
    ],
    "koFlavor": "전신을 갑옷 같은 피부로\n보호하고 있다. 2000도의\n마그마 속에서도 살 수 있다.",
    "gen": 1
  },
  {
    "id": 113,
    "koName": "럭키",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "행복을 가져다준다고 전해진다.\n상처 입은 사람에게 알을\n나눠주는 상냥한 포켓몬이다.",
    "gen": 1
  },
  {
    "id": 114,
    "koName": "덩쿠리",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "수많은 움직이는 덩굴에\n둘러싸여 정체불명이다.\n파란 덩굴은 평생 자란다.",
    "gen": 1
  },
  {
    "id": 115,
    "koName": "캥카",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "배의 주머니에서 새끼를 키운다.\n안전할 때만 새끼를\n주머니에서 꺼내어 놀게 한다.",
    "gen": 1
  },
  {
    "id": 10039,
    "koName": "캥카",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "배의 주머니에서 새끼를 키운다.\n안전할 때만 새끼를\n주머니에서 꺼내어 놀게 한다.",
    "gen": 1
  },
  {
    "id": 116,
    "koName": "쏘드라",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "수면에서 힘차게 먹물을\n발사해서 날고 있는 벌레를\n맞춰서 떨어뜨릴 때가 있다고 한다.",
    "gen": 1
  },
  {
    "id": 117,
    "koName": "시드라",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "섣불리 만지려고 하면\n몸 전체에서 돋아나는 가시에\n찔려 기절할 수도 있다.",
    "gen": 1
  },
  {
    "id": 118,
    "koName": "콘치",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "5노트의 스피드로 헤엄친다.\n몸에 위험을 느끼면\n날카로운 뿔로 반격한다.",
    "gen": 1
  },
  {
    "id": 119,
    "koName": "왕콘치",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "가을이 오면 산란을 위해\n힘차게 강물을 거슬러 올라가며\n헤엄치는 모습을 볼 수 있다.",
    "gen": 1
  },
  {
    "id": 120,
    "koName": "별가사리",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "몸의 중심에서 빛나는\n핵이 있는 한 몸이\n찢겨나가도 재생할 수 있다.",
    "gen": 1
  },
  {
    "id": 121,
    "koName": "아쿠스타",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "에스퍼"
    ],
    "koFlavor": "코어라고 불리는 중심 부분은\n일곱 빛깔로 빛난다. 이것을\n보석으로 삼는 사람도 있다고 한다.",
    "gen": 1
  },
  {
    "id": 10280,
    "koName": "아쿠스타",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "물",
      "에스퍼"
    ],
    "koFlavor": "코어라고 불리는 중심 부분은\n일곱 빛깔로 빛난다. 이것을\n보석으로 삼는 사람도 있다고 한다.",
    "gen": 1
  },
  {
    "id": 122,
    "koName": "마임맨",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼",
      "페어리"
    ],
    "koFlavor": "손가락 끝에서 내는 파동이\n공기를 굳혀서 벽을 만든다.\n격렬한 공격도 튕겨 낸다.",
    "gen": 1
  },
  {
    "id": 10168,
    "koName": "마임맨",
    "formType": "galar",
    "formLabel": "",
    "types": [
      "얼음",
      "에스퍼"
    ],
    "koFlavor": "손가락 끝에서 내는 파동이\n공기를 굳혀서 벽을 만든다.\n격렬한 공격도 튕겨 낸다.",
    "gen": 1
  },
  {
    "id": 123,
    "koName": "스라크",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "비행"
    ],
    "koFlavor": "날카로운 낫으로 먹이를 베고\n숨통을 끊는다. 매우 드물게\n날개를 사용해서 난다.",
    "gen": 1
  },
  {
    "id": 124,
    "koName": "루주라",
    "formType": null,
    "formLabel": "",
    "types": [
      "얼음",
      "에스퍼"
    ],
    "koFlavor": "허리를 흔드는 듯이 걷고 있다.\n방심하면 엉겁결에 따라서\n춤춰버린다고 한다.",
    "gen": 1
  },
  {
    "id": 125,
    "koName": "에레브",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "몸의 표면에는 전기가\n흐르고 있다. 주변이 어두우면\n전신이 푸르스름하게 빛난다.",
    "gen": 1
  },
  {
    "id": 126,
    "koName": "마그마",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "화산의 분화구 근처에서\n발견되었다. 입에서 불꽃을 뿜어낸다.\n체온은 1200도나 된다.",
    "gen": 1
  },
  {
    "id": 127,
    "koName": "쁘사이저",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레"
    ],
    "koFlavor": "2개의 뿔 사이에 먹이를 끼우고\n조각날 때까지 놓지 않는다. 조각나지\n않으면 저편으로 세게 내던진다.",
    "gen": 1
  },
  {
    "id": 10040,
    "koName": "쁘사이저",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "벌레",
      "비행"
    ],
    "koFlavor": "2개의 뿔 사이에 먹이를 끼우고\n조각날 때까지 놓지 않는다. 조각나지\n않으면 저편으로 세게 내던진다.",
    "gen": 1
  },
  {
    "id": 128,
    "koName": "켄타로스",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "3개의 꼬리로 자신을 때려서\n투지가 끓어오르면\n전속력으로 돌진해온다.",
    "gen": 1
  },
  {
    "id": 10250,
    "koName": "켄타로스",
    "formType": "paldea",
    "formLabel": "",
    "types": [
      "격투"
    ],
    "koFlavor": "3개의 꼬리로 자신을 때려서\n투지가 끓어오르면\n전속력으로 돌진해온다.",
    "gen": 1
  },
  {
    "id": 10251,
    "koName": "켄타로스",
    "formType": "paldea",
    "formLabel": "",
    "types": [
      "격투",
      "불꽃"
    ],
    "koFlavor": "3개의 꼬리로 자신을 때려서\n투지가 끓어오르면\n전속력으로 돌진해온다.",
    "gen": 1
  },
  {
    "id": 10252,
    "koName": "켄타로스",
    "formType": "paldea",
    "formLabel": "",
    "types": [
      "격투",
      "물"
    ],
    "koFlavor": "3개의 꼬리로 자신을 때려서\n투지가 끓어오르면\n전속력으로 돌진해온다.",
    "gen": 1
  },
  {
    "id": 129,
    "koName": "잉어킹",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "힘도 스피드도 거의 없다.\n세상에서 가장 약하고\n한심한 포켓몬이다.",
    "gen": 1
  },
  {
    "id": 130,
    "koName": "갸라도스",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "비행"
    ],
    "koFlavor": "분쟁이 일어난 마을을\n다 태워버렸다는 기록이\n고문서에 남아 있다.",
    "gen": 1
  },
  {
    "id": 10041,
    "koName": "갸라도스",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "물",
      "악"
    ],
    "koFlavor": "분쟁이 일어난 마을을\n다 태워버렸다는 기록이\n고문서에 남아 있다.",
    "gen": 1
  },
  {
    "id": 131,
    "koName": "라프라스",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "얼음"
    ],
    "koFlavor": "부드러운 마음의 소유자다.\n좀처럼 다투지 않아 많이\n잡혔기 때문에 수가 줄었다.",
    "gen": 1
  },
  {
    "id": 10204,
    "koName": "라프라스",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "물",
      "얼음"
    ],
    "koFlavor": "부드러운 마음의 소유자다.\n좀처럼 다투지 않아 많이\n잡혔기 때문에 수가 줄었다.",
    "gen": 1
  },
  {
    "id": 132,
    "koName": "메타몽",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "전신의 세포를 재구성해서\n본 것의 모양과 똑 닮게\n변신하는 능력을 가지고 있다.",
    "gen": 1
  },
  {
    "id": 133,
    "koName": "이브이",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "진화할 때 모습과 능력이\n바뀜으로써 혹독한 환경에\n적응하는 희귀한 포켓몬이다.",
    "gen": 1
  },
  {
    "id": 10205,
    "koName": "이브이",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "진화할 때 모습과 능력이\n바뀜으로써 혹독한 환경에\n적응하는 희귀한 포켓몬이다.",
    "gen": 1
  },
  {
    "id": 134,
    "koName": "샤미드",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "아름다운 물가를 좋아한다.\n세포가 물의 분자구조와 닮아서\n물에 녹는 것도 가능하다.",
    "gen": 1
  },
  {
    "id": 135,
    "koName": "쥬피썬더",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "체내에 전기가 모이면\n전신의 털이 모두\n날카롭게 곤두서기 시작한다.",
    "gen": 1
  },
  {
    "id": 136,
    "koName": "부스터",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "체내에 불꽃 주머니를 가지고 있다.\n싸움이 시작되기 직전에는\n체온이 900도까지 올라간다.",
    "gen": 1
  },
  {
    "id": 137,
    "koName": "폴리곤",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "연구 끝에 태어난\n인공 포켓몬이다. 기본적인\n동작만 프로그램되어 있다.",
    "gen": 1
  },
  {
    "id": 138,
    "koName": "암나이트",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "물"
    ],
    "koFlavor": "먼 옛날 바다에서 살고 있던\n고대 포켓몬. 10개의 다리를\n구불거리며 헤엄친다.",
    "gen": 1
  },
  {
    "id": 139,
    "koName": "암스타",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "물"
    ],
    "koFlavor": "촉수가 팔다리처럼\n발달해 있다.\n달라붙자마자 문다.",
    "gen": 1
  },
  {
    "id": 140,
    "koName": "투구",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "물"
    ],
    "koFlavor": "3억 년 전에 모래 해변에서\n살고 있었던 것으로 추측된다.\n단단한 껍질이 몸을 보호한다.",
    "gen": 1
  },
  {
    "id": 141,
    "koName": "투구푸스",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "물"
    ],
    "koFlavor": "수중을 이동할 때\n손발을 작게 접고\n등껍질을 구부려 빠르게 헤엄친다.",
    "gen": 1
  },
  {
    "id": 142,
    "koName": "프테라",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "비행"
    ],
    "koFlavor": "호박에 남아 있던 공룡의\n유전자에서 부활시켰다.\n높은 소리로 울며 난다.",
    "gen": 1
  },
  {
    "id": 10042,
    "koName": "프테라",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "바위",
      "비행"
    ],
    "koFlavor": "호박에 남아 있던 공룡의\n유전자에서 부활시켰다.\n높은 소리로 울며 난다.",
    "gen": 1
  },
  {
    "id": 143,
    "koName": "잠만보",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "하루에 먹을 것을 400kg\n먹지 않으면 성에 차지 않는다.\n다 먹으면 잠이 들어 버린다.",
    "gen": 1
  },
  {
    "id": 10206,
    "koName": "잠만보",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "하루에 먹을 것을 400kg\n먹지 않으면 성에 차지 않는다.\n다 먹으면 잠이 들어 버린다.",
    "gen": 1
  },
  {
    "id": 144,
    "koName": "프리져",
    "formType": null,
    "formLabel": "",
    "types": [
      "얼음",
      "비행"
    ],
    "koFlavor": "전설의 새포켓몬이다.\n공기 중의 수분을 얼려\n눈보라를 만들어 낼 수 있다.",
    "gen": 1
  },
  {
    "id": 10169,
    "koName": "프리져",
    "formType": "galar",
    "formLabel": "",
    "types": [
      "에스퍼",
      "비행"
    ],
    "koFlavor": "전설의 새포켓몬이다.\n공기 중의 수분을 얼려\n눈보라를 만들어 낼 수 있다.",
    "gen": 1
  },
  {
    "id": 145,
    "koName": "썬더",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기",
      "비행"
    ],
    "koFlavor": "구름 위에서 거대한\n번개를 내리치며 나타난다.\n전설의 새포켓몬이다.",
    "gen": 1
  },
  {
    "id": 10170,
    "koName": "썬더",
    "formType": "galar",
    "formLabel": "",
    "types": [
      "격투",
      "비행"
    ],
    "koFlavor": "구름 위에서 거대한\n번개를 내리치며 나타난다.\n전설의 새포켓몬이다.",
    "gen": 1
  },
  {
    "id": 146,
    "koName": "파이어",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃",
      "비행"
    ],
    "koFlavor": "오래전부터 불새의 전설로\n알려져 있다. 날갯짓할 때마다\n날개가 눈부시게 불타올라서 아름답다.",
    "gen": 1
  },
  {
    "id": 10171,
    "koName": "파이어",
    "formType": "galar",
    "formLabel": "",
    "types": [
      "악",
      "비행"
    ],
    "koFlavor": "오래전부터 불새의 전설로\n알려져 있다. 날갯짓할 때마다\n날개가 눈부시게 불타올라서 아름답다.",
    "gen": 1
  },
  {
    "id": 147,
    "koName": "미뇽",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤"
    ],
    "koFlavor": "목격자가 적기 때문에\n환상의 포켓몬이라고 불리고 있다.\n탈피한 껍질이 발견되고 있다.",
    "gen": 1
  },
  {
    "id": 148,
    "koName": "신뇽",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤"
    ],
    "koFlavor": "수정 같은 구슬에는\n날씨를 자유롭게 조종하는\n능력이 담겨 있는 듯하다.",
    "gen": 1
  },
  {
    "id": 149,
    "koName": "망나뇽",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤",
      "비행"
    ],
    "koFlavor": "커다란 몸집으로 하늘을 난다.\n지구를 약 16시간 만에\n일주한다.",
    "gen": 1
  },
  {
    "id": 10281,
    "koName": "망나뇽",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "드래곤",
      "비행"
    ],
    "koFlavor": "커다란 몸집으로 하늘을 난다.\n지구를 약 16시간 만에\n일주한다.",
    "gen": 1
  },
  {
    "id": 150,
    "koName": "뮤츠",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "한 과학자가 몇 년에 걸쳐\n무서운 유전자의 연구를\n계속한 결과 탄생했다.",
    "gen": 1
  },
  {
    "id": 10043,
    "koName": "뮤츠",
    "formType": "mega",
    "formLabel": "X",
    "types": [
      "에스퍼",
      "격투"
    ],
    "koFlavor": "한 과학자가 몇 년에 걸쳐\n무서운 유전자의 연구를\n계속한 결과 탄생했다.",
    "gen": 1
  },
  {
    "id": 10044,
    "koName": "뮤츠",
    "formType": "mega",
    "formLabel": "Y",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "한 과학자가 몇 년에 걸쳐\n무서운 유전자의 연구를\n계속한 결과 탄생했다.",
    "gen": 1
  },
  {
    "id": 151,
    "koName": "뮤",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "모든 기술을 사용하기 때문에\n포켓몬의 조상이라고 생각하는\n학자가 많다.",
    "gen": 1
  },
  {
    "id": 152,
    "koName": "치코리타",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "머리의 잎사귀에서 살짝 달콤한\n향기가 감돈다. 얌전하며\n햇볕을 쬐는 것을 매우 좋아한다.",
    "gen": 2
  },
  {
    "id": 153,
    "koName": "베이리프",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "목 주변에서 발산하는\n향신료 같은 향기에는\n힘을 내도록 하는 효과가 있다.",
    "gen": 2
  },
  {
    "id": 154,
    "koName": "메가니움",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "꽃잎에서 발산되는\n향기에는 다투는 마음을\n가라앉게 하는 성분이 담겨 있다.",
    "gen": 2
  },
  {
    "id": 10282,
    "koName": "메가니움",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "풀",
      "페어리"
    ],
    "koFlavor": "꽃잎에서 발산되는\n향기에는 다투는 마음을\n가라앉게 하는 성분이 담겨 있다.",
    "gen": 2
  },
  {
    "id": 155,
    "koName": "브케인",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "겁이 많아서 늘 몸을 웅크리고\n있다. 습격당하면 등의 불꽃을\n타오르게 해서 몸을 보호한다.",
    "gen": 2
  },
  {
    "id": 156,
    "koName": "마그케인",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "싸우기 전에 등을 보이며\n자신의 불꽃이 얼마나\n대단한지 상대에게 일부러 보여준다.",
    "gen": 2
  },
  {
    "id": 157,
    "koName": "블레이범",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "분노가 정점에 달했을 때\n건드린 자를 모두 순식간에\n불태워버릴 정도로 뜨겁다.",
    "gen": 2
  },
  {
    "id": 10233,
    "koName": "블레이범",
    "formType": "hisui",
    "formLabel": "",
    "types": [
      "불꽃",
      "고스트"
    ],
    "koFlavor": "분노가 정점에 달했을 때\n건드린 자를 모두 순식간에\n불태워버릴 정도로 뜨겁다.",
    "gen": 2
  },
  {
    "id": 158,
    "koName": "리아코",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "작아도 성격은 아주 거칠다.\n눈앞에서 움직이는 것이 있으면\n무조건 물어버린다.",
    "gen": 2
  },
  {
    "id": 159,
    "koName": "엘리게이",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "이빨이 빠져도 계속해서\n자란다. 항상 입안에는\n48개의 이빨이 나 있다.",
    "gen": 2
  },
  {
    "id": 160,
    "koName": "장크로다일",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "평소에는 느긋하게 움직이지만\n먹이를 물 때에는 눈에 보이지\n않는 엄청난 스피드를 낸다.",
    "gen": 2
  },
  {
    "id": 10283,
    "koName": "장크로다일",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "물",
      "드래곤"
    ],
    "koFlavor": "평소에는 느긋하게 움직이지만\n먹이를 물 때에는 눈에 보이지\n않는 엄청난 스피드를 낸다.",
    "gen": 2
  },
  {
    "id": 161,
    "koName": "꼬리선",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "망보기 역은 날카롭게 울거나\n꼬리로 땅을 쳐서\n동료에게 위험을 알린다.",
    "gen": 2
  },
  {
    "id": 162,
    "koName": "다꼬리",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "엄마 포켓몬이 가늘고 긴 몸으로\n새끼를 감싸 안아 재운다. 빠른\n움직임으로 상대를 몰아붙인다.",
    "gen": 2
  },
  {
    "id": 163,
    "koName": "부우부",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "비행"
    ],
    "koFlavor": "체내의 시간 감각은\n어느 때든 정확해서\n규칙적인 리듬으로 목을 기울인다.",
    "gen": 2
  },
  {
    "id": 164,
    "koName": "야부엉",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "비행"
    ],
    "koFlavor": "양쪽 눈이 특수한 구조다.\n적은 양의 빛이라도 잘 모아\n어둠 속에서도 주위를 분별한다.",
    "gen": 2
  },
  {
    "id": 165,
    "koName": "레디바",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "비행"
    ],
    "koFlavor": "추워지면 여기저기로부터\n레디바가 많이 모여들어\n바싹 붙어 서로 따뜻하게 해준다.",
    "gen": 2
  },
  {
    "id": 166,
    "koName": "레디안",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "비행"
    ],
    "koFlavor": "밤하늘의 별이 깜빡일 때\n반짝이는 가루를 흩뿌리며\n훨훨 날아간다.",
    "gen": 2
  },
  {
    "id": 167,
    "koName": "페이검",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "독"
    ],
    "koFlavor": "가늘고 튼튼한 실을\n뿜어 엮어서 덫을 만들고\n먹이가 걸리기만을 기다린다.",
    "gen": 2
  },
  {
    "id": 168,
    "koName": "아리아도스",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "독"
    ],
    "koFlavor": "엉덩이뿐 아니라 입에서도\n실을 내기 때문에 봐서는\n어느 쪽이 머리인지 모른다.",
    "gen": 2
  },
  {
    "id": 169,
    "koName": "크로뱃",
    "formType": null,
    "formLabel": "",
    "types": [
      "독",
      "비행"
    ],
    "koFlavor": "4장으로 수가 늘어난 날개로\n어둠 속을 조용히 날아간다.\n주위를 지나쳐도 눈치채지 못한다.",
    "gen": 2
  },
  {
    "id": 170,
    "koName": "초라기",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "전기"
    ],
    "koFlavor": "어두운 해저에서는 항상\n깜빡거리고 있는 촉수의\n빛만이 통신수단이다.",
    "gen": 2
  },
  {
    "id": 171,
    "koName": "랜턴",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "전기"
    ],
    "koFlavor": "심해를 헤엄치는 랜턴의\n불빛은 수면까지 다다른다.\n심해의 별이라고 불리고 있다.",
    "gen": 2
  },
  {
    "id": 172,
    "koName": "피츄",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "동료와 꼬리의 끝을 맞추면서\n불티를 튀기는 놀이를 한다.\n담력 시험을 하고 있는 듯하다.",
    "gen": 2
  },
  {
    "id": 173,
    "koName": "삐",
    "formType": null,
    "formLabel": "",
    "types": [
      "페어리"
    ],
    "koFlavor": "별님 같은 실루엣이다.\n그 모습 때문에 별똥별을 타고\n온다고 여겨진다.",
    "gen": 2
  },
  {
    "id": 174,
    "koName": "푸푸린",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "페어리"
    ],
    "koFlavor": "짧은 다리로 걷는 것보다는\n부드러운 몸으로\n튀어 오르며 돌아다닌다.",
    "gen": 2
  },
  {
    "id": 175,
    "koName": "토게피",
    "formType": null,
    "formLabel": "",
    "types": [
      "페어리"
    ],
    "koFlavor": "껍질 안에 행복이 가득\n차 있어서 상냥하게 대하면\n행운을 나누어 준다고 한다.",
    "gen": 2
  },
  {
    "id": 176,
    "koName": "토게틱",
    "formType": null,
    "formLabel": "",
    "types": [
      "페어리",
      "비행"
    ],
    "koFlavor": "상냥한 사람 곁에 있지 않으면\n기운이 나지 않게 되어버린다.\n날개를 움직이지 않고 뜰 수 있다.",
    "gen": 2
  },
  {
    "id": 177,
    "koName": "네이티",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼",
      "비행"
    ],
    "koFlavor": "날개가 아직 잘 발달하지 못해서\n뛰어오르는 것처럼 이동한다.\n항상 뭔가를 바라보고 있다.",
    "gen": 2
  },
  {
    "id": 178,
    "koName": "네이티오",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼",
      "비행"
    ],
    "koFlavor": "선명하게 떠오르는 태양을\n조용히 바라보며 기도를 올리면\n거의 움직이지 않고 하루가 간다.",
    "gen": 2
  },
  {
    "id": 179,
    "koName": "메리프",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "푹신푹신한 털은 정전기가\n쌓이면 2배로 부풀어 오른다.\n만지면 감전되어 버린다.",
    "gen": 2
  },
  {
    "id": 180,
    "koName": "보송송",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "푹신푹신한 털은 전기를\n모으기 쉽지만 고무 같은 피부\n덕분에 자신은 마비되지 않는다.",
    "gen": 2
  },
  {
    "id": 181,
    "koName": "전룡",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "꼬리 끝이 빛나며 반짝인다.\n빛이 아득히 먼 곳까지 닿아서\n길 잃은 자들의 이정표가 된다.",
    "gen": 2
  },
  {
    "id": 10045,
    "koName": "전룡",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "전기",
      "드래곤"
    ],
    "koFlavor": "꼬리 끝이 빛나며 반짝인다.\n빛이 아득히 먼 곳까지 닿아서\n길 잃은 자들의 이정표가 된다.",
    "gen": 2
  },
  {
    "id": 182,
    "koName": "아르코",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "가끔 아르코가 모여서\n춤을 추는 듯한 동작을 보인다.\n태양을 부르는 의식이라 전해진다.",
    "gen": 2
  },
  {
    "id": 183,
    "koName": "마릴",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "페어리"
    ],
    "koFlavor": "전신의 털은\n물을 튕겨내는 성질을 지녀\n물을 끼얹어도 말라 있다.",
    "gen": 2
  },
  {
    "id": 184,
    "koName": "마릴리",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "페어리"
    ],
    "koFlavor": "긴 귀는 우수한 센서다.\n강바닥에서 움직이는 생명체의\n소리를 분간할 수 있다.",
    "gen": 2
  },
  {
    "id": 185,
    "koName": "꼬지모",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위"
    ],
    "koFlavor": "항상 나무인 척하고 있다.\n몸의 구조는 식물보다\n돌이나 바위에 가까운 듯하다.",
    "gen": 2
  },
  {
    "id": 186,
    "koName": "왕구리",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "3마리 이상 왕구리가\n모이면 반드시 고함치는 듯한\n울음소리로 합창하기 시작한다.",
    "gen": 2
  },
  {
    "id": 187,
    "koName": "통통코",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "비행"
    ],
    "koFlavor": "매우 가벼운 몸을 가졌다.\n바람에 날아가지 않도록 단단히\n지면을 밟아 지탱하고 있다.",
    "gen": 2
  },
  {
    "id": 188,
    "koName": "두코",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "비행"
    ],
    "koFlavor": "머리 위에 핀 꽃은\n기온에 따라 펴지거나\n오므라드는 성질을 가졌다.",
    "gen": 2
  },
  {
    "id": 189,
    "koName": "솜솜코",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "비행"
    ],
    "koFlavor": "계절풍에 날려서\n세계 일주를 해 버린다.\n도중에 솜 포자를 흩뿌린다.",
    "gen": 2
  },
  {
    "id": 190,
    "koName": "에이팜",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "높은 나무 위에서 살고 있다.\n나뭇가지에서 가지로 건너뛸 때\n꼬리로 능숙하게 밸런스를 잡는다.",
    "gen": 2
  },
  {
    "id": 191,
    "koName": "해너츠",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "어느 날 아침 갑자기 떨어진다.\n깨비참에게 습격당하면 잎사귀를\n세차게 흔들어서 쫓아 버린다.",
    "gen": 2
  },
  {
    "id": 192,
    "koName": "해루미",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "더운 계절이 다가오면\n얼굴의 꽃잎이 선명해지고\n활발하게 움직이게 된다.",
    "gen": 2
  },
  {
    "id": 193,
    "koName": "왕자리",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "비행"
    ],
    "koFlavor": "얼굴을 움직이지 않고 360도 전부\n볼 수 있는 눈을 가지고 있어서\n바로 뒤의 먹이도 놓치지 않는다.",
    "gen": 2
  },
  {
    "id": 194,
    "koName": "우파",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "땅"
    ],
    "koFlavor": "차가운 물속에서 생활한다.\n근처가 선선해지면 먹이를\n찾으러 지상에도 나타난다.",
    "gen": 2
  },
  {
    "id": 10253,
    "koName": "우파",
    "formType": "paldea",
    "formLabel": "",
    "types": [
      "독",
      "땅"
    ],
    "koFlavor": "차가운 물속에서 생활한다.\n근처가 선선해지면 먹이를\n찾으러 지상에도 나타난다.",
    "gen": 2
  },
  {
    "id": 195,
    "koName": "누오",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "땅"
    ],
    "koFlavor": "느긋한 성격이다.\n강바닥에서 입을 벌려 먹이가\n들어오는 것을 한결같이 기다린다.",
    "gen": 2
  },
  {
    "id": 196,
    "koName": "에브이",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "상대의 움직임을 예지할 때\n두 갈래로 갈라져 있는 꼬리의\n끝이 미세하게 떨리고 있다.",
    "gen": 2
  },
  {
    "id": 197,
    "koName": "블래키",
    "formType": null,
    "formLabel": "",
    "types": [
      "악"
    ],
    "koFlavor": "달빛이 이브이의\n유전자를 변화시켰다.\n어둠에 숨어 먹이를 기다린다.",
    "gen": 2
  },
  {
    "id": 198,
    "koName": "니로우",
    "formType": null,
    "formLabel": "",
    "types": [
      "악",
      "비행"
    ],
    "koFlavor": "반짝이는 물건을 주워\n비밀 장소에 숨겨 둔다.\n나옹과 자주 쟁탈전을 벌인다.",
    "gen": 2
  },
  {
    "id": 199,
    "koName": "야도킹",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "에스퍼"
    ],
    "koFlavor": "대단한 지성과 번뜩이는 재치를\n가지고 있다. 어떤 때라도 당황하거나\n소란 피우지 않고 느긋하게 있다.",
    "gen": 2
  },
  {
    "id": 10172,
    "koName": "야도킹",
    "formType": "galar",
    "formLabel": "",
    "types": [
      "독",
      "에스퍼"
    ],
    "koFlavor": "대단한 지성과 번뜩이는 재치를\n가지고 있다. 어떤 때라도 당황하거나\n소란 피우지 않고 느긋하게 있다.",
    "gen": 2
  },
  {
    "id": 200,
    "koName": "무우마",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트"
    ],
    "koFlavor": "무서워하는 마음을 빨간 구슬로\n흡수해 영양분으로 만든다. 낮에는\n어두운 곳에서 잠자고 있다.",
    "gen": 2
  },
  {
    "id": 201,
    "koName": "안농",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "몸 자체는 굉장히 얇고\n항상 벽에 들러붙어 있다.\n모습에는 뭔가 의미가 있는 듯하다.",
    "gen": 2
  },
  {
    "id": 202,
    "koName": "마자용",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "빛과 쇼크를 싫어한다.\n공격받으면 몸이 부풀어 올라\n반격이 강력해진다.",
    "gen": 2
  },
  {
    "id": 203,
    "koName": "키링키",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "에스퍼"
    ],
    "koFlavor": "잠자는 동안 꼬리의\n머리가 주위를 망보고 있다.\n꼬리는 잠을 잘 필요가 없다.",
    "gen": 2
  },
  {
    "id": 204,
    "koName": "피콘",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레"
    ],
    "koFlavor": "나무껍질을 짜 맞춰서\n껍질을 두껍게 하는 것을 좋아한다.\n무거워져도 신경 쓰지 않는다.",
    "gen": 2
  },
  {
    "id": 205,
    "koName": "쏘콘",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "강철"
    ],
    "koFlavor": "강철 껍질이 몸을 보호하고 있다.\n틈새에서 엿보고 있는 눈이 있지만\n내용물의 정체는 수수께끼다.",
    "gen": 2
  },
  {
    "id": 206,
    "koName": "노고치",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "누군가에게 들키면\n꼬리로 땅을 파서\n뒤쪽으로 도망친다.",
    "gen": 2
  },
  {
    "id": 207,
    "koName": "글라이거",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅",
      "비행"
    ],
    "koFlavor": "보통은 벼랑에 붙어 있다.\n먹이를 발견하면 날개를 펼쳐\n바람을 타고 날아 덮친다.",
    "gen": 2
  },
  {
    "id": 208,
    "koName": "강철톤",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철",
      "땅"
    ],
    "koFlavor": "땅속의 높은 압력과\n열로 단련된 몸은\n어떠한 금속보다도 단단하다.",
    "gen": 2
  },
  {
    "id": 10072,
    "koName": "강철톤",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "강철",
      "땅"
    ],
    "koFlavor": "땅속의 높은 압력과\n열로 단련된 몸은\n어떠한 금속보다도 단단하다.",
    "gen": 2
  },
  {
    "id": 209,
    "koName": "블루",
    "formType": null,
    "formLabel": "",
    "types": [
      "페어리"
    ],
    "koFlavor": "활발하고 노는 것을 좋아하는 성격.\n잘 따르기 때문에 함께\n놀고 싶어 하는 여성들이 많다.",
    "gen": 2
  },
  {
    "id": 210,
    "koName": "그랑블루",
    "formType": null,
    "formLabel": "",
    "types": [
      "페어리"
    ],
    "koFlavor": "얼굴에 어울리지 않게 겁이 많다.\n그러나 한번 화내기 시작하면\n큰 이빨로 반격한다.",
    "gen": 2
  },
  {
    "id": 211,
    "koName": "침바루",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "독"
    ],
    "koFlavor": "전신의 독침을 날리기 위해\n10리터의 물을 단번에\n마시고 몸을 부풀린다.",
    "gen": 2
  },
  {
    "id": 10234,
    "koName": "침바루",
    "formType": "hisui",
    "formLabel": "",
    "types": [
      "악",
      "독"
    ],
    "koFlavor": "전신의 독침을 날리기 위해\n10리터의 물을 단번에\n마시고 몸을 부풀린다.",
    "gen": 2
  },
  {
    "id": 212,
    "koName": "핫삼",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "강철"
    ],
    "koFlavor": "강철이 함유된\n집게로 잡은 것은 아무리\n딱딱해도 산산조각이 난다.",
    "gen": 2
  },
  {
    "id": 10046,
    "koName": "핫삼",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "벌레",
      "강철"
    ],
    "koFlavor": "강철이 함유된\n집게로 잡은 것은 아무리\n딱딱해도 산산조각이 난다.",
    "gen": 2
  },
  {
    "id": 213,
    "koName": "단단지",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "바위"
    ],
    "koFlavor": "항아리 같은 등껍질 속에\n모은 나무열매는 어느샌가\n걸쭉한 주스로 변한다.",
    "gen": 2
  },
  {
    "id": 214,
    "koName": "헤라크로스",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "격투"
    ],
    "koFlavor": "자랑스러운 뿔을 상대의 배\n밑에 틀어박고 단번에 들어 올려\n집어 던지는 천하장사다.",
    "gen": 2
  },
  {
    "id": 10047,
    "koName": "헤라크로스",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "벌레",
      "격투"
    ],
    "koFlavor": "자랑스러운 뿔을 상대의 배\n밑에 틀어박고 단번에 들어 올려\n집어 던지는 천하장사다.",
    "gen": 2
  },
  {
    "id": 215,
    "koName": "포푸니",
    "formType": null,
    "formLabel": "",
    "types": [
      "악",
      "얼음"
    ],
    "koFlavor": "거처에서 알을 가로채어 먹어\n버린다. 날카로운 갈고리 손톱이\n상대의 급소를 베어 가른다.",
    "gen": 2
  },
  {
    "id": 10235,
    "koName": "포푸니",
    "formType": "hisui",
    "formLabel": "",
    "types": [
      "격투",
      "독"
    ],
    "koFlavor": "거처에서 알을 가로채어 먹어\n버린다. 날카로운 갈고리 손톱이\n상대의 급소를 베어 가른다.",
    "gen": 2
  },
  {
    "id": 216,
    "koName": "깜지곰",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "꿀을 발견하면 초승달 모양이\n빛난다. 달콤한꿀이 배어든\n손바닥을 항상 핥고 있다.",
    "gen": 2
  },
  {
    "id": 217,
    "koName": "링곰",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "어떠한 냄새라도 구별할 수 있다.\n땅속 깊이 파묻혀 있는\n먹이도 남김없이 찾아낸다.",
    "gen": 2
  },
  {
    "id": 218,
    "koName": "마그마그",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "화산 지대에 많이 나타난다.\n따뜻한 곳을 찾아서\n느릿느릿 기어 다니고 있다.",
    "gen": 2
  },
  {
    "id": 219,
    "koName": "마그카르고",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃",
      "바위"
    ],
    "koFlavor": "등껍질은 깨어지기 쉬우며\n가끔 체내를 순환하고 있는\n고열의 불꽃을 뿜어낸다.",
    "gen": 2
  },
  {
    "id": 220,
    "koName": "꾸꾸리",
    "formType": null,
    "formLabel": "",
    "types": [
      "얼음",
      "땅"
    ],
    "koFlavor": "먹이를 찾기 위해 코를\n바닥에 비벼 땅을 파고 있다.\n가끔 온천을 찾아낸다.",
    "gen": 2
  },
  {
    "id": 221,
    "koName": "메꾸리",
    "formType": null,
    "formLabel": "",
    "types": [
      "얼음",
      "땅"
    ],
    "koFlavor": "4개의 다리는 짧지만\n발굽이 넓고 거칠거칠하므로\n눈 위도 미끄러지지 않고 걸을 수 있다.",
    "gen": 2
  },
  {
    "id": 222,
    "koName": "코산호",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "바위"
    ],
    "koFlavor": "점점 자라면서 다시 돋아나는\n머리의 끝이 아름다워\n보물로서 인기가 많다.",
    "gen": 2
  },
  {
    "id": 10173,
    "koName": "코산호",
    "formType": "galar",
    "formLabel": "",
    "types": [
      "고스트"
    ],
    "koFlavor": "점점 자라면서 다시 돋아나는\n머리의 끝이 아름다워\n보물로서 인기가 많다.",
    "gen": 2
  },
  {
    "id": 223,
    "koName": "총어",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "조준이 정확하다. 뿜어낸 물은\n100m 앞에서 움직이는\n먹이를 반드시 명중시킨다.",
    "gen": 2
  },
  {
    "id": 224,
    "koName": "대포무노",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "구멍에 들어가고 싶어 하는 성질로\n바위굴이나 항아리를 좋아해 거기서\n먹물을 뿜어내 공격한다.",
    "gen": 2
  },
  {
    "id": 225,
    "koName": "딜리버드",
    "formType": null,
    "formLabel": "",
    "types": [
      "얼음",
      "비행"
    ],
    "koFlavor": "꼬리로 먹이를 싸서 운반한다.\n산에서 조난당한 사람에게\n먹이를 나눠주는 습성이 있다.",
    "gen": 2
  },
  {
    "id": 226,
    "koName": "만타인",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "비행"
    ],
    "koFlavor": "헤엄쳐서 스피드가 빨라지면\n파도 위에 뛰어올라 그대로\n100m나 활공한다.",
    "gen": 2
  },
  {
    "id": 227,
    "koName": "무장조",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철",
      "비행"
    ],
    "koFlavor": "가시나무 안에 둥지를 만든다.\n가시에 상처를 입어가며 자라난\n새끼들의 날개는 단단해진다.",
    "gen": 2
  },
  {
    "id": 10284,
    "koName": "무장조",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "강철",
      "비행"
    ],
    "koFlavor": "가시나무 안에 둥지를 만든다.\n가시에 상처를 입어가며 자라난\n새끼들의 날개는 단단해진다.",
    "gen": 2
  },
  {
    "id": 228,
    "koName": "델빌",
    "formType": null,
    "formLabel": "",
    "types": [
      "악",
      "불꽃"
    ],
    "koFlavor": "새벽녘에 주변 일대에\n울려 퍼지는 기분 나쁜 울음소리로\n자신들의 영역을 어필한다.",
    "gen": 2
  },
  {
    "id": 229,
    "koName": "헬가",
    "formType": null,
    "formLabel": "",
    "types": [
      "악",
      "불꽃"
    ],
    "koFlavor": "헬가가 으스스하게 멀리서 짖으면\n지옥에서 사신이 부르는 소리라고\n옛날 사람들은 상상하고 있었다.",
    "gen": 2
  },
  {
    "id": 10048,
    "koName": "헬가",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "악",
      "불꽃"
    ],
    "koFlavor": "헬가가 으스스하게 멀리서 짖으면\n지옥에서 사신이 부르는 소리라고\n옛날 사람들은 상상하고 있었다.",
    "gen": 2
  },
  {
    "id": 230,
    "koName": "킹드라",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "드래곤"
    ],
    "koFlavor": "평소에는 해저동굴에\n몸을 숨기고 있는 것 같다. 하품으로\n소용돌이를 발생시킨다.",
    "gen": 2
  },
  {
    "id": 231,
    "koName": "코코리",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅"
    ],
    "koFlavor": "애정 표현으로 코를\n부딪쳐 오지만 힘이 있기 때문에\n조심하지 않으면 날아가 버린다.",
    "gen": 2
  },
  {
    "id": 232,
    "koName": "코리갑",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅"
    ],
    "koFlavor": "예리하고 단단한 이빨과\n더욱 튼튼한 피부의\n몸통박치기는 집도 부술 정도다.",
    "gen": 2
  },
  {
    "id": 233,
    "koName": "폴리곤2",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "더욱 연구가 진행되어\n능력이 올라갔다. 가끔\n프로그램에 없는 행동을 보인다.",
    "gen": 2
  },
  {
    "id": 234,
    "koName": "노라키",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "뿔을 응시하고 있으면 원의\n중심에 빨려 들어가는 것 같은\n이상한 기분이 든다.",
    "gen": 2
  },
  {
    "id": 235,
    "koName": "루브도",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "꼬리를 붓처럼 써서\n영역에 마크를 그린다.\n그 종류는 5000개 이상이다.",
    "gen": 2
  },
  {
    "id": 236,
    "koName": "배루키",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투"
    ],
    "koFlavor": "항상 기운이 넘친다.\n강해지기 위해 계속 져도\n상대에게 맞선다.",
    "gen": 2
  },
  {
    "id": 237,
    "koName": "카포에라",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투"
    ],
    "koFlavor": "팽이처럼 회전하면서\n싸운다. 원심력의 파워로\n파괴력은 10배다.",
    "gen": 2
  },
  {
    "id": 238,
    "koName": "뽀뽀라",
    "formType": null,
    "formLabel": "",
    "types": [
      "얼음",
      "에스퍼"
    ],
    "koFlavor": "입술이 제일 민감하다.\n뭐든지 먼저 입술로 건드려서\n어떤 것인지 확인한다.",
    "gen": 2
  },
  {
    "id": 239,
    "koName": "에레키드",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "양팔을 빙글빙글 휘둘러서\n전기를 발생시킨다. 그러나\n만들어낸 전기는 모아둘 수 없다.",
    "gen": 2
  },
  {
    "id": 240,
    "koName": "마그비",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "작은 몸이지만 체온은 600도다.\n숨을 들이쉬고 내쉴 때마다\n입과 코에서 불꽃이 샌다.",
    "gen": 2
  },
  {
    "id": 241,
    "koName": "밀탱크",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "새끼가 태어났을 때에\n짜낸 우유는 평상시보다\n영양이 듬뿍 담겨 있다.",
    "gen": 2
  },
  {
    "id": 242,
    "koName": "해피너스",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "해피너스가 낳은 알에는\n행복이 담겨 있어서 한 입 먹으면\n누구든지 웃음 띤 얼굴이 된다.",
    "gen": 2
  },
  {
    "id": 243,
    "koName": "라이코",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "비구름을 짊어지고 있어서\n어떤 때라도 번개를 칠 수 있다.\n번개와 함께 떨어졌다고 한다.",
    "gen": 2
  },
  {
    "id": 244,
    "koName": "앤테이",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "새로운 화산이 생길 때마다\n태어난다고 전해지는\n대지를 달리는 포켓몬이다.",
    "gen": 2
  },
  {
    "id": 245,
    "koName": "스이쿤",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "세계 곳곳을 뛰어다니며\n오염된 물을 정화시킨다.\n북풍과 함께 달려나간다.",
    "gen": 2
  },
  {
    "id": 246,
    "koName": "애버라스",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "땅"
    ],
    "koFlavor": "흙을 먹으며 살고 있다.\n큰 산을 하나 다 먹으면\n성장을 위해 잠자기 시작한다.",
    "gen": 2
  },
  {
    "id": 247,
    "koName": "데기라스",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "땅"
    ],
    "koFlavor": "암반 같은 단단한 몸이다.\n압축한 가스를 분사해서\n마치 로켓같이 날아간다.",
    "gen": 2
  },
  {
    "id": 248,
    "koName": "마기라스",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "악"
    ],
    "koFlavor": "한쪽 팔을 움직이는 것만으로도\n산을 무너뜨리고 땅을 울리게 하는\n엄청난 힘을 감추고 있다.",
    "gen": 2
  },
  {
    "id": 10049,
    "koName": "마기라스",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "바위",
      "악"
    ],
    "koFlavor": "한쪽 팔을 움직이는 것만으로도\n산을 무너뜨리고 땅을 울리게 하는\n엄청난 힘을 감추고 있다.",
    "gen": 2
  },
  {
    "id": 249,
    "koName": "루기아",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼",
      "비행"
    ],
    "koFlavor": "깊은 해구의 밑바닥에서 잠잔다.\n루기아가 날개를 치면 40일 동안\n폭풍우가 계속된다고 전해진다.",
    "gen": 2
  },
  {
    "id": 250,
    "koName": "칠색조",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃",
      "비행"
    ],
    "koFlavor": "몸은 일곱 빛으로 빛나고\n날아간 자리에는 무지개가 생긴다는\n신화 속에 남아 있는 포켓몬이다.",
    "gen": 2
  },
  {
    "id": 251,
    "koName": "세레비",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼",
      "풀"
    ],
    "koFlavor": "시간을 넘어 여기저기를 방황한다.\n세레비가 모습을 나타낸\n숲은 초목이 무성해진다고 한다.",
    "gen": 2
  },
  {
    "id": 252,
    "koName": "나무지기",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "수직으로 된 벽도 쭉쭉\n타고 올라간다. 꼬리로 공기 중의 습도를\n감지해서 내일 날씨를 맞힌다.",
    "gen": 3
  },
  {
    "id": 253,
    "koName": "나무돌이",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "발달한 넓적다리의 근육이\n경이로운 순발력과\n도약력을 만들어 낸다.",
    "gen": 3
  },
  {
    "id": 254,
    "koName": "나무킹",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "팔에 자란 잎사귀는 큰 나무도\n싹둑 베어 넘어뜨리는 정도다.\n밀림의 싸움에서는 무적이다.",
    "gen": 3
  },
  {
    "id": 10065,
    "koName": "나무킹",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "풀",
      "드래곤"
    ],
    "koFlavor": "팔에 자란 잎사귀는 큰 나무도\n싹둑 베어 넘어뜨리는 정도다.\n밀림의 싸움에서는 무적이다.",
    "gen": 3
  },
  {
    "id": 255,
    "koName": "아차모",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "몸속에 불꽃 주머니를 지니고 있어서\n껴안으면 따끈따끈하다.\n살아 있는 한 계속 불타오른다.",
    "gen": 3
  },
  {
    "id": 256,
    "koName": "영치코",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃",
      "격투"
    ],
    "koFlavor": "1초에 킥을 10번 날릴 정도로\n발을 사용하는 기술에 능하다.\n날카로운 울음소리로 위협한다.",
    "gen": 3
  },
  {
    "id": 257,
    "koName": "번치코",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃",
      "격투"
    ],
    "koFlavor": "30층 빌딩을 점프로\n넘는 점프력을 가졌다.\n불꽃펀치가 상대를 태운다.",
    "gen": 3
  },
  {
    "id": 10050,
    "koName": "번치코",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "불꽃",
      "격투"
    ],
    "koFlavor": "30층 빌딩을 점프로\n넘는 점프력을 가졌다.\n불꽃펀치가 상대를 태운다.",
    "gen": 3
  },
  {
    "id": 258,
    "koName": "물짱이",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "커다란 꼬리지느러미로 물을 헤치면\n스피드가 쑥쑥 오른다.\n작은 몸이지만 힘이 장사다.",
    "gen": 3
  },
  {
    "id": 259,
    "koName": "늪짱이",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "땅"
    ],
    "koFlavor": "발밑이 질퍽거려도 잘 걸을 수\n있는 튼튼한 다리를 가졌다.\n진흙에 몸을 묻고 잠잔다.",
    "gen": 3
  },
  {
    "id": 260,
    "koName": "대짱이",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "땅"
    ],
    "koFlavor": "돌처럼 딱딱한 팔을\n한 번 휘두르는 것만으로 거대한\n돌을 조각조각으로 부순다.",
    "gen": 3
  },
  {
    "id": 10064,
    "koName": "대짱이",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "물",
      "땅"
    ],
    "koFlavor": "돌처럼 딱딱한 팔을\n한 번 휘두르는 것만으로 거대한\n돌을 조각조각으로 부순다.",
    "gen": 3
  },
  {
    "id": 261,
    "koName": "포챠나",
    "formType": null,
    "formLabel": "",
    "types": [
      "악"
    ],
    "koFlavor": "집요한 성격의 포켓몬이다.\n점찍은 먹이가 기진맥진\n지칠 때까지 뒤쫓아간다.",
    "gen": 3
  },
  {
    "id": 262,
    "koName": "그라에나",
    "formType": null,
    "formLabel": "",
    "types": [
      "악"
    ],
    "koFlavor": "우수한 트레이너의 명령에는\n절대복종한다. 먼 옛날\n무리를 지어 행동했던 영향이다.",
    "gen": 3
  },
  {
    "id": 263,
    "koName": "지그제구리",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "지그재그로 걸어서 풀숲이나\n땅에 묻혀 있는 보물을\n찾아내는 것이 특기인 포켓몬이다.",
    "gen": 3
  },
  {
    "id": 10174,
    "koName": "지그제구리",
    "formType": "galar",
    "formLabel": "",
    "types": [
      "악",
      "노말"
    ],
    "koFlavor": "지그재그로 걸어서 풀숲이나\n땅에 묻혀 있는 보물을\n찾아내는 것이 특기인 포켓몬이다.",
    "gen": 3
  },
  {
    "id": 264,
    "koName": "직구리",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "똑바로 달리는 스피드는\n시속 100km를 가볍게 넘는다.\n휘어진 길은 매우 서툴다.",
    "gen": 3
  },
  {
    "id": 10175,
    "koName": "직구리",
    "formType": "galar",
    "formLabel": "",
    "types": [
      "악",
      "노말"
    ],
    "koFlavor": "똑바로 달리는 스피드는\n시속 100km를 가볍게 넘는다.\n휘어진 길은 매우 서툴다.",
    "gen": 3
  },
  {
    "id": 265,
    "koName": "개무소",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레"
    ],
    "koFlavor": "잎사귀를 매우 좋아한다.\n찌르꼬에게 습격당했을 때는\n엉덩이의 가시로 물리친다.",
    "gen": 3
  },
  {
    "id": 266,
    "koName": "실쿤",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레"
    ],
    "koFlavor": "실을 나뭇가지에 휘감고 있다.\n실에 묻은 빗물을 마시며\n진화할 때를 기다리고 있다.",
    "gen": 3
  },
  {
    "id": 267,
    "koName": "뷰티플라이",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "비행"
    ],
    "koFlavor": "색이 선명한 날개의 무늬가\n특징이다. 가는 입을 뻗어\n꽃의 달콤한 꿀을 흡수한다.",
    "gen": 3
  },
  {
    "id": 268,
    "koName": "카스쿤",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레"
    ],
    "koFlavor": "부드러운 실로 된 몸은\n시간이 지나면서 단단해진다.\n진화가 임박하면 갈라지기 시작한다.",
    "gen": 3
  },
  {
    "id": 269,
    "koName": "독케일",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "독"
    ],
    "koFlavor": "야행성 포켓몬이다. 불빛에\n이끌려나온 독케일이 가로수의\n잎을 헤적거리며 먹어댄다.",
    "gen": 3
  },
  {
    "id": 270,
    "koName": "연꽃몬",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "풀"
    ],
    "koFlavor": "수초를 똑 닮은 포켓몬이다.\n헤엄을 못 치는 포켓몬을 잎사귀에\n태워 건너편 물가까지 운반한다.",
    "gen": 3
  },
  {
    "id": 271,
    "koName": "로토스",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "풀"
    ],
    "koFlavor": "햇볕이 잘 드는 물가에 산다.\n낮에는 수초로 된 침대에서\n자고 해가 지면 활동하기 시작한다.",
    "gen": 3
  },
  {
    "id": 272,
    "koName": "로파파",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "풀"
    ],
    "koFlavor": "경쾌한 음악을 들으면\n몸속의 힘이 넘쳐흘러\n춤추지 않고는 견딜 수 없게 된다.",
    "gen": 3
  },
  {
    "id": 273,
    "koName": "도토링",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "머리끝을 가지에 붙여\n매달린다. 강풍이 불어\n떨어지기도 한다.",
    "gen": 3
  },
  {
    "id": 274,
    "koName": "잎새코",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "악"
    ],
    "koFlavor": "잎새코가 연주하는 풀피리의\n음색은 사람을 불안하게 만든다.\n숲 속에서 살고 있다.",
    "gen": 3
  },
  {
    "id": 275,
    "koName": "다탱구",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "악"
    ],
    "koFlavor": "숲의 신이라고 여겨져 두려움의\n대상이 되고 있던 포켓몬. 상대의\n생각을 읽고 앞지르는 능력을 지녔다.",
    "gen": 3
  },
  {
    "id": 276,
    "koName": "테일로",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "비행"
    ],
    "koFlavor": "강한 상대에게도 용감히\n맞서는 근성의 소유자다.\n따뜻한 땅을 찾아서 난다.",
    "gen": 3
  },
  {
    "id": 277,
    "koName": "스왈로",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "비행"
    ],
    "koFlavor": "2개의 꼬리날개가 꼿꼿하게\n서 있으면 건강하다는 증거다.\n우아하게 넓은 하늘을 날아다닌다.",
    "gen": 3
  },
  {
    "id": 278,
    "koName": "갈모매",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "비행"
    ],
    "koFlavor": "긴 날개로 바닷바람을 받아서\n글라이더처럼 활공한다.\n쉴 때는 날개를 접는다.",
    "gen": 3
  },
  {
    "id": 279,
    "koName": "패리퍼",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "비행"
    ],
    "koFlavor": "큰 부리를 바다에 넣고 먹이를\n한 번에 많이 건져 올리려는\n속셈이다.",
    "gen": 3
  },
  {
    "id": 280,
    "koName": "랄토스",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼",
      "페어리"
    ],
    "koFlavor": "빨간 뿔로 사람이나 포켓몬의\n따뜻한 마음을 캐치하면\n전신이 미약하게 뜨거워진다.",
    "gen": 3
  },
  {
    "id": 281,
    "koName": "킬리아",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼",
      "페어리"
    ],
    "koFlavor": "트레이너의 밝은 마음이\n사이코 파워의 근원이다.\n즐거워지면 빙글빙글 춤춘다.",
    "gen": 3
  },
  {
    "id": 282,
    "koName": "가디안",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼",
      "페어리"
    ],
    "koFlavor": "트레이너를 지키기 위해서라면\n사이코 파워를 모두 써서 작은\n블랙홀을 만들어 낸다.",
    "gen": 3
  },
  {
    "id": 10051,
    "koName": "가디안",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "에스퍼",
      "페어리"
    ],
    "koFlavor": "트레이너를 지키기 위해서라면\n사이코 파워를 모두 써서 작은\n블랙홀을 만들어 낸다.",
    "gen": 3
  },
  {
    "id": 283,
    "koName": "비구술",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "물"
    ],
    "koFlavor": "보통은 연못에서 살고 있지만\n소나기가 온 뒤에는 마을 안의\n물웅덩이에 모습을 드러낸다.",
    "gen": 3
  },
  {
    "id": 284,
    "koName": "비나방",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "비행"
    ],
    "koFlavor": "눈알 모양의 더듬이를 가지고 있다.\n4장의 날개로 떠올라\n전후좌우로 움직일 수 있다.",
    "gen": 3
  },
  {
    "id": 285,
    "koName": "버섯꼬",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "습한 장소를 좋아해서 낮에는\n숲의 그늘에서 가만히 있다.\n머리에서 독가루를 뿌린다.",
    "gen": 3
  },
  {
    "id": 286,
    "koName": "버섯모",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "격투"
    ],
    "koFlavor": "짧은 팔은 펀치를 날릴 때\n쑤-욱 늘어난다. 프로 복서를\n압도하는 기술을 가지고 있다.",
    "gen": 3
  },
  {
    "id": 287,
    "koName": "게을로",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "게을로의 게으른 모습은\n보고 있는 사람의 게으른 마음을\n충분히 자극한다.",
    "gen": 3
  },
  {
    "id": 288,
    "koName": "발바로",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "심장 박동이 빨라 전신의\n피가 끓어오르고 있기 때문에\n1초도 가만히 있지 못한다.",
    "gen": 3
  },
  {
    "id": 289,
    "koName": "게을킹",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "세계에서 제일 게으른 포켓몬이다.\n손이 닿는 범위의 먹이를\n다 먹으면 있는 거처를 바꾼다.",
    "gen": 3
  },
  {
    "id": 290,
    "koName": "토중몬",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "땅"
    ],
    "koFlavor": "긴 시간 동안 땅속에서 살고\n있었기 때문에 눈은 거의 보이지 않는다.\n더듬이로 주변 상황을 살핀다.",
    "gen": 3
  },
  {
    "id": 291,
    "koName": "아이스크",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "비행"
    ],
    "koFlavor": "울음소리를 계속 들으면\n두통이 낫지 않게 된다.\n안 보일 정도의 스피드로 움직인다.",
    "gen": 3
  },
  {
    "id": 292,
    "koName": "껍질몬",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "고스트"
    ],
    "koFlavor": "허물 속으로 영혼이 들어갔다.\n등에 난 틈새로 들여다보면\n영혼을 빼앗겨버린다고 한다.",
    "gen": 3
  },
  {
    "id": 293,
    "koName": "소곤룡",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "평소에는 속삭이는 듯한 목소리다. 위험을\n감지하면 큰 소리로 울기 시작한다.\n귀의 덮개를 닫으면 울음을 멈춘다.",
    "gen": 3
  },
  {
    "id": 294,
    "koName": "노공룡",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "마음껏 들이마신 공기를\n발달한 복근을 써서\n토해내 큰 소리를 낸다.",
    "gen": 3
  },
  {
    "id": 295,
    "koName": "폭음룡",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "폭음룡이 짖는 소리는 10km\n전방까지 닿는다. 몸 곳곳의\n구멍에서 갖가지 소리를 낸다.",
    "gen": 3
  },
  {
    "id": 296,
    "koName": "마크탕",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투"
    ],
    "koFlavor": "큰 나무에 몇 번이나 몸통박치기를\n하며 강인한 몸과 굴하지 않는\n마음을 단련한다.",
    "gen": 3
  },
  {
    "id": 297,
    "koName": "하리뭉",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투"
    ],
    "koFlavor": "두 다리로 땅을 힘껏 밟아서\n파워를 모은다. 손바닥 치기 한 방으로\n10톤 트럭을 날려버린다.",
    "gen": 3
  },
  {
    "id": 298,
    "koName": "루리리",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "페어리"
    ],
    "koFlavor": "큰 꼬리에 타고 튀면\n지상에서 빨리 이동할 수 있다.\n물가에서 사는 포켓몬이다.",
    "gen": 3
  },
  {
    "id": 299,
    "koName": "코코파스",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위"
    ],
    "koFlavor": "항상 북쪽을 향한다.\n자석의 코로 주변의 철을\n끌어당겨 방어를 굳힌다.",
    "gen": 3
  },
  {
    "id": 300,
    "koName": "에나비",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "움직이는 것을 무심코 쫓아간다.\n자신의 꼬리를 쫓아서\n똑같은 장소를 빙글빙글 돈다.",
    "gen": 3
  },
  {
    "id": 301,
    "koName": "델케티",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "더러운 곳을 아주 싫어한다.\n편안한 곳에서\n늘 털을 다듬고 있다.",
    "gen": 3
  },
  {
    "id": 302,
    "koName": "깜까미",
    "formType": null,
    "formLabel": "",
    "types": [
      "악",
      "고스트"
    ],
    "koFlavor": "동굴의 어둠에 숨는다.\n보석을 먹는 사이에\n눈이 보석이 되어 버렸다.",
    "gen": 3
  },
  {
    "id": 10066,
    "koName": "깜까미",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "악",
      "고스트"
    ],
    "koFlavor": "동굴의 어둠에 숨는다.\n보석을 먹는 사이에\n눈이 보석이 되어 버렸다.",
    "gen": 3
  },
  {
    "id": 303,
    "koName": "입치트",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철",
      "페어리"
    ],
    "koFlavor": "얌전한 얼굴로 상대를 방심하게\n만들고 큰 턱으로 덥석 문다.\n한번 물면 절대로 놓지 않는다.",
    "gen": 3
  },
  {
    "id": 10052,
    "koName": "입치트",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "강철",
      "페어리"
    ],
    "koFlavor": "얌전한 얼굴로 상대를 방심하게\n만들고 큰 턱으로 덥석 문다.\n한번 물면 절대로 놓지 않는다.",
    "gen": 3
  },
  {
    "id": 304,
    "koName": "가보리",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철",
      "바위"
    ],
    "koFlavor": "평소에는 산속에서 살고 있지만\n배가 고프면 산기슭에 나타나\n선로나 차를 먹어 버린다.",
    "gen": 3
  },
  {
    "id": 305,
    "koName": "갱도라",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철",
      "바위"
    ],
    "koFlavor": "철광석을 매우 좋아한다.\n강철의 몸을 서로 부딪치며\n영역 싸움을 한다.",
    "gen": 3
  },
  {
    "id": 306,
    "koName": "보스로라",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철",
      "바위"
    ],
    "koFlavor": "산을 통째로 영역으로 한다.\n상처가 많은 보스로라일수록\n많이 싸웠다는 것이므로 얕볼 수 없다.",
    "gen": 3
  },
  {
    "id": 10053,
    "koName": "보스로라",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "강철"
    ],
    "koFlavor": "산을 통째로 영역으로 한다.\n상처가 많은 보스로라일수록\n많이 싸웠다는 것이므로 얕볼 수 없다.",
    "gen": 3
  },
  {
    "id": 307,
    "koName": "요가랑",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투",
      "에스퍼"
    ],
    "koFlavor": "평상시는 깊은 산속에서 수행한다.\n명상을 하고 정신력을\n높이면 몸이 떠오른다.",
    "gen": 3
  },
  {
    "id": 308,
    "koName": "요가램",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투",
      "에스퍼"
    ],
    "koFlavor": "춤추는 듯한 우아한 움직임으로\n공격을 피하며 상대에게\n강력한 일격을 선사한다.",
    "gen": 3
  },
  {
    "id": 10054,
    "koName": "요가램",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "격투",
      "에스퍼"
    ],
    "koFlavor": "춤추는 듯한 우아한 움직임으로\n공격을 피하며 상대에게\n강력한 일격을 선사한다.",
    "gen": 3
  },
  {
    "id": 309,
    "koName": "썬더라이",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "털에 모은 전기를 써서\n근육을 자극함으로써\n순발력을 높인다.",
    "gen": 3
  },
  {
    "id": 310,
    "koName": "썬더볼트",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "좀처럼 사람 앞에 모습을\n드러내지 않는다. 번개가 떨어진\n곳에 보금자리가 있다고 한다.",
    "gen": 3
  },
  {
    "id": 10055,
    "koName": "썬더볼트",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "좀처럼 사람 앞에 모습을\n드러내지 않는다. 번개가 떨어진\n곳에 보금자리가 있다고 한다.",
    "gen": 3
  },
  {
    "id": 311,
    "koName": "플러시",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "스파크를 톡톡 만들어\n동료를 응원한다.\n전신주에서 전기를 흡수한다.",
    "gen": 3
  },
  {
    "id": 312,
    "koName": "마이농",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "마이농과 플러시의 전기는\n혈액의 흐름을 좋게 하여\n근육 결림을 푸는 효과가 있다.",
    "gen": 3
  },
  {
    "id": 313,
    "koName": "볼비트",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레"
    ],
    "koFlavor": "밤이 되면 엉덩이를 빛나게 해\n동료와 대화한다. 네오비트가\n내는 달콤한 향기를 매우 좋아한다.",
    "gen": 3
  },
  {
    "id": 314,
    "koName": "네오비트",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레"
    ],
    "koFlavor": "달콤한 향기로 볼비트를\n유도해서 200개 이상의\n모양을 밤하늘에 그린다.",
    "gen": 3
  },
  {
    "id": 315,
    "koName": "로젤리아",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "독"
    ],
    "koFlavor": "오른손과 왼손으로 2종류의\n독을 구별하여 공격한다.\n향기가 강할수록 기운이 넘친다.",
    "gen": 3
  },
  {
    "id": 316,
    "koName": "꼴깍몬",
    "formType": null,
    "formLabel": "",
    "types": [
      "독"
    ],
    "koFlavor": "심장과 뇌가 작고\n몸 대부분이 위다.\n무엇이든 녹이는 위액을 낸다.",
    "gen": 3
  },
  {
    "id": 317,
    "koName": "꿀꺽몬",
    "formType": null,
    "formLabel": "",
    "types": [
      "독"
    ],
    "koFlavor": "무엇이든 통째로 삼켜 버린다.\n모공에서 맹독의 체액을\n분비하여 상대에게 끼얹는다.",
    "gen": 3
  },
  {
    "id": 318,
    "koName": "샤프니아",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "악"
    ],
    "koFlavor": "집단으로 배를 공격해\n배의 밑바닥도 물어뜯어 가라앉힌다.\n정글의 강에 서식한다.",
    "gen": 3
  },
  {
    "id": 319,
    "koName": "샤크니아",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "악"
    ],
    "koFlavor": "철판도 물어 찢는 이빨을 가지며\n헤엄치는 속도는 시속 120km다.\n별명은 바다의 건달이다.",
    "gen": 3
  },
  {
    "id": 10070,
    "koName": "샤크니아",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "물",
      "악"
    ],
    "koFlavor": "철판도 물어 찢는 이빨을 가지며\n헤엄치는 속도는 시속 120km다.\n별명은 바다의 건달이다.",
    "gen": 3
  },
  {
    "id": 320,
    "koName": "고래왕자",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "공처럼 튀면서 논다.\n해수를 많이 마실수록\n높이 튀게 된다.",
    "gen": 3
  },
  {
    "id": 321,
    "koName": "고래왕",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "커다란 몸을 파도 위에서\n점프시켜 충격을 만들어\n상대를 기절시킬 때가 있다.",
    "gen": 3
  },
  {
    "id": 322,
    "koName": "둔타",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃",
      "땅"
    ],
    "koFlavor": "이글거리는 마그마를 등의\n혹에 모으고 있다. 비를 맞으면\n마그마가 식어 움직임이 둔해진다.",
    "gen": 3
  },
  {
    "id": 323,
    "koName": "폭타",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃",
      "땅"
    ],
    "koFlavor": "등의 혹 모양 화산은\n10년마다 대분화하나\n심하게 화가 나도 분화한다.",
    "gen": 3
  },
  {
    "id": 10087,
    "koName": "폭타",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "불꽃",
      "땅"
    ],
    "koFlavor": "등의 혹 모양 화산은\n10년마다 대분화하나\n심하게 화가 나도 분화한다.",
    "gen": 3
  },
  {
    "id": 324,
    "koName": "코터스",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "사용할 수 없게 된 탄광에는\n많은 코터스가 살며\n석탄을 부지런히 캐고 있다.",
    "gen": 3
  },
  {
    "id": 325,
    "koName": "피그점프",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "꼬리를 용수철 대용으로 써서 항상\n뛰어오르고 있다. 뛰는 반동으로\n심장을 고동시키고 있는 것이다.",
    "gen": 3
  },
  {
    "id": 326,
    "koName": "피그킹",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "흑진주로 사이코 파워를\n강하게 하여 기묘한 스텝으로\n상대의 마음을 조종한다.",
    "gen": 3
  },
  {
    "id": 327,
    "koName": "얼루기",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "똑같은 얼룩무늬의 얼루기는\n없다. 휘청휘청거리는 걸음걸이로\n상대의 노림수를 피한다.",
    "gen": 3
  },
  {
    "id": 328,
    "koName": "톱치",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅"
    ],
    "koFlavor": "건조한 사막에 서식한다.\n원뿔형의 보금자리 속에서\n조용히 먹잇감을 계속 기다린다.",
    "gen": 3
  },
  {
    "id": 329,
    "koName": "비브라바",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅",
      "드래곤"
    ],
    "koFlavor": "2장의 날개를 고속으로\n진동시켜서 내는 초음파는\n격렬한 두통을 불러일으킨다.",
    "gen": 3
  },
  {
    "id": 330,
    "koName": "플라이곤",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅",
      "드래곤"
    ],
    "koFlavor": "날갯짓으로 모래 폭풍을\n일으켜 모습을 감춘다. 빨간\n덮개가 모래로부터 눈을 보호한다.",
    "gen": 3
  },
  {
    "id": 331,
    "koName": "선인왕",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "비가 적은 건조한\n지역에 서식한다. 1년에 1번\n노랑 꽃을 피운다.",
    "gen": 3
  },
  {
    "id": 332,
    "koName": "밤선인",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "악"
    ],
    "koFlavor": "밤이 되면 활동을 시작한다.\n사막의 뜨거움에 몹시 지친\n먹이를 찾아내어 붙잡는다.",
    "gen": 3
  },
  {
    "id": 333,
    "koName": "파비코",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "비행"
    ],
    "koFlavor": "사람의 머리 위에\n살짝 앉아 모자처럼\n구는 것을 왠지 좋아한다.",
    "gen": 3
  },
  {
    "id": 334,
    "koName": "파비코리",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤",
      "비행"
    ],
    "koFlavor": "넓은 하늘을 느긋하게 난다.\n파비코리의 아름다운 콧노래를\n들으면 황홀한 꿈을 꾸는 기분이다.",
    "gen": 3
  },
  {
    "id": 10067,
    "koName": "파비코리",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "드래곤",
      "페어리"
    ],
    "koFlavor": "넓은 하늘을 느긋하게 난다.\n파비코리의 아름다운 콧노래를\n들으면 황홀한 꿈을 꾸는 기분이다.",
    "gen": 3
  },
  {
    "id": 335,
    "koName": "쟝고",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "몇 대에 걸쳐서\n세비퍼와 싸워왔다.\n날카로운 발톱이 최대의 무기다.",
    "gen": 3
  },
  {
    "id": 336,
    "koName": "세비퍼",
    "formType": null,
    "formLabel": "",
    "types": [
      "독"
    ],
    "koFlavor": "맹독이 배어 나오는\n예리하고 잘 드는 꼬리로\n재빠른 쟝고에게 맞선다.",
    "gen": 3
  },
  {
    "id": 337,
    "koName": "루나톤",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "에스퍼"
    ],
    "koFlavor": "보름달의 밤이 되면 활발하게\n활동하기 때문에 달의 변화와\n관계 있다고 전해진다.",
    "gen": 3
  },
  {
    "id": 338,
    "koName": "솔록",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "에스퍼"
    ],
    "koFlavor": "태양 에너지가 파워의\n근원이라서 낮에는 강하다.\n회전하면 몸이 빛난다.",
    "gen": 3
  },
  {
    "id": 339,
    "koName": "미꾸리",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "땅"
    ],
    "koFlavor": "전신이 미끈미끈한 체액으로\n덮여있기 때문에 잡아도\n미끈하게 빠져나갈 수 있다.",
    "gen": 3
  },
  {
    "id": 340,
    "koName": "메깅",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "땅"
    ],
    "koFlavor": "큰 늪을 영역으로 한다.\n적이 가까이 오면 크게 난동 부려서\n큰 지진을 일으킨다.",
    "gen": 3
  },
  {
    "id": 341,
    "koName": "가재군",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "아무리 물이 더러운\n강이라도 적응해서 번식하는\n터프한 생명력의 소유자.",
    "gen": 3
  },
  {
    "id": 342,
    "koName": "가재장군",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "악"
    ],
    "koFlavor": "연못에 사는 다른 포켓몬을\n집게로 집어들어 연못 밖으로\n내던져버리는 난동꾼이다.",
    "gen": 3
  },
  {
    "id": 343,
    "koName": "오뚝군",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅",
      "에스퍼"
    ],
    "koFlavor": "한 다리로 회전하면서\n이동한다. 거꾸로\n회전하는 오뚝군도 발견된다.",
    "gen": 3
  },
  {
    "id": 344,
    "koName": "점토도리",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅",
      "에스퍼"
    ],
    "koFlavor": "고대의 진흙인형이 괴이한\n광선을 쬐어 생명이 깃들면서\n포켓몬이 되었다.",
    "gen": 3
  },
  {
    "id": 345,
    "koName": "릴링",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "풀"
    ],
    "koFlavor": "촉수를 꽃잎으로 보이게 하여\n가까이 온 먹이를 잡는다.\n1억 년 전에 멸종했다.",
    "gen": 3
  },
  {
    "id": 346,
    "koName": "릴리요",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "풀"
    ],
    "koFlavor": "따뜻한 바다의 얕은 곳에 있다.\n바닷물이 빠지면 모래 해변에\n숨어 있는 먹이를 파내어 먹는다.",
    "gen": 3
  },
  {
    "id": 347,
    "koName": "아노딥스",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "벌레"
    ],
    "koFlavor": "포켓몬의 조상 중 하나다.\n해저의 바위 지대에 숨어 있는\n먹잇감을 늘어나는 발톱으로 잡는다.",
    "gen": 3
  },
  {
    "id": 348,
    "koName": "아말도",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "벌레"
    ],
    "koFlavor": "늘었다 줄었다 하는 거대한 손톱으로\n먹이를 찔러서 잡는다.\n튼튼한 갑옷을 몸에 두르고 있다.",
    "gen": 3
  },
  {
    "id": 349,
    "koName": "빈티나",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "무엇이든 먹기 때문에 더러운\n강이나 호수에서도 살 수 있다.\n누구도 주목하지 않는 포켓몬이다.",
    "gen": 3
  },
  {
    "id": 350,
    "koName": "밀로틱",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "밀로틱의 아름다운 모습을\n본 이는 싸우려던 마음가짐을\n잊어버린다고 한다.",
    "gen": 3
  },
  {
    "id": 351,
    "koName": "캐스퐁",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "기온이나 습도의 변화가\n몸의 세포에 영향을 주어\n모습을 바꾸는 포켓몬이다.",
    "gen": 3
  },
  {
    "id": 10013,
    "koName": "캐스퐁",
    "formType": "form",
    "formLabel": "태양",
    "types": [
      "불꽃"
    ],
    "koFlavor": "기온이나 습도의 변화가\n몸의 세포에 영향을 주어\n모습을 바꾸는 포켓몬이다.",
    "gen": 3
  },
  {
    "id": 10014,
    "koName": "캐스퐁",
    "formType": "form",
    "formLabel": "빗방울",
    "types": [
      "물"
    ],
    "koFlavor": "기온이나 습도의 변화가\n몸의 세포에 영향을 주어\n모습을 바꾸는 포켓몬이다.",
    "gen": 3
  },
  {
    "id": 10015,
    "koName": "캐스퐁",
    "formType": "form",
    "formLabel": "눈구름",
    "types": [
      "얼음"
    ],
    "koFlavor": "기온이나 습도의 변화가\n몸의 세포에 영향을 주어\n모습을 바꾸는 포켓몬이다.",
    "gen": 3
  },
  {
    "id": 352,
    "koName": "켈리몬",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "몸의 색을 자유롭게 바꾸는\n능력을 가지고 있다. 배에 있는\n톱니무늬만은 바뀌지 않는다.",
    "gen": 3
  },
  {
    "id": 353,
    "koName": "어둠대신",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트"
    ],
    "koFlavor": "머리의 뿔로 원한과 질투의\n감정을 먹는다고 전해진다.\n한밤중에 활발하게 활동한다.",
    "gen": 3
  },
  {
    "id": 354,
    "koName": "다크펫",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트"
    ],
    "koFlavor": "버려진 인형에 원념이\n깃들어 포켓몬이 되었다.\n자신을 버린 아이를 찾고 있다.",
    "gen": 3
  },
  {
    "id": 10056,
    "koName": "다크펫",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "고스트"
    ],
    "koFlavor": "버려진 인형에 원념이\n깃들어 포켓몬이 되었다.\n자신을 버린 아이를 찾고 있다.",
    "gen": 3
  },
  {
    "id": 355,
    "koName": "해골몽",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트"
    ],
    "koFlavor": "어디까지라도 먹이를 쫓아가는\n집념이 강한 성격이지만\n아침 해가 떠오르면 포기한다.",
    "gen": 3
  },
  {
    "id": 356,
    "koName": "미라몽",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트"
    ],
    "koFlavor": "몸 안에서 불타고 있는\n도깨비불을 들여다보면\n영혼을 빼앗겨버린다.",
    "gen": 3
  },
  {
    "id": 357,
    "koName": "트로피우스",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "비행"
    ],
    "koFlavor": "커다란 잎으로 하늘을 날며\n아이들에게 인기가 많은 목에\n생기는 달콤한 과일을 나눠준다.",
    "gen": 3
  },
  {
    "id": 358,
    "koName": "치렁",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "머리의 빨판으로 나뭇가지나\n집의 처마 밑에 매달린다.\n7종류의 음색을 나누어 쓴다.",
    "gen": 3
  },
  {
    "id": 10306,
    "koName": "치렁",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "에스퍼",
      "강철"
    ],
    "koFlavor": "머리의 빨판으로 나뭇가지나\n집의 처마 밑에 매달린다.\n7종류의 음색을 나누어 쓴다.",
    "gen": 3
  },
  {
    "id": 359,
    "koName": "앱솔",
    "formType": null,
    "formLabel": "",
    "types": [
      "악"
    ],
    "koFlavor": "재해의 위험을 감지한다.\n위험을 알리는 때에만\n사람 앞에 나타난다고 한다.",
    "gen": 3
  },
  {
    "id": 10057,
    "koName": "앱솔",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "악"
    ],
    "koFlavor": "재해의 위험을 감지한다.\n위험을 알리는 때에만\n사람 앞에 나타난다고 한다.",
    "gen": 3
  },
  {
    "id": 360,
    "koName": "마자",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "무리를 지어 행동하는 습성이 있다.\n잠들 때는 동굴 안에서\n동료들과 서로 몸을 붙인다.",
    "gen": 3
  },
  {
    "id": 361,
    "koName": "눈꼬마",
    "formType": null,
    "formLabel": "",
    "types": [
      "얼음"
    ],
    "koFlavor": "커다란 잎사귀 아래서\n여러 마리의 눈꼬마가 모여\n사이좋게 살고 있다고 한다.",
    "gen": 3
  },
  {
    "id": 362,
    "koName": "얼음귀신",
    "formType": null,
    "formLabel": "",
    "types": [
      "얼음"
    ],
    "koFlavor": "공기 중의 수분을 얼려서\n얼음 갑옷으로 몸을\n둘러싸 몸을 보호한다.",
    "gen": 3
  },
  {
    "id": 10074,
    "koName": "얼음귀신",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "얼음"
    ],
    "koFlavor": "공기 중의 수분을 얼려서\n얼음 갑옷으로 몸을\n둘러싸 몸을 보호한다.",
    "gen": 3
  },
  {
    "id": 363,
    "koName": "대굴레오",
    "formType": null,
    "formLabel": "",
    "types": [
      "얼음",
      "물"
    ],
    "koFlavor": "아직 능숙하게 헤엄치지 못하고\n구르는 쪽이 빨리 움직일 수 있다.\n기쁘면 다 같이 손뼉을 친다.",
    "gen": 3
  },
  {
    "id": 364,
    "koName": "씨레오",
    "formType": null,
    "formLabel": "",
    "types": [
      "얼음",
      "물"
    ],
    "koFlavor": "코의 신경이 민감하다.\n처음 보는 것은\n코로 문질러서 기억한다.",
    "gen": 3
  },
  {
    "id": 365,
    "koName": "씨카이저",
    "formType": null,
    "formLabel": "",
    "types": [
      "얼음",
      "물"
    ],
    "koFlavor": "큰 얼음을 이빨로 부순다.\n두꺼운 지방은 추위뿐만 아니라\n상대의 공격도 이겨낸다.",
    "gen": 3
  },
  {
    "id": 366,
    "koName": "진주몽",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "일생에 한 번 진화할 때\n사이코 파워를 증폭시키는\n이상한 진주를 만든다.",
    "gen": 3
  },
  {
    "id": 367,
    "koName": "헌테일",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "빛이 닿지 않는 심해에 서식한다.\n작은 생선처럼 생긴 꼬리를\n빛내어 먹잇감을 유인한다.",
    "gen": 3
  },
  {
    "id": 368,
    "koName": "분홍장이",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "바다의 밑바닥에 살고 있지만\n봄이 되면 몸의 분홍색이\n웬일인지 선명하게 물든다.",
    "gen": 3
  },
  {
    "id": 369,
    "koName": "시라칸",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "바위"
    ],
    "koFlavor": "1억 년 전부터 모습이\n바뀌지 않은 포켓몬이다. 심해를\n조사하던 중 발견되었다.",
    "gen": 3
  },
  {
    "id": 370,
    "koName": "사랑동이",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "따뜻한 바다에서 서식한다.\n사랑동이를 발견한 커플은\n영원한 사랑이 지속된다고 한다.",
    "gen": 3
  },
  {
    "id": 371,
    "koName": "아공이",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤"
    ],
    "koFlavor": "단련된 목 근육과\n철과 같이 단단한 머리로\n커다란 바위를 조각조각으로 부순다.",
    "gen": 3
  },
  {
    "id": 372,
    "koName": "쉘곤",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤"
    ],
    "koFlavor": "단단한 껍질 안은 세포가\n변화를 시작하고 있다. 진화하는\n순간에 껍질이 벗겨져 떨어진다.",
    "gen": 3
  },
  {
    "id": 373,
    "koName": "보만다",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤",
      "비행"
    ],
    "koFlavor": "화나게 하면 어쩔 도리가 없다.\n모든 것을 발톱으로 갈기갈기 찢고\n불꽃으로 태워서 파괴한다.",
    "gen": 3
  },
  {
    "id": 10089,
    "koName": "보만다",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "드래곤",
      "비행"
    ],
    "koFlavor": "화나게 하면 어쩔 도리가 없다.\n모든 것을 발톱으로 갈기갈기 찢고\n불꽃으로 태워서 파괴한다.",
    "gen": 3
  },
  {
    "id": 374,
    "koName": "메탕",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철",
      "에스퍼"
    ],
    "koFlavor": "몸에서 나오는 자력과\n지상의 자력을\n충돌시켜 하늘에 떠오른다.",
    "gen": 3
  },
  {
    "id": 375,
    "koName": "메탕구",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철",
      "에스퍼"
    ],
    "koFlavor": "2마리의 메탕이 합체했다.\n강철의 몸은 제트기와\n충돌해도 상처 입지 않는다.",
    "gen": 3
  },
  {
    "id": 376,
    "koName": "메타그로스",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철",
      "에스퍼"
    ],
    "koFlavor": "4개의 뇌가 연결되어\n슈퍼컴퓨터보다 대단한\n계산으로 상대를 분석한다.",
    "gen": 3
  },
  {
    "id": 10076,
    "koName": "메타그로스",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "강철",
      "에스퍼"
    ],
    "koFlavor": "4개의 뇌가 연결되어\n슈퍼컴퓨터보다 대단한\n계산으로 상대를 분석한다.",
    "gen": 3
  },
  {
    "id": 377,
    "koName": "레지락",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위"
    ],
    "koFlavor": "전신이 바위로 되어 있다.\n싸움으로 몸이 깨어져도\n바위를 붙여서 치료해 버린다.",
    "gen": 3
  },
  {
    "id": 378,
    "koName": "레지아이스",
    "formType": null,
    "formLabel": "",
    "types": [
      "얼음"
    ],
    "koFlavor": "빙하 안에서 몇천 년이나\n잠들어 있었다고 전해진다.\n마그마로도 몸이 녹지 않는다.",
    "gen": 3
  },
  {
    "id": 379,
    "koName": "레지스틸",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철"
    ],
    "koFlavor": "몇만 년 동안 지하의 압력에 의해서\n단련된 금속의 몸은\n상처 하나 입지 않는다.",
    "gen": 3
  },
  {
    "id": 380,
    "koName": "라티아스",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤",
      "에스퍼"
    ],
    "koFlavor": "텔레파시로 마음이 통한다.\n빛을 굴절시키는 깃털로\n몸을 둘러싸 모습을 지운다.",
    "gen": 3
  },
  {
    "id": 10062,
    "koName": "라티아스",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "드래곤",
      "에스퍼"
    ],
    "koFlavor": "텔레파시로 마음이 통한다.\n빛을 굴절시키는 깃털로\n몸을 둘러싸 모습을 지운다.",
    "gen": 3
  },
  {
    "id": 381,
    "koName": "라티오스",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤",
      "에스퍼"
    ],
    "koFlavor": "높은 지능을 가진 포켓몬이다.\n팔을 접어 날면 제트기를\n추월할 만큼 빠르다.",
    "gen": 3
  },
  {
    "id": 10063,
    "koName": "라티오스",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "드래곤",
      "에스퍼"
    ],
    "koFlavor": "높은 지능을 가진 포켓몬이다.\n팔을 접어 날면 제트기를\n추월할 만큼 빠르다.",
    "gen": 3
  },
  {
    "id": 382,
    "koName": "가이오가",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "많은 비와 큰 해일로 바다를\n넓힌 신화의 포켓몬이다.\n그란돈과 격하게 싸웠다.",
    "gen": 3
  },
  {
    "id": 10077,
    "koName": "가이오가",
    "formType": "primal",
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "많은 비와 큰 해일로 바다를\n넓힌 신화의 포켓몬이다.\n그란돈과 격하게 싸웠다.",
    "gen": 3
  },
  {
    "id": 383,
    "koName": "그란돈",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅"
    ],
    "koFlavor": "고열로 물을 증발시켜\n대지를 넓혔다고 전해진다.\n가이오가와 격하게 싸웠다.",
    "gen": 3
  },
  {
    "id": 10078,
    "koName": "그란돈",
    "formType": "primal",
    "formLabel": "",
    "types": [
      "땅",
      "불꽃"
    ],
    "koFlavor": "고열로 물을 증발시켜\n대지를 넓혔다고 전해진다.\n가이오가와 격하게 싸웠다.",
    "gen": 3
  },
  {
    "id": 384,
    "koName": "레쿠쟈",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤",
      "비행"
    ],
    "koFlavor": "구름보다 아득히 먼 위의 오존층에\n서식하고 있기 때문에 지상에서\n모습을 볼 수 없다.",
    "gen": 3
  },
  {
    "id": 10079,
    "koName": "레쿠쟈",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "드래곤",
      "비행"
    ],
    "koFlavor": "구름보다 아득히 먼 위의 오존층에\n서식하고 있기 때문에 지상에서\n모습을 볼 수 없다.",
    "gen": 3
  },
  {
    "id": 385,
    "koName": "지라치",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철",
      "에스퍼"
    ],
    "koFlavor": "깨어났을 때 머리의 종이에\n쓴 소원을 이루어준다고\n먼 옛날부터 구전되었다.",
    "gen": 3
  },
  {
    "id": 386,
    "koName": "테오키스",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "운석에 붙어 있던\n우주 바이러스의 DNA가\n변이하여 생겨난 포켓몬이다.",
    "gen": 3
  },
  {
    "id": 10001,
    "koName": "테오키스",
    "formType": "form",
    "formLabel": "어택",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "운석에 붙어 있던\n우주 바이러스의 DNA가\n변이하여 생겨난 포켓몬이다.",
    "gen": 3
  },
  {
    "id": 10002,
    "koName": "테오키스",
    "formType": "form",
    "formLabel": "디펜스",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "운석에 붙어 있던\n우주 바이러스의 DNA가\n변이하여 생겨난 포켓몬이다.",
    "gen": 3
  },
  {
    "id": 10003,
    "koName": "테오키스",
    "formType": "form",
    "formLabel": "스피드",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "운석에 붙어 있던\n우주 바이러스의 DNA가\n변이하여 생겨난 포켓몬이다.",
    "gen": 3
  },
  {
    "id": 387,
    "koName": "모부기",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "태양의 빛을 쬐어\n전신으로 광합성을 한다.\n등껍질은 흙이 딱딱해진 것이다.",
    "gen": 4
  },
  {
    "id": 388,
    "koName": "수풀부기",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "숲 속의 물가에서 산다.\n낮에는 숲 밖으로 나와서\n등껍질의 나무에 빛을 쬔다.",
    "gen": 4
  },
  {
    "id": 389,
    "koName": "토대부기",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "땅"
    ],
    "koFlavor": "오랜 옛날 사람들은 대지\n밑에 거대한 토대부기가\n있다고 공상했었다.",
    "gen": 4
  },
  {
    "id": 390,
    "koName": "불꽃숭이",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "엉덩이의 불꽃은 배에서\n만들어진 가스가 연료다.\n비에 젖어도 꺼지지 않는다.",
    "gen": 4
  },
  {
    "id": 391,
    "koName": "파이숭이",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃",
      "격투"
    ],
    "koFlavor": "꼬리의 불꽃 세기를\n잘 컨트롤하여 자신에게\n맞는 거리를 두고 싸운다.",
    "gen": 4
  },
  {
    "id": 392,
    "koName": "초염몽",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃",
      "격투"
    ],
    "koFlavor": "머리에서 타오르는 불꽃처럼\n과격한 성격의 포켓몬이다.\n스피드는 누구에게도 지지 않는다.",
    "gen": 4
  },
  {
    "id": 393,
    "koName": "팽도리",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "신세를 지는 것을 싫어한다.\n트레이너의 지시를 듣지 않아\n친해지기 어렵다.",
    "gen": 4
  },
  {
    "id": 394,
    "koName": "팽태자",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "무리를 만들지 않고 혼자 생활한다.\n어떤 팽태자라도 자신이 제일\n훌륭하다고 생각하는 듯하다.",
    "gen": 4
  },
  {
    "id": 395,
    "koName": "엠페르트",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "강철"
    ],
    "koFlavor": "제트스키와 맞먹는 속도로\n헤엄친다. 날개 가장자리는\n날카롭게 유빙을 절단한다.",
    "gen": 4
  },
  {
    "id": 396,
    "koName": "찌르꼬",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "비행"
    ],
    "koFlavor": "많은 수가 무리를 이루어\n행동한다. 몸은 작지만\n날개 치는 힘은 매우 강하다.",
    "gen": 4
  },
  {
    "id": 397,
    "koName": "찌르버드",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "비행"
    ],
    "koFlavor": "큰 그룹을 만들어\n행동하는 습성이 있다.\n그룹 간의 분쟁이 격하다.",
    "gen": 4
  },
  {
    "id": 398,
    "koName": "찌르호크",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "비행"
    ],
    "koFlavor": "날개와 발의 근육이 강해\n작은 포켓몬을 붙잡은 채로\n너끈히 날 수 있다.",
    "gen": 4
  },
  {
    "id": 10308,
    "koName": "찌르호크",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "격투",
      "비행"
    ],
    "koFlavor": "날개와 발의 근육이 강해\n작은 포켓몬을 붙잡은 채로\n너끈히 날 수 있다.",
    "gen": 4
  },
  {
    "id": 399,
    "koName": "비버니",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "어떤 것에도 동요하지 않는\n대담한 신경의 소유자다.\n보기보다는 기민하게 활동한다.",
    "gen": 4
  },
  {
    "id": 400,
    "koName": "비버통",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "물"
    ],
    "koFlavor": "예리한 앞니로 갉아 얻은\n나뭇가지나 뿌리를 쌓아\n물가에 부지런히 보금자리를 만든다.",
    "gen": 4
  },
  {
    "id": 401,
    "koName": "귀뚤뚜기",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레"
    ],
    "koFlavor": "더듬이를 서로 부딪쳐 내는\n소리로 동료와 대화한다. 음색은\n가을밤의 정취를 잘 나타낸다.",
    "gen": 4
  },
  {
    "id": 402,
    "koName": "귀뚤톡크",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레"
    ],
    "koFlavor": "울 때는 나이프 같은 팔을\n가슴 앞에서 교차시킨다.\n즉흥으로 멜로디를 만든다.",
    "gen": 4
  },
  {
    "id": 403,
    "koName": "꼬링크",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "몸을 움직일 때마다 근육이 늘어났다\n줄어들었다 하여 전기가 발생한다.\n궁지에 몰리면 몸이 빛난다.",
    "gen": 4
  },
  {
    "id": 404,
    "koName": "럭시오",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "발톱에서는 한 방에 적을 기절시킬\n정도로 강한 전류가 흐른다.\n여러 마리가 그룹을 이루어 산다.",
    "gen": 4
  },
  {
    "id": 405,
    "koName": "렌트라",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "눈동자가 금색으로 빛날 때\n벽의 저편에 숨어 있는\n먹이를 찾아낼 수 있다.",
    "gen": 4
  },
  {
    "id": 406,
    "koName": "꼬몽울",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "독"
    ],
    "koFlavor": "따뜻한 햇볕을 쬐면\n봉오리를 펴서 꽃가루를 날린다.\n깨끗한 물 가까이에 거처가 있다.",
    "gen": 4
  },
  {
    "id": 407,
    "koName": "로즈레이드",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "독"
    ],
    "koFlavor": "달콤한 향기로 먹이를 유인해\n양팔의 독 채찍을 사용하여\n찌르거나 조여서 꼼짝 못하게 한다.",
    "gen": 4
  },
  {
    "id": 408,
    "koName": "두개도스",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위"
    ],
    "koFlavor": "철구 같은 화석에서\n부활한 고대 포켓몬이다.\n박치기로 먹이를 꼼짝 못하게 한다.",
    "gen": 4
  },
  {
    "id": 409,
    "koName": "램펄드",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위"
    ],
    "koFlavor": "어떤 충격에도 견딜 수 있는\n두꺼운 두개골에 눌려\n뇌가 자라지 않았다.",
    "gen": 4
  },
  {
    "id": 410,
    "koName": "방패톱스",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "강철"
    ],
    "koFlavor": "큰 나무의 줄기에 비벼서\n단단한 얼굴을 닦는 습성이 있다.\n뒤로부터의 공격에 약하다.",
    "gen": 4
  },
  {
    "id": 411,
    "koName": "바리톱스",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "강철"
    ],
    "koFlavor": "옆에 한 줄로 세우면 어떤\n포켓몬이라도 돌파하지 못한다.\n그렇게 하여 아기를 지켜냈다.",
    "gen": 4
  },
  {
    "id": 412,
    "koName": "도롱충이",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레"
    ],
    "koFlavor": "차가운 초겨울 바람을 막으려고\n작은 가지나 낙엽을 재료로\n도롱이를 만들어 몸을 감싼다.",
    "gen": 4
  },
  {
    "id": 413,
    "koName": "도롱마담",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "풀"
    ],
    "koFlavor": "진화한 장소에 따라 모습이\n바뀐다. 가까이 있는 재료가\n몸의 일부가 된다.",
    "gen": 4
  },
  {
    "id": 414,
    "koName": "나메일",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "비행"
    ],
    "koFlavor": "꽃의 꿀을 매우 좋아한다.\n세꿀버리가 모아둔 꿀을\n가로채어 먹어 버린다.",
    "gen": 4
  },
  {
    "id": 415,
    "koName": "세꿀버리",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "비행"
    ],
    "koFlavor": "태어났을 때부터 3마리가 함께한다.\n비퀸을 기쁘게 하기 위해\n항상 꽃의 꿀을 모으고 있다.",
    "gen": 4
  },
  {
    "id": 416,
    "koName": "비퀸",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "비행"
    ],
    "koFlavor": "몸통은 아기들의 둥지다.\n여러 페로몬을 내어\n새끼들을 자유롭게 조종한다.",
    "gen": 4
  },
  {
    "id": 417,
    "koName": "파치리스",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "정전기가 모여 톡톡 튀는 솜털을\n자신이 좋아하는 나무열매와 함께\n나무줄기의 구멍에 숨긴다.",
    "gen": 4
  },
  {
    "id": 418,
    "koName": "브이젤",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "2개의 꼬리를 스크루처럼\n돌려서 헤엄친다. 잠수할 때는\n공기주머니가 오그라든다.",
    "gen": 4
  },
  {
    "id": 419,
    "koName": "플로젤",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "발달한 부낭으로 뜬다.\n물에 빠진 사람을 구조하는 것을\n돕는 포켓몬이다.",
    "gen": 4
  },
  {
    "id": 420,
    "koName": "체리버",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "햇빛으로 빨갛게 물들었다.\n영양분이 흡수되어 작은 구슬이\n시들면 곧 진화한다는 뜻이다.",
    "gen": 4
  },
  {
    "id": 421,
    "koName": "체리꼬",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "봉오리가 태양의 빛을\n쬐어 꽃잎이 피면\n활발하게 움직일 수 있게 된다.",
    "gen": 4
  },
  {
    "id": 422,
    "koName": "깝질무",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "부드러운 몸을 강하게 누르면\n보랏빛이 나는 정체불명의 액체가\n배어 나오므로 주의가 필요하다.",
    "gen": 4
  },
  {
    "id": 423,
    "koName": "트리토돈",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "땅"
    ],
    "koFlavor": "천적에게 습격당했을 때는\n보라색 액체를\n몸에서 내어 도망간다.",
    "gen": 4
  },
  {
    "id": 424,
    "koName": "겟핸보숭",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "많은 무리로 행동한다.\n꼬리를 맞잡아 원을 만든다.\n우정의 표시인 듯하다.",
    "gen": 4
  },
  {
    "id": 425,
    "koName": "흔들풍손",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트",
      "비행"
    ],
    "koFlavor": "사람이나 포켓몬의 영혼이\n한데 모여 태어난 포켓몬이다.\n습기 많은 계절을 매우 좋아한다.",
    "gen": 4
  },
  {
    "id": 426,
    "koName": "둥실라이드",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트",
      "비행"
    ],
    "koFlavor": "사람이나 포켓몬을 태우고 날지만\n바람에 떠밀려 다닐 뿐이므로\n어디로 날아갈지 모른다.",
    "gen": 4
  },
  {
    "id": 427,
    "koName": "이어롤",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "항상 말고 있는 귀를\n힘껏 늘리면 커다란\n바위도 간단히 부순다.",
    "gen": 4
  },
  {
    "id": 428,
    "koName": "이어롭",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "경계심이 아주 강하다.\n위험을 감지하면 가뿐하게\n뛰어올라 달아난다.",
    "gen": 4
  },
  {
    "id": 10088,
    "koName": "이어롭",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "노말",
      "격투"
    ],
    "koFlavor": "경계심이 아주 강하다.\n위험을 감지하면 가뿐하게\n뛰어올라 달아난다.",
    "gen": 4
  },
  {
    "id": 429,
    "koName": "무우마직",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트"
    ],
    "koFlavor": "주문을 외는 포켓몬이다.\n상대를 고통스럽게 하는 것뿐만\n아니라 행복하게 하는 주문도 있다.",
    "gen": 4
  },
  {
    "id": 430,
    "koName": "돈크로우",
    "formType": null,
    "formLabel": "",
    "types": [
      "악",
      "비행"
    ],
    "koFlavor": "돈크로우가 낮은 목소리로 울면\n즉시 니로우가 모여들기에\n밤을 부르는 자라고도 전해진다.",
    "gen": 4
  },
  {
    "id": 431,
    "koName": "나옹마",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "마음에 안 들면 발톱을 세우지만\n가끔 울음소리로 응석을 부리는\n성격이 일부에게 매우 인기가 있다.",
    "gen": 4
  },
  {
    "id": 432,
    "koName": "몬냥이",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "다른 포켓몬의 거처라 할지라도\n편안하면 눌러앉아\n자신의 거처로 삼아버린다.",
    "gen": 4
  },
  {
    "id": 433,
    "koName": "랑딸랑",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "뛸 때마다 딸랑딸랑 소리를 낸다.\n높은 주파수의 울음소리로\n상대의 귀를 들리지 않게 한다.",
    "gen": 4
  },
  {
    "id": 434,
    "koName": "스컹뿡",
    "formType": null,
    "formLabel": "",
    "types": [
      "독",
      "악"
    ],
    "koFlavor": "엉덩이에서 뿜어지는 역한 분비액의\n냄새는 범위 2km까지 멀리 퍼져\n주변의 포켓몬이 자리를 뜨게 한다.",
    "gen": 4
  },
  {
    "id": 435,
    "koName": "스컹탱크",
    "formType": null,
    "formLabel": "",
    "types": [
      "독",
      "악"
    ],
    "koFlavor": "꼬리 끝에서 심한 냄새가 나는\n액체를 뿌려 공격한다.\n사정거리는 50m 이상이다.",
    "gen": 4
  },
  {
    "id": 436,
    "koName": "동미러",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철",
      "에스퍼"
    ],
    "koFlavor": "동미러의 등 모양에는\n신비한 힘이 깃들어 있다고\n옛날 사람들은 믿고 있었다.",
    "gen": 4
  },
  {
    "id": 437,
    "koName": "동탁군",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철",
      "에스퍼"
    ],
    "koFlavor": "비구름을 부르는 포켓몬으로\n아주 옛날부터 떠받들어졌다.\n가끔 땅에 묻혀 있다.",
    "gen": 4
  },
  {
    "id": 438,
    "koName": "꼬지지",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위"
    ],
    "koFlavor": "건조한 장소를 좋아한다.\n눈에서 물을 내어 몸의\n수분을 조절한다.",
    "gen": 4
  },
  {
    "id": 439,
    "koName": "흉내내",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼",
      "페어리"
    ],
    "koFlavor": "상대의 움직임을 똑같이\n흉내 내어 당황한\n사이에 재빨리 도망친다.",
    "gen": 4
  },
  {
    "id": 440,
    "koName": "핑복",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "알을 닮은 둥근 돌을\n배의 주머니에 넣고 있다.\n좋아하는 상대에게 돌을 준다.",
    "gen": 4
  },
  {
    "id": 441,
    "koName": "페라페",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "비행"
    ],
    "koFlavor": "상대와 같은 울음소리를 내서\n동료라고 굳게 믿게 하여\n습격당하지 않도록 하고 있다.",
    "gen": 4
  },
  {
    "id": 442,
    "koName": "화강돌",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트",
      "악"
    ],
    "koFlavor": "108개의 영혼이 모여서\n태어난 포켓몬이다. 쐐기돌의\n균열과 연결되어 있다.",
    "gen": 4
  },
  {
    "id": 443,
    "koName": "딥상어동",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤",
      "땅"
    ],
    "koFlavor": "지열로 데워진 구멍에서\n지낸다. 적이 가까이 오면 구멍에서\n뛰쳐나와 커다란 입으로 물어버린다.",
    "gen": 4
  },
  {
    "id": 444,
    "koName": "한바이트",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤",
      "땅"
    ],
    "koFlavor": "반짝반짝 빛나는 것을\n아주 좋아하기에 동굴 안에서 발견한\n보물을 자신의 둥지에 모아둔다.",
    "gen": 4
  },
  {
    "id": 445,
    "koName": "한카리아스",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤",
      "땅"
    ],
    "koFlavor": "몸을 접고 날개를\n펼치면 마치 제트기 같다.\n음속으로 날 수 있다.",
    "gen": 4
  },
  {
    "id": 10058,
    "koName": "한카리아스",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "드래곤",
      "땅"
    ],
    "koFlavor": "몸을 접고 날개를\n펼치면 마치 제트기 같다.\n음속으로 날 수 있다.",
    "gen": 4
  },
  {
    "id": 446,
    "koName": "먹고자",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "몸의 긴 털 안쪽에\n먹이를 숨기는 습성이 있다.\n숨긴 것을 잊어버린다.",
    "gen": 4
  },
  {
    "id": 447,
    "koName": "리오르",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투"
    ],
    "koFlavor": "감정에 따라 모양이 변하는\n파동을 서로 내어 동료끼리\n커뮤니케이션을 취하고 있다.",
    "gen": 4
  },
  {
    "id": 448,
    "koName": "루카리오",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투",
      "강철"
    ],
    "koFlavor": "상대가 발하는 파동을\n감지하여 생각이나\n움직임을 간파할 수 있다.",
    "gen": 4
  },
  {
    "id": 10059,
    "koName": "루카리오",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "격투",
      "강철"
    ],
    "koFlavor": "상대가 발하는 파동을\n감지하여 생각이나\n움직임을 간파할 수 있다.",
    "gen": 4
  },
  {
    "id": 449,
    "koName": "히포포타스",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅"
    ],
    "koFlavor": "건조한 땅에서 산다.\n땀 대신 모래알을\n몸에서 분비하는 포켓몬이다.",
    "gen": 4
  },
  {
    "id": 450,
    "koName": "하마돈",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅"
    ],
    "koFlavor": "크게 입을 벌려 자신의\n강함을 어필한다. 대량의\n모래를 일으켜 공격한다.",
    "gen": 4
  },
  {
    "id": 451,
    "koName": "스콜피",
    "formType": null,
    "formLabel": "",
    "types": [
      "독",
      "벌레"
    ],
    "koFlavor": "꼬리의 발톱으로 먹이를 집어\n독을 주입한다. 독이 퍼질 때까지\n절대 놓치지 않는 집념이 있다.",
    "gen": 4
  },
  {
    "id": 452,
    "koName": "드래피온",
    "formType": null,
    "formLabel": "",
    "types": [
      "독",
      "악"
    ],
    "koFlavor": "자랑거리인 파워로 상대를\n조각조각 낼 수 있으며 게다가\n맹독으로 마무리한다.",
    "gen": 4
  },
  {
    "id": 453,
    "koName": "삐딱구리",
    "formType": null,
    "formLabel": "",
    "types": [
      "독",
      "격투"
    ],
    "koFlavor": "볼에 독주머니를 가지고 있다.\n상대의 틈을 노려 맹독이\n배인 손가락을 꿰찌른다.",
    "gen": 4
  },
  {
    "id": 454,
    "koName": "독개굴",
    "formType": null,
    "formLabel": "",
    "types": [
      "독",
      "격투"
    ],
    "koFlavor": "목 주변에 독주머니를 지녔다.\n목을 울리면 모여진 독이\n잘 섞여져서 강력해진다.",
    "gen": 4
  },
  {
    "id": 455,
    "koName": "무스틈니",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "달콤한 냄새의 타액으로 먹이를\n끌어들여 큰 턱으로 꿀꺽한다.\n하루에 걸쳐 먹이를 먹는다.",
    "gen": 4
  },
  {
    "id": 456,
    "koName": "형광어",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "몸의 옆쪽에 있는 줄에\n태양의 빛을 모아둘 수 있다.\n밤이 되면 아름답게 빛난다.",
    "gen": 4
  },
  {
    "id": 457,
    "koName": "네오라이트",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "깊은 바다의 밑바닥에서 산다.\n4개의 지느러미 무늬를 반짝거려\n먹이를 끌어들인다.",
    "gen": 4
  },
  {
    "id": 458,
    "koName": "타만타",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "비행"
    ],
    "koFlavor": "등의 무늬는 지역에 따라\n달라진다. 총어 무리에\n섞여 헤엄치는 일이 많다.",
    "gen": 4
  },
  {
    "id": 459,
    "koName": "눈쓰개",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "얼음"
    ],
    "koFlavor": "추운 계절에는 산기슭까지\n내려오지만 봄이 되면 눈이\n남아 있는 산 정상으로 돌아간다.",
    "gen": 4
  },
  {
    "id": 460,
    "koName": "눈설왕",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "얼음"
    ],
    "koFlavor": "블리자드를 발생시켜 주변\n일대를 새하얗게 만든다.\n별명은 아이스 몬스터다.",
    "gen": 4
  },
  {
    "id": 10060,
    "koName": "눈설왕",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "풀",
      "얼음"
    ],
    "koFlavor": "블리자드를 발생시켜 주변\n일대를 새하얗게 만든다.\n별명은 아이스 몬스터다.",
    "gen": 4
  },
  {
    "id": 461,
    "koName": "포푸니라",
    "formType": null,
    "formLabel": "",
    "types": [
      "악",
      "얼음"
    ],
    "koFlavor": "눈이 많은 지방에 서식한다.\n수목에 발톱으로 사인을 그려\n동료에게 신호를 보낸다.",
    "gen": 4
  },
  {
    "id": 462,
    "koName": "자포코일",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기",
      "강철"
    ],
    "koFlavor": "너무 강한 자력을 내어\n자포코일끼리 끌어당겨\n전혀 못 움직이기도 한다.",
    "gen": 4
  },
  {
    "id": 463,
    "koName": "내룸벨트",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "쭉쭉 늘어나는 혓바닥으로 무엇이든\n휘감는다. 함부로 다가가면\n타액으로 끈적끈적거리게 된다.",
    "gen": 4
  },
  {
    "id": 464,
    "koName": "거대코뿌리",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅",
      "바위"
    ],
    "koFlavor": "손바닥의 구멍에서 꼬마돌을\n발사한다. 전신의 프로텍터는\n화산의 분화도 견뎌낸다.",
    "gen": 4
  },
  {
    "id": 465,
    "koName": "덩쿠림보",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "식물의 덩굴로 이루어진 팔을\n늘여서 먹이를 포박한다.\n팔을 먹혀도 아무렇지도 않다.",
    "gen": 4
  },
  {
    "id": 466,
    "koName": "에레키블",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "전기를 가득 모으면\n2개의 뿔 사이에서 세차게\n푸르스름한 불티를 뿌린다.",
    "gen": 4
  },
  {
    "id": 467,
    "koName": "마그마번",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "팔 끝에서 섭씨 2000도의\n불구슬을 발사한다.\n화산의 분화구를 거처로 삼는다.",
    "gen": 4
  },
  {
    "id": 468,
    "koName": "토게키스",
    "formType": null,
    "formLabel": "",
    "types": [
      "페어리",
      "비행"
    ],
    "koFlavor": "다툼이 없는 평화로운 땅에\n토게키스가 나타나 여러 가지\n은총을 나눠줬다고 전해진다.",
    "gen": 4
  },
  {
    "id": 469,
    "koName": "메가자리",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "비행"
    ],
    "koFlavor": "고속으로 날아서 스친\n상대의 목을 한순간에\n물어뜯는 싸움법을 선호한다.",
    "gen": 4
  },
  {
    "id": 470,
    "koName": "리피아",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "맑은 날에 잠든 리피아는\n광합성을 해서 깨끗한\n공기를 만들고 있다.",
    "gen": 4
  },
  {
    "id": 471,
    "koName": "글레이시아",
    "formType": null,
    "formLabel": "",
    "types": [
      "얼음"
    ],
    "koFlavor": "체온을 컨트롤하는 것으로\n주위의 공기를 얼려서\n다이아몬드 더스트를 날린다.",
    "gen": 4
  },
  {
    "id": 472,
    "koName": "글라이온",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅",
      "비행"
    ],
    "koFlavor": "꼬리로 나뭇가지에 매달려\n먹이를 관찰한다. 틈을\n봐서 상공에서 덮친다.",
    "gen": 4
  },
  {
    "id": 473,
    "koName": "맘모꾸리",
    "formType": null,
    "formLabel": "",
    "types": [
      "얼음",
      "땅"
    ],
    "koFlavor": "1만 년 전의 얼음 밑에서\n발견된 적이 있을 정도로\n오랜 옛날부터 있었던 포켓몬이다.",
    "gen": 4
  },
  {
    "id": 474,
    "koName": "폴리곤Z",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "더욱 우수한 포켓몬으로 만들고자\n프로그램을 추가했지만 어쩐지\n괴상하게 행동하기 시작했다.",
    "gen": 4
  },
  {
    "id": 475,
    "koName": "엘레이드",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼",
      "격투"
    ],
    "koFlavor": "상대의 생각을 민감하게\n포착하는 능력을 가졌기 때문에\n먼저 공격할 수 있다.",
    "gen": 4
  },
  {
    "id": 10068,
    "koName": "엘레이드",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "에스퍼",
      "격투"
    ],
    "koFlavor": "상대의 생각을 민감하게\n포착하는 능력을 가졌기 때문에\n먼저 공격할 수 있다.",
    "gen": 4
  },
  {
    "id": 476,
    "koName": "대코파스",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "강철"
    ],
    "koFlavor": "전신에서 강한 자력을 발산하고\n있다. 꼬마코파스라고 불리는\n3개의 유닛을 조종한다.",
    "gen": 4
  },
  {
    "id": 477,
    "koName": "야느와르몽",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트"
    ],
    "koFlavor": "탄력 있는 몸 안에\n갈 곳 없는 영혼을 가두어\n저승으로 데려간다고 전해진다.",
    "gen": 4
  },
  {
    "id": 478,
    "koName": "눈여아",
    "formType": null,
    "formLabel": "",
    "types": [
      "얼음",
      "고스트"
    ],
    "koFlavor": "마이너스 50도의 냉기를 뿜어\n상대를 얼려 버린다. 몸통 같은\n부분은 실제로는 빈 공간이다.",
    "gen": 4
  },
  {
    "id": 10285,
    "koName": "눈여아",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "얼음",
      "고스트"
    ],
    "koFlavor": "마이너스 50도의 냉기를 뿜어\n상대를 얼려 버린다. 몸통 같은\n부분은 실제로는 빈 공간이다.",
    "gen": 4
  },
  {
    "id": 479,
    "koName": "로토무",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기",
      "고스트"
    ],
    "koFlavor": "특수한 모터를 움직이는\n동력원으로서 긴 시간 동안\n연구되었던 포켓몬이다.",
    "gen": 4
  },
  {
    "id": 10008,
    "koName": "로토무",
    "formType": "form",
    "formLabel": "히트",
    "types": [
      "전기",
      "불꽃"
    ],
    "koFlavor": "특수한 모터를 움직이는\n동력원으로서 긴 시간 동안\n연구되었던 포켓몬이다.",
    "gen": 4
  },
  {
    "id": 10010,
    "koName": "로토무",
    "formType": "form",
    "formLabel": "프로스트",
    "types": [
      "전기",
      "얼음"
    ],
    "koFlavor": "특수한 모터를 움직이는\n동력원으로서 긴 시간 동안\n연구되었던 포켓몬이다.",
    "gen": 4
  },
  {
    "id": 10011,
    "koName": "로토무",
    "formType": "form",
    "formLabel": "스핀",
    "types": [
      "전기",
      "비행"
    ],
    "koFlavor": "특수한 모터를 움직이는\n동력원으로서 긴 시간 동안\n연구되었던 포켓몬이다.",
    "gen": 4
  },
  {
    "id": 10012,
    "koName": "로토무",
    "formType": "form",
    "formLabel": "커트",
    "types": [
      "전기",
      "풀"
    ],
    "koFlavor": "특수한 모터를 움직이는\n동력원으로서 긴 시간 동안\n연구되었던 포켓몬이다.",
    "gen": 4
  },
  {
    "id": 480,
    "koName": "유크시",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "지식의 신이라 불리고 있다.\n눈을 마주친 사람의 기억을 지워\n버리는 힘을 가지고 있다고 한다.",
    "gen": 4
  },
  {
    "id": 481,
    "koName": "엠라이트",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "슬픔의 괴로움과 즐거움의 소중함을\n사람들에게 가르쳐 주었다.\n감정의 신이라 불리고 있다.",
    "gen": 4
  },
  {
    "id": 482,
    "koName": "아그놈",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "의지의 신이라 불리고 있다.\n호수의 밑바닥에서 계속 잠을 자며\n세계의 균형을 지키고 있다.",
    "gen": 4
  },
  {
    "id": 483,
    "koName": "디아루가",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철",
      "드래곤"
    ],
    "koFlavor": "디아루가가 태어남으로써\n시간이 움직이기 시작했다는\n전설이 내려오는 포켓몬이다.",
    "gen": 4
  },
  {
    "id": 10245,
    "koName": "디아루가",
    "formType": "form",
    "formLabel": "오리진",
    "types": [
      "강철",
      "드래곤"
    ],
    "koFlavor": "디아루가가 태어남으로써\n시간이 움직이기 시작했다는\n전설이 내려오는 포켓몬이다.",
    "gen": 4
  },
  {
    "id": 484,
    "koName": "펄기아",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "드래곤"
    ],
    "koFlavor": "평행으로 늘어선 공간의\n틈새에 산다고 전해진다.\n신화에 등장하는 포켓몬이다.",
    "gen": 4
  },
  {
    "id": 10246,
    "koName": "펄기아",
    "formType": "form",
    "formLabel": "오리진",
    "types": [
      "물",
      "드래곤"
    ],
    "koFlavor": "평행으로 늘어선 공간의\n틈새에 산다고 전해진다.\n신화에 등장하는 포켓몬이다.",
    "gen": 4
  },
  {
    "id": 485,
    "koName": "히드런",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃",
      "강철"
    ],
    "koFlavor": "화산의 동굴에서 서식한다.\n십자형의 발톱을 박아서\n벽이나 천장을 돌아다닌다.",
    "gen": 4
  },
  {
    "id": 10311,
    "koName": "히드런",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "불꽃",
      "강철"
    ],
    "koFlavor": "화산의 동굴에서 서식한다.\n십자형의 발톱을 박아서\n벽이나 천장을 돌아다닌다.",
    "gen": 4
  },
  {
    "id": 486,
    "koName": "레지기가스",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "특수한 빙산이나 암석,\n마그마에서 자신의 모습과 닮은\n포켓몬을 만들었다고 전해진다.",
    "gen": 4
  },
  {
    "id": 487,
    "koName": "기라티나",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트",
      "드래곤"
    ],
    "koFlavor": "상식이 통하지 않는\n이 세상의 이면에 있다고 불리는\n깨어진 세계에 서식한다.",
    "gen": 4
  },
  {
    "id": 10007,
    "koName": "기라티나",
    "formType": "form",
    "formLabel": "오리진",
    "types": [
      "고스트",
      "드래곤"
    ],
    "koFlavor": "상식이 통하지 않는\n이 세상의 이면에 있다고 불리는\n깨어진 세계에 서식한다.",
    "gen": 4
  },
  {
    "id": 488,
    "koName": "크레세리아",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "비행할 때는 베일 같은\n날개에서 빛나는 입자를 낸다.\n초승달의 화신으로 불리고 있다.",
    "gen": 4
  },
  {
    "id": 489,
    "koName": "피오네",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "바다 온도가 높아지면\n머리의 부낭을 부풀려서\n해수면을 집단으로 떠돈다.",
    "gen": 4
  },
  {
    "id": 490,
    "koName": "마나피",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "태어났을 때부터 가지고 있는\n이상한 힘을 쓰면 어떤 포켓몬과도\n마음이 서로 통하게 된다.",
    "gen": 4
  },
  {
    "id": 491,
    "koName": "다크라이",
    "formType": null,
    "formLabel": "",
    "types": [
      "악"
    ],
    "koFlavor": "깊은 잠으로 끌어들이는 힘으로\n사람과 포켓몬에게 악몽을 꾸게 해\n자신의 영역에서 쫓아낸다.",
    "gen": 4
  },
  {
    "id": 10312,
    "koName": "다크라이",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "악"
    ],
    "koFlavor": "깊은 잠으로 끌어들이는 힘으로\n사람과 포켓몬에게 악몽을 꾸게 해\n자신의 영역에서 쫓아낸다.",
    "gen": 4
  },
  {
    "id": 492,
    "koName": "쉐이미",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "대기의 독소를 분해해서\n거칠어진 대지를 일순간에\n꽃밭으로 만드는 힘을 가지고 있다.",
    "gen": 4
  },
  {
    "id": 10006,
    "koName": "쉐이미",
    "formType": "form",
    "formLabel": "스카이",
    "types": [
      "풀",
      "비행"
    ],
    "koFlavor": "대기의 독소를 분해해서\n거칠어진 대지를 일순간에\n꽃밭으로 만드는 힘을 가지고 있다.",
    "gen": 4
  },
  {
    "id": 493,
    "koName": "아르세우스",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "알에서 모습을 나타내\n모든 세계를 창조했다고\n신오신화에서 묘사된다.",
    "gen": 4
  },
  {
    "id": 494,
    "koName": "비크티니",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼",
      "불꽃"
    ],
    "koFlavor": "승리를 부르는 포켓몬이다.\n비크티니와 함께하는 트레이너는\n그 어떤 승부에서도 승리한다고 한다.",
    "gen": 5
  },
  {
    "id": 495,
    "koName": "주리비얀",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "태양의 빛을 받으면\n평소보다 빨리 움직일 수 있다.\n손보다 덩굴을 잘 사용한다.",
    "gen": 5
  },
  {
    "id": 496,
    "koName": "샤비",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "땅을 미끄러지듯 달린다.\n빠른 움직임으로 상대를 혼란시키고\n덩굴채찍으로 꼼짝 못하게 한다.",
    "gen": 5
  },
  {
    "id": 497,
    "koName": "샤로다",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "샤로다의 고상한 눈동자로\n쏘아보아도 태연할 정도로 강한\n상대에게만 진정한 실력을 발휘한다.",
    "gen": 5
  },
  {
    "id": 498,
    "koName": "뚜꾸리",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "적의 공격을 가볍게 피하고\n코로 불구슬을 쏘아댄다.\n불꽃으로 나무열매를 구워 먹는다.",
    "gen": 5
  },
  {
    "id": 499,
    "koName": "차오꿀",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃",
      "격투"
    ],
    "koFlavor": "먹을수록 태울 것이 많아져\n위 속의 불꽃이 강해지고\n파워도 점점 넘치게 된다.",
    "gen": 5
  },
  {
    "id": 500,
    "koName": "염무왕",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃",
      "격투"
    ],
    "koFlavor": "턱의 화염으로 주먹을 불태워\n불꽃펀치를 날린다.\n동료애가 깊은 포켓몬이다.",
    "gen": 5
  },
  {
    "id": 10286,
    "koName": "염무왕",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "불꽃",
      "격투"
    ],
    "koFlavor": "턱의 화염으로 주먹을 불태워\n불꽃펀치를 날린다.\n동료애가 깊은 포켓몬이다.",
    "gen": 5
  },
  {
    "id": 501,
    "koName": "수댕이",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "배에 생기는 가리비칼은\n싸울 때뿐 아니라 딱딱한\n나무열매를 쪼갤 때도 사용한다.",
    "gen": 5
  },
  {
    "id": 502,
    "koName": "쌍검자비",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "물 흐르는 듯한 칼솜씨로\n2개의 가리비칼을 사용하는 기술은\n엄격한 수련을 통해 익힌 것이다.",
    "gen": 5
  },
  {
    "id": 503,
    "koName": "대검귀",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "상대가 눈을 깜빡이는 동안에\n앞다리에 붙어 있는 각검으로\n상대를 베고 원래대로 되돌린다.",
    "gen": 5
  },
  {
    "id": 10236,
    "koName": "대검귀",
    "formType": "hisui",
    "formLabel": "",
    "types": [
      "물",
      "악"
    ],
    "koFlavor": "상대가 눈을 깜빡이는 동안에\n앞다리에 붙어 있는 각검으로\n상대를 베고 원래대로 되돌린다.",
    "gen": 5
  },
  {
    "id": 504,
    "koName": "보르쥐",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "볼의 주머니에 먹이를 모아두고\n며칠이고 망보기를 계속한다.\n꼬리로 동료에게 신호한다.",
    "gen": 5
  },
  {
    "id": 505,
    "koName": "보르그",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "체내의 발광물질로\n눈이나 몸을 빛나게 하여\n습격해 온 상대를 풀이 죽게 만든다.",
    "gen": 5
  },
  {
    "id": 506,
    "koName": "요테리",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "얼굴을 둘러싼 긴 털은\n우수한 레이더다. 주위\n상황을 민감히 살핀다.",
    "gen": 5
  },
  {
    "id": 507,
    "koName": "하데리어",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "트레이너를 도와주면서\n다른 포켓몬을 돌보기도 하는\n매우 충실한 포켓몬.",
    "gen": 5
  },
  {
    "id": 508,
    "koName": "바랜드",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "눈보라로 길이 막힌 산에 들어가\n조난된 사람을 구해준다.\n긴 털이 추위를 막는다.",
    "gen": 5
  },
  {
    "id": 509,
    "koName": "쌔비냥",
    "formType": null,
    "formLabel": "",
    "types": [
      "악"
    ],
    "koFlavor": "귀여운 행동으로 방심하게 한 후\n그 틈에 지닌 물건을 빼앗아 간다.\n화가 나면 손톱을 세워서 반격한다.",
    "gen": 5
  },
  {
    "id": 510,
    "koName": "레파르다스",
    "formType": null,
    "formLabel": "",
    "types": [
      "악"
    ],
    "koFlavor": "아름다운 스타일은 전신의\n발달한 근육 덕분이다.\n소리도 내지 않고 밤을 달린다.",
    "gen": 5
  },
  {
    "id": 511,
    "koName": "야나프",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "기운이 없는 포켓몬에게\n머리의 잎사귀를 나눠준다.\n피로를 풀어주는 효과가 있다.",
    "gen": 5
  },
  {
    "id": 512,
    "koName": "야나키",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "가시가 잔뜩 박힌 꼬리를\n상대에게 힘껏 쳐서 공격한다.\n기질이 격한 포켓몬이다.",
    "gen": 5
  },
  {
    "id": 513,
    "koName": "바오프",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "지능이 높고 나무열매는\n구운 뒤 먹는 습성이 있다.\n사람 도와주기를 좋아한다.",
    "gen": 5
  },
  {
    "id": 514,
    "koName": "바오키",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "몸속에서 태운 불꽃을\n머리나 꼬리로 흩뿌려서\n상대를 태운다.",
    "gen": 5
  },
  {
    "id": 515,
    "koName": "앗차프",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "머리 송아리에 모은 물은\n영양 듬뿍. 꼬리를 사용해서\n그 물을 초목에 뿌린다.",
    "gen": 5
  },
  {
    "id": 516,
    "koName": "앗차키",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "꼬리에서 발사하는 고압의 물은\n콘크리트 벽도 파괴할 수 있는\n위력을 지녔다.",
    "gen": 5
  },
  {
    "id": 517,
    "koName": "몽나",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "나쁜 꿈에 시달리고 있는\n포켓몬이나 사람 앞에 나타나\n그 꿈을 먹어버리는 포켓몬.",
    "gen": 5
  },
  {
    "id": 518,
    "koName": "몽얌나",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "이마에서 나오는 연기 속에는\n사람이나 포켓몬이 꾼\n꿈이 많이 모여 있다.",
    "gen": 5
  },
  {
    "id": 519,
    "koName": "콩둘기",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "비행"
    ],
    "koFlavor": "매우 건망증이 심한 포켓몬으로\n트레이너에게 명령을 받았어도\n새로운 명령을 기다리고 있다.",
    "gen": 5
  },
  {
    "id": 520,
    "koName": "유토브",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "비행"
    ],
    "koFlavor": "유토브가 사는 숲 속에는\n싸움이 없는 평화로운 나라가\n있다고 믿어진다.",
    "gen": 5
  },
  {
    "id": 521,
    "koName": "켄호로우",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "비행"
    ],
    "koFlavor": "수컷은 머리의 장식을 흔들어서\n상대를 위협한다. 암컷의 비행\n능력은 수컷을 뛰어넘는다.",
    "gen": 5
  },
  {
    "id": 522,
    "koName": "줄뮤마",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "번개 구름이 하늘을 뒤덮으면\n나타난다. 갈기로 번개를\n붙잡아 전기를 모은다.",
    "gen": 5
  },
  {
    "id": 523,
    "koName": "제브라이카",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "격렬한 기질의 소유자.\n날뛰면 갈기에서 번개를\n사방팔방으로 방전한다.",
    "gen": 5
  },
  {
    "id": 524,
    "koName": "단굴",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위"
    ],
    "koFlavor": "육각형 귀를 가지고 있다.\n땅속 깊은 곳에서 압축된 몸은\n철 못지않게 단단하다.",
    "gen": 5
  },
  {
    "id": 525,
    "koName": "암트르",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위"
    ],
    "koFlavor": "체내에서 처리되지 못하고\n빠져나온 에너지가 덩어리져서\n주황색 결정이 되었다.",
    "gen": 5
  },
  {
    "id": 526,
    "koName": "기가이어스",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위"
    ],
    "koFlavor": "거두어들인 태양광선을\n에너지 코어로 반응시켜\n빛의 구슬로 쏘아낸다.",
    "gen": 5
  },
  {
    "id": 527,
    "koName": "또르박쥐",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼",
      "비행"
    ],
    "koFlavor": "어두운 숲이나 동굴에서 산다.\n콧구멍에서 초음파를 쏘아\n주변의 모습을 살핀다.",
    "gen": 5
  },
  {
    "id": 528,
    "koName": "맘박쥐",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼",
      "비행"
    ],
    "koFlavor": "콘크리트도 부술 정도로\n강한 초음파를 낼 때\n꼬리가 심하게 흔들린다.",
    "gen": 5
  },
  {
    "id": 529,
    "koName": "두더류",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅"
    ],
    "koFlavor": "양손의 손톱을 서로 겹치고\n몸을 고속 회전시키면서\n맹렬한 속도로 땅속을 헤쳐나간다.",
    "gen": 5
  },
  {
    "id": 530,
    "koName": "몰드류",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅",
      "강철"
    ],
    "koFlavor": "강철로 진화한 드릴은\n철판을 뚫는 파괴력을 가졌다.\n터널 공사에서 크게 활약한다.",
    "gen": 5
  },
  {
    "id": 10287,
    "koName": "몰드류",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "땅",
      "강철"
    ],
    "koFlavor": "강철로 진화한 드릴은\n철판을 뚫는 파괴력을 가졌다.\n터널 공사에서 크게 활약한다.",
    "gen": 5
  },
  {
    "id": 531,
    "koName": "다부니",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "귀의 더듬이로 상대의\n컨디션이나 알에서 포켓몬이\n언제 나올지도 알 수 있다.",
    "gen": 5
  },
  {
    "id": 10069,
    "koName": "다부니",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "노말",
      "페어리"
    ],
    "koFlavor": "귀의 더듬이로 상대의\n컨디션이나 알에서 포켓몬이\n언제 나올지도 알 수 있다.",
    "gen": 5
  },
  {
    "id": 532,
    "koName": "으랏차",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투"
    ],
    "koFlavor": "항상 각목을 끼고 있다.\n건설 현장에 나타나\n공사를 도와주는 포켓몬이다.",
    "gen": 5
  },
  {
    "id": 533,
    "koName": "토쇠골",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투"
    ],
    "koFlavor": "단련된 근육의 소유자.\n철골을 능숙하게 조종하여\n집을 해체해준다.",
    "gen": 5
  },
  {
    "id": 534,
    "koName": "노보청",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투"
    ],
    "koFlavor": "콘크리트를 만드는 기술은\n2000년 전에 노보청에게\n배운 것이라고 여겨지고 있다.",
    "gen": 5
  },
  {
    "id": 535,
    "koName": "동챙이",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "볼의 진동막을 떨어\n사람에게는 들리지 않는 음파를 내어\n동료에게 위험을 전달한다.",
    "gen": 5
  },
  {
    "id": 536,
    "koName": "두까비",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "땅"
    ],
    "koFlavor": "머리의 혹을 진동시키면\n물속에 파동이 일어나며\n땅마저 지진처럼 흔들린다.",
    "gen": 5
  },
  {
    "id": 537,
    "koName": "두빅굴",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "땅"
    ],
    "koFlavor": "주먹의 혹을 진동시켜\n펀치의 위력을 배가시킨다.\n일격에 큰 바위를 부스러뜨린다.",
    "gen": 5
  },
  {
    "id": 538,
    "koName": "던지미",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투"
    ],
    "koFlavor": "끈을 매면 파워가 올라간다.\n야생 던지미는 덩굴풀을 엮어\n자신의 띠를 만든다.",
    "gen": 5
  },
  {
    "id": 539,
    "koName": "타격귀",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투"
    ],
    "koFlavor": "최강의 태권당수를\n목표로 산속에 틀어박혀\n잠도 없이 수행한다.",
    "gen": 5
  },
  {
    "id": 540,
    "koName": "두르보",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "풀"
    ],
    "koFlavor": "잎사귀를 물어뜯어\n입에서 뱉어낸 점착실로 꿰맨다.\n스스로 옷을 만드는 포켓몬이다.",
    "gen": 5
  },
  {
    "id": 541,
    "koName": "두르쿤",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "풀"
    ],
    "koFlavor": "두르쿤이 사는 숲은 초목이\n잘 자란다. 두르쿤이 낙엽을\n영양분으로 바꾸기 때문이다.",
    "gen": 5
  },
  {
    "id": 542,
    "koName": "모아머",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "풀"
    ],
    "koFlavor": "어린 포켓몬을 보면\n입에서 내뿜는 점착실로\n잎사귀의 옷을 지어 준다.",
    "gen": 5
  },
  {
    "id": 543,
    "koName": "마디네",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "독"
    ],
    "koFlavor": "머리와 꼬리의 더듬이로\n주변 상황을 살핀다.\n성격이 매우 난폭하다.",
    "gen": 5
  },
  {
    "id": 544,
    "koName": "휠구",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "독"
    ],
    "koFlavor": "단단한 껍질로 보호되고 있다.\n타이어처럼 회전하여 상대에게\n격렬히 몸통박치기를 날린다.",
    "gen": 5
  },
  {
    "id": 545,
    "koName": "펜드라",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "독"
    ],
    "koFlavor": "먹이를 목의 가시에 끼워 넣어\n움직이지 못하게 한 후\n맹독을 퍼뜨려 마무리한다.",
    "gen": 5
  },
  {
    "id": 10288,
    "koName": "펜드라",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "벌레",
      "독"
    ],
    "koFlavor": "먹이를 목의 가시에 끼워 넣어\n움직이지 못하게 한 후\n맹독을 퍼뜨려 마무리한다.",
    "gen": 5
  },
  {
    "id": 546,
    "koName": "소미안",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "페어리"
    ],
    "koFlavor": "공격당하면 몸에서 솜을\n날린다. 상대가 솜을 소미안으로\n착각하고 있는 동안 도망친다.",
    "gen": 5
  },
  {
    "id": 547,
    "koName": "엘풍",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "페어리"
    ],
    "koFlavor": "회오리바람과 함께 나타나\n집 안의 가구를 움직이거나\n솜을 남기는 장난을 친다.",
    "gen": 5
  },
  {
    "id": 548,
    "koName": "치릴리",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "머리의 잎사귀를 갉아먹으면\n매우 쓰지만 지친 몸을\n회복시켜주는 효과가 있다.",
    "gen": 5
  },
  {
    "id": 549,
    "koName": "드레디어",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "머리에 있는 꽃 장식의 향기에는\n긴장을 풀어 주는 효과가 있다.\n자주 손질하지 않으면 시들어 버린다.",
    "gen": 5
  },
  {
    "id": 10237,
    "koName": "드레디어",
    "formType": "hisui",
    "formLabel": "",
    "types": [
      "풀",
      "격투"
    ],
    "koFlavor": "머리에 있는 꽃 장식의 향기에는\n긴장을 풀어 주는 효과가 있다.\n자주 손질하지 않으면 시들어 버린다.",
    "gen": 5
  },
  {
    "id": 550,
    "koName": "배쓰나이",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "아주 난폭하고 항상 빨강과\n파랑의 배쓰나이는 다투고 있다.\n먹으면 의외로 맛있다고 한다.",
    "gen": 5
  },
  {
    "id": 551,
    "koName": "깜눈크",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅",
      "악"
    ],
    "koFlavor": "모래 속에 파고들어 눈과 코를\n밖에 내놓고 이동한다.\n검은 막이 눈을 보호한다.",
    "gen": 5
  },
  {
    "id": 552,
    "koName": "악비르",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅",
      "악"
    ],
    "koFlavor": "여러 마리가 무리를 짓는다.\n안구를 감싼 막이\n모래 폭풍으로부터 눈을 지켜준다.",
    "gen": 5
  },
  {
    "id": 553,
    "koName": "악비아르",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅",
      "악"
    ],
    "koFlavor": "아주 난폭한 포켓몬.\n눈앞에서 움직이는 것은 모두\n덮쳐서 깨물어 부수려고 한다.",
    "gen": 5
  },
  {
    "id": 554,
    "koName": "달막화",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "달막화의 배설물은 뜨거워서\n옛날 사람은 품에 넣고\n몸을 따뜻하게 하는 데 사용했다.",
    "gen": 5
  },
  {
    "id": 10176,
    "koName": "달막화",
    "formType": "galar",
    "formLabel": "",
    "types": [
      "얼음"
    ],
    "koFlavor": "달막화의 배설물은 뜨거워서\n옛날 사람은 품에 넣고\n몸을 따뜻하게 하는 데 사용했다.",
    "gen": 5
  },
  {
    "id": 555,
    "koName": "불비달마",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "격렬한 싸움으로 상처 입으면\n바위처럼 굳어져 묵상하며\n마음을 연마한다.",
    "gen": 5
  },
  {
    "id": 10017,
    "koName": "불비달마",
    "formType": "form",
    "formLabel": "달마",
    "types": [
      "불꽃",
      "에스퍼"
    ],
    "koFlavor": "격렬한 싸움으로 상처 입으면\n바위처럼 굳어져 묵상하며\n마음을 연마한다.",
    "gen": 5
  },
  {
    "id": 10177,
    "koName": "불비달마",
    "formType": "galar",
    "formLabel": "",
    "types": [
      "얼음"
    ],
    "koFlavor": "격렬한 싸움으로 상처 입으면\n바위처럼 굳어져 묵상하며\n마음을 연마한다.",
    "gen": 5
  },
  {
    "id": 10178,
    "koName": "불비달마",
    "formType": "galar",
    "formLabel": "",
    "types": [
      "얼음",
      "불꽃"
    ],
    "koFlavor": "격렬한 싸움으로 상처 입으면\n바위처럼 굳어져 묵상하며\n마음을 연마한다.",
    "gen": 5
  },
  {
    "id": 556,
    "koName": "마라카치",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "템포가 빠른 춤과 소리로\n꽃씨를 노리는 천적인\n새포켓몬을 쫓아버린다.",
    "gen": 5
  },
  {
    "id": 557,
    "koName": "돌살이",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "바위"
    ],
    "koFlavor": "적당한 돌을 찾아 구멍을 뚫어\n살 곳을 만든다. 부서지면 대신할\n돌을 찾을 때까지 불안해한다.",
    "gen": 5
  },
  {
    "id": 558,
    "koName": "암팰리스",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "바위"
    ],
    "koFlavor": "무거운 바위를 등에 지고\n며칠이고 건조한 땅을\n이동할 수 있는 다릿심을 가지고 있다.",
    "gen": 5
  },
  {
    "id": 559,
    "koName": "곤율랭",
    "formType": null,
    "formLabel": "",
    "types": [
      "악",
      "격투"
    ],
    "koFlavor": "가죽을 목까지 늘려서\n방어 자세를 취한다. 고무 같은\n탄력을 이용해 데미지를 줄인다.",
    "gen": 5
  },
  {
    "id": 560,
    "koName": "곤율거니",
    "formType": null,
    "formLabel": "",
    "types": [
      "악",
      "격투"
    ],
    "koFlavor": "탈피한 가죽을 끌어 올려\n데미지를 줄이면서 킥!\n볏이 클수록 거만하다.",
    "gen": 5
  },
  {
    "id": 10289,
    "koName": "곤율거니",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "악",
      "격투"
    ],
    "koFlavor": "탈피한 가죽을 끌어 올려\n데미지를 줄이면서 킥!\n볏이 클수록 거만하다.",
    "gen": 5
  },
  {
    "id": 561,
    "koName": "심보러",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼",
      "비행"
    ],
    "koFlavor": "고대 도시의 수호신이었다.\n자기 영역을 침범한 상대를\n사이코 파워로 공격한다.",
    "gen": 5
  },
  {
    "id": 562,
    "koName": "데스마스",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트"
    ],
    "koFlavor": "무덤에 매장된 사람의\n영혼이 포켓몬으로 변했다.\n죽기 전 기억이 남아 있다.",
    "gen": 5
  },
  {
    "id": 10179,
    "koName": "데스마스",
    "formType": "galar",
    "formLabel": "",
    "types": [
      "땅",
      "고스트"
    ],
    "koFlavor": "무덤에 매장된 사람의\n영혼이 포켓몬으로 변했다.\n죽기 전 기억이 남아 있다.",
    "gen": 5
  },
  {
    "id": 563,
    "koName": "데스니칸",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트"
    ],
    "koFlavor": "가까이 다가온 인간을 삼켜서\n미라로 만든다는 소문이 있다.\n금괴를 즐겨 먹는다.",
    "gen": 5
  },
  {
    "id": 564,
    "koName": "프로토가",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "바위"
    ],
    "koFlavor": "약 1억 년 전 바다를\n헤엄쳐 다녔다. 육지에 올라\n먹이를 덮치는 일도 있다.",
    "gen": 5
  },
  {
    "id": 565,
    "koName": "늑골라",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "바위"
    ],
    "koFlavor": "바다와 육지에서 생활한다.\n손바닥으로 쳐서 배 밑바닥에\n구멍을 내는 파워의 소유자다.",
    "gen": 5
  },
  {
    "id": 566,
    "koName": "아켄",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "비행"
    ],
    "koFlavor": "화석에서 부활한 포켓몬이다.\n모든 새포켓몬의 조상이라\n여겨지고 있다.",
    "gen": 5
  },
  {
    "id": 567,
    "koName": "아케오스",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "비행"
    ],
    "koFlavor": "지상에서 도움닫기를 하여\n날아오른다. 동료와 협력하여\n먹이를 잡는 지능을 가졌다.",
    "gen": 5
  },
  {
    "id": 568,
    "koName": "깨봉이",
    "formType": null,
    "formLabel": "",
    "types": [
      "독"
    ],
    "koFlavor": "쓰레기 봉지가 산업 폐기물과\n화학적 변화를 일으켜서\n포켓몬으로 다시 태어났다.",
    "gen": 5
  },
  {
    "id": 569,
    "koName": "더스트나",
    "formType": null,
    "formLabel": "",
    "types": [
      "독"
    ],
    "koFlavor": "왼팔로 상대를 꼭 붙들고\n입에서 악취가 나는 독가스를\n토해내서 마무리한다.",
    "gen": 5
  },
  {
    "id": 10207,
    "koName": "더스트나",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "독"
    ],
    "koFlavor": "왼팔로 상대를 꼭 붙들고\n입에서 악취가 나는 독가스를\n토해내서 마무리한다.",
    "gen": 5
  },
  {
    "id": 570,
    "koName": "조로아",
    "formType": null,
    "formLabel": "",
    "types": [
      "악"
    ],
    "koFlavor": "상대와 똑 닮게 둔갑한 것처럼\n보이게 하여 속이거나 놀라게 해서\n그 틈에 도망가는 일이 많다.",
    "gen": 5
  },
  {
    "id": 10238,
    "koName": "조로아",
    "formType": "hisui",
    "formLabel": "",
    "types": [
      "노말",
      "고스트"
    ],
    "koFlavor": "상대와 똑 닮게 둔갑한 것처럼\n보이게 하여 속이거나 놀라게 해서\n그 틈에 도망가는 일이 많다.",
    "gen": 5
  },
  {
    "id": 571,
    "koName": "조로아크",
    "formType": null,
    "formLabel": "",
    "types": [
      "악"
    ],
    "koFlavor": "한 번에 많은 사람을\n속이는 힘을 가졌다. 환영의\n경치를 보여줘 거처를 지킨다.",
    "gen": 5
  },
  {
    "id": 10239,
    "koName": "조로아크",
    "formType": "hisui",
    "formLabel": "",
    "types": [
      "노말",
      "고스트"
    ],
    "koFlavor": "한 번에 많은 사람을\n속이는 힘을 가졌다. 환영의\n경치를 보여줘 거처를 지킨다.",
    "gen": 5
  },
  {
    "id": 572,
    "koName": "치라미",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "서로의 꼬리로 상대를\n철저히 깨끗하게 만드는 것이\n치라미끼리의 인사다.",
    "gen": 5
  },
  {
    "id": 573,
    "koName": "치라치노",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "하얀 털은 감촉이 정말 좋다.\n먼지나 정전기가\n전혀 생기지 않는다.",
    "gen": 5
  },
  {
    "id": 574,
    "koName": "고디탱",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "리본 모양의 더듬이로\n사이코 파워를 증폭시킨다.\n무언가를 가만히 바라보고 있다.",
    "gen": 5
  },
  {
    "id": 575,
    "koName": "고디보미",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "별빛이 힘의 원천이다.\n밤이 되면 사이코 파워로 돌을\n띄워 별의 배치를 표시한다.",
    "gen": 5
  },
  {
    "id": 576,
    "koName": "고디모아젤",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "강력한 사이코 파워의 영향으로\n고디모아젤 주변 공간이 비틀어져\n몇만 광년이나 떨어진 하늘의 별이 비친다.",
    "gen": 5
  },
  {
    "id": 577,
    "koName": "유니란",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "몸이 특수한 액체로\n둘러싸여 있어 어떤 곤란한\n상황이라도 문제없다.",
    "gen": 5
  },
  {
    "id": 578,
    "koName": "듀란",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "둘로 분열된 뇌를\n가지고 있어서 갑자기 다른\n행동을 취할 때가 있다.",
    "gen": 5
  },
  {
    "id": 579,
    "koName": "란쿨루스",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "발휘한 사이코 파워를 사용해\n특수한 액체로 만들어진\n팔을 조종해서 바위를 부순다.",
    "gen": 5
  },
  {
    "id": 580,
    "koName": "꼬지보리",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "비행"
    ],
    "koFlavor": "상대에게 공격당하면 전신의\n깃털에서 물보라를 내뿜는다.\n물안개에 숨어들어 도망친다.",
    "gen": 5
  },
  {
    "id": 581,
    "koName": "스완나",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "비행"
    ],
    "koFlavor": "우아한 외모와 다르게\n날개로 힘차게 날개 치며\n수천 km를 계속 날 수 있다.",
    "gen": 5
  },
  {
    "id": 582,
    "koName": "바닐프티",
    "formType": null,
    "formLabel": "",
    "types": [
      "얼음"
    ],
    "koFlavor": "마이너스 50도의 숨결을 내뱉는다.\n눈 결정을 만들어\n주변에 눈이 내리게 한다.",
    "gen": 5
  },
  {
    "id": 583,
    "koName": "바닐리치",
    "formType": null,
    "formLabel": "",
    "types": [
      "얼음"
    ],
    "koFlavor": "주변 공기를 차갑게 해서\n얼음 알갱이를 발생시켜서\n상대의 몸을 얼려버린다.",
    "gen": 5
  },
  {
    "id": 584,
    "koName": "배바닐라",
    "formType": null,
    "formLabel": "",
    "types": [
      "얼음"
    ],
    "koFlavor": "두 개의 머리가 동시에 화를 내면\n뿔에서 강한 눈보라가 뿜어져 나온다.\n주변을 많은 눈으로 묻어 버린다.",
    "gen": 5
  },
  {
    "id": 585,
    "koName": "사철록",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "풀"
    ],
    "koFlavor": "계절이 바뀌었을 때뿐 아니라\n기온이나 습도에 따라서도\n몸의 색깔은 조금 변한다.",
    "gen": 5
  },
  {
    "id": 586,
    "koName": "바라철록",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "풀"
    ],
    "koFlavor": "계절에 따라 거처를 바꾼다.\n사람들은 바라철록의 뿔에서\n계절의 변화를 느낀다.",
    "gen": 5
  },
  {
    "id": 587,
    "koName": "에몽가",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기",
      "비행"
    ],
    "koFlavor": "숲의 나무 위에 산다.\n망토 같은 막의 안쪽을\n방전시키며 활공한다.",
    "gen": 5
  },
  {
    "id": 588,
    "koName": "딱정곤",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레"
    ],
    "koFlavor": "쪼마리와 함께 있을 때\n전기적인 자극을 받으면\n진화하는 이상한 포켓몬이다.",
    "gen": 5
  },
  {
    "id": 589,
    "koName": "슈바르고",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "강철"
    ],
    "koFlavor": "쪼마리에게서 뺏은 껍질로\n몸을 에워싸 가드하면서\n2개의 창으로 찔러온다.",
    "gen": 5
  },
  {
    "id": 590,
    "koName": "깜놀버슬",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "독"
    ],
    "koFlavor": "몬스터볼을 닮은 무늬로\n유인한 후 독 포자를 뿌려댄다.\n왜 닮았는지는 불가사의다.",
    "gen": 5
  },
  {
    "id": 591,
    "koName": "뽀록나",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "독"
    ],
    "koFlavor": "몬스터볼 무늬의 삿갓을 보여주며\n먹이를 유인하려 하지만\n속아 넘어가는 포켓몬은 드물다.",
    "gen": 5
  },
  {
    "id": 592,
    "koName": "탱그릴",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "고스트"
    ],
    "koFlavor": "먹이를 독으로 마비시켜\n8000m 심해에\n있다는 거처로 데려간다.",
    "gen": 5
  },
  {
    "id": 593,
    "koName": "탱탱겔",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "고스트"
    ],
    "koFlavor": "몸 대부분이 해수다.\n해저에는 탱탱겔이 가라앉힌\n배로 만들어진 성이 있다고 한다.",
    "gen": 5
  },
  {
    "id": 594,
    "koName": "맘복치",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "넓은 바다를 떠돌아다니며 산다.\n상처 입은 포켓몬을 발견하면\n안고서 물가까지 옮긴다.",
    "gen": 5
  },
  {
    "id": 595,
    "koName": "파쪼옥",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "전기"
    ],
    "koFlavor": "스스로 전기를 만들 수 없어\n다른 큰 포켓몬에\n달라붙어 정전기를 흡수한다.",
    "gen": 5
  },
  {
    "id": 596,
    "koName": "전툴라",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "전기"
    ],
    "koFlavor": "전기를 띤 실로 함정을 설치한다.\n감전돼서 움직이지 못하는\n먹이를 천천히 먹어치운다.",
    "gen": 5
  },
  {
    "id": 597,
    "koName": "철시드",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "강철"
    ],
    "koFlavor": "위험을 감지하면 가시를\n일제히 발사하여 반격한다.\n그 틈에 몸을 굴려 도망간다.",
    "gen": 5
  },
  {
    "id": 598,
    "koName": "너트령",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "강철"
    ],
    "koFlavor": "3개의 촉수를 세게 내리치고\n거기에 가시를 날려 상대를\n흔적도 없이 분쇄한다.",
    "gen": 5
  },
  {
    "id": 599,
    "koName": "기어르",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철"
    ],
    "koFlavor": "두 개의 몸을 맞물려\n회전시켜서 살아가기 위한\n에너지를 만들고 있다.",
    "gen": 5
  },
  {
    "id": 600,
    "koName": "기기어르",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철"
    ],
    "koFlavor": "회전 방향을 바꿔서\n동료에게 감정을 전한다.\n화가 나면 회전이 빨라진다.",
    "gen": 5
  },
  {
    "id": 601,
    "koName": "기기기어르",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철"
    ],
    "koFlavor": "빨간 코어가 달린 기어를\n고속 회전시켜서 에너지를\n급속 충전한다.",
    "gen": 5
  },
  {
    "id": 602,
    "koName": "저리어",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "한 마리의 전력은 적지만\n많은 저리어가 연결되면\n번개와 같은 위력이 된다.",
    "gen": 5
  },
  {
    "id": 603,
    "koName": "저리릴",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "상대를 휘감고 동그란\n반점에서 전기를 흘려보내\n마비시킨 뒤 통째로 문다.",
    "gen": 5
  },
  {
    "id": 604,
    "koName": "저리더프",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "흡반 같은 입으로 먹이에\n달라붙은 후 박아 넣은 이빨을\n통해 전기를 흘려 감전시킨다.",
    "gen": 5
  },
  {
    "id": 10290,
    "koName": "저리더프",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "흡반 같은 입으로 먹이에\n달라붙은 후 박아 넣은 이빨을\n통해 전기를 흘려 감전시킨다.",
    "gen": 5
  },
  {
    "id": 605,
    "koName": "리그레",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "강력한 사이코 파워를 다룬다.\n사이코 파워로 상대의 뇌를\n조여서 두통을 일으킨다.",
    "gen": 5
  },
  {
    "id": 606,
    "koName": "벰크",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "손끝을 점멸시켜서\n대화하는 듯하나 그 패턴은\n아직 해독하지 못했다.",
    "gen": 5
  },
  {
    "id": 607,
    "koName": "불켜미",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트",
      "불꽃"
    ],
    "koFlavor": "빛을 밝혀 길 안내를\n하는 것처럼 가장하여\n생명력을 빨아들이고 있다.",
    "gen": 5
  },
  {
    "id": 608,
    "koName": "램프라",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트",
      "불꽃"
    ],
    "koFlavor": "영혼을 빨아들여 불을 밝힌다.\n사람이 죽는 것을 기다리기 위해\n병원을 서성거리게 되었다.",
    "gen": 5
  },
  {
    "id": 609,
    "koName": "샹델라",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트",
      "불꽃"
    ],
    "koFlavor": "샹델라의 불꽃에 둘러싸이면\n영혼이 빨려가 불타버린다.\n빈 껍데기인 몸만 남는다.",
    "gen": 5
  },
  {
    "id": 10291,
    "koName": "샹델라",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "고스트",
      "불꽃"
    ],
    "koFlavor": "샹델라의 불꽃에 둘러싸이면\n영혼이 빨려가 불타버린다.\n빈 껍데기인 몸만 남는다.",
    "gen": 5
  },
  {
    "id": 610,
    "koName": "터검니",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤"
    ],
    "koFlavor": "나무열매를 이빨로 깨물어 먹는다.\n이빨이 몇 차례에 걸쳐 새로 나면\n강하고 날카로워진다",
    "gen": 5
  },
  {
    "id": 611,
    "koName": "액슨도",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤"
    ],
    "koFlavor": "큰 바위를 부수는 이빨을 가지고 있다.\n액슨도들의 영역 싸움은\n매우 격렬하다.",
    "gen": 5
  },
  {
    "id": 612,
    "koName": "액스라이즈",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤"
    ],
    "koFlavor": "상냥한 성격이지만 영역을\n어지럽히는 자는 용서하지 않는다.\n철을 자르는 이빨로 덤벼든다.",
    "gen": 5
  },
  {
    "id": 613,
    "koName": "코고미",
    "formType": null,
    "formLabel": "",
    "types": [
      "얼음"
    ],
    "koFlavor": "언제나 콧물을 달고 다닌다.\n콧물을 훌쩍거려 기술을 사용한다.\n콧물이 기술의 재료인 셈이다.",
    "gen": 5
  },
  {
    "id": 614,
    "koName": "툰베어",
    "formType": null,
    "formLabel": "",
    "types": [
      "얼음"
    ],
    "koFlavor": "북쪽의 차가운 바다를 좋아한다.\n입에서 내뿜는 숨을 얼려\n바다 위에 길을 만들어 걷는다.",
    "gen": 5
  },
  {
    "id": 615,
    "koName": "프리지오",
    "formType": null,
    "formLabel": "",
    "types": [
      "얼음"
    ],
    "koFlavor": "눈구름 속에서 태어났다.\n얼음 결정으로 만들어진\n사슬로 먹이를 잡는다.",
    "gen": 5
  },
  {
    "id": 616,
    "koName": "쪼마리",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레"
    ],
    "koFlavor": "딱정곤과 함께 있을 때\n전기적인 자극을 받으면\n서로의 몸이 진화한다.",
    "gen": 5
  },
  {
    "id": 617,
    "koName": "어지리더",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레"
    ],
    "koFlavor": "무거운 껍데기를 벗었기 때문에\n몸이 가벼워졌다. 마치 닌자 같은\n몸놀림으로 싸운다.",
    "gen": 5
  },
  {
    "id": 618,
    "koName": "메더",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅",
      "전기"
    ],
    "koFlavor": "피부가 단단해서 씨름꾼에게\n밟혀도 아무렇지 않다. 전기를\n흘려보낼 때 웃는 얼굴이 된다.",
    "gen": 5
  },
  {
    "id": 10180,
    "koName": "메더",
    "formType": "galar",
    "formLabel": "",
    "types": [
      "땅",
      "강철"
    ],
    "koFlavor": "피부가 단단해서 씨름꾼에게\n밟혀도 아무렇지 않다. 전기를\n흘려보낼 때 웃는 얼굴이 된다.",
    "gen": 5
  },
  {
    "id": 619,
    "koName": "비조푸",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투"
    ],
    "koFlavor": "기술을 내보내는 스피드가 자랑이다.\n설령 파워는 낮더라도\n많은 공격 횟수로 커버한다.",
    "gen": 5
  },
  {
    "id": 620,
    "koName": "비조도",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투"
    ],
    "koFlavor": "팔에 있는 털을 채찍처럼\n다룬다. 양팔로 펼치는 공격은\n눈에 보이지 않을 만큼 빠르다.",
    "gen": 5
  },
  {
    "id": 621,
    "koName": "크리만",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤"
    ],
    "koFlavor": "좁은 동굴을 뛰어다니며\n날카로운 손톱으로 먹이를 잡는다.\n얼굴 피부는 바위보다 단단하다.",
    "gen": 5
  },
  {
    "id": 622,
    "koName": "골비람",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅",
      "고스트"
    ],
    "koFlavor": "체내에서 불타는 에너지로\n인해 활동하고 있지만 어떤\n에너지인지는 불명이다.",
    "gen": 5
  },
  {
    "id": 623,
    "koName": "골루그",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅",
      "고스트"
    ],
    "koFlavor": "골루그를 만든 고대인에게\n사람과 포켓몬을 지키도록\n명령받았다고 전해진다.",
    "gen": 5
  },
  {
    "id": 10313,
    "koName": "골루그",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "땅",
      "고스트"
    ],
    "koFlavor": "골루그를 만든 고대인에게\n사람과 포켓몬을 지키도록\n명령받았다고 전해진다.",
    "gen": 5
  },
  {
    "id": 624,
    "koName": "자망칼",
    "formType": null,
    "formLabel": "",
    "types": [
      "악",
      "강철"
    ],
    "koFlavor": "전신이 칼날인 포켓몬이다.\n싸움에서 칼의 이가 빠지면\n강가의 돌로 칼을 간다.",
    "gen": 5
  },
  {
    "id": 625,
    "koName": "절각참",
    "formType": null,
    "formLabel": "",
    "types": [
      "악",
      "강철"
    ],
    "koFlavor": "몇 마리의 자망칼과 싸우게 해서\n상처 입고 움직일 수 없게 된 먹이를\n두 동강 내버리는 무서운 포켓몬.",
    "gen": 5
  },
  {
    "id": 626,
    "koName": "버프론",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "무작정 돌진하여 박치기를\n한다. 달리고 있는 열차를\n탈선시킬 정도의 파괴력이다.",
    "gen": 5
  },
  {
    "id": 627,
    "koName": "수리둥보",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "비행"
    ],
    "koFlavor": "다리 힘으로 나무열매를 으깬다.\n아무리 강한 상대라도\n용감히 맞서는 습성이 있다.",
    "gen": 5
  },
  {
    "id": 628,
    "koName": "워글",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "비행"
    ],
    "koFlavor": "동료를 위해서라면 아무리\n상처를 입더라도 싸움을 관두지 않는\n용감한 넓은 하늘의 전사.",
    "gen": 5
  },
  {
    "id": 10240,
    "koName": "워글",
    "formType": "hisui",
    "formLabel": "",
    "types": [
      "에스퍼",
      "비행"
    ],
    "koFlavor": "동료를 위해서라면 아무리\n상처를 입더라도 싸움을 관두지 않는\n용감한 넓은 하늘의 전사.",
    "gen": 5
  },
  {
    "id": 629,
    "koName": "벌차이",
    "formType": null,
    "formLabel": "",
    "types": [
      "악",
      "비행"
    ],
    "koFlavor": "날개가 작아서 날지 못한다.\n진화가 가까워지면\n자기 스스로 해골을 벗어버린다.",
    "gen": 5
  },
  {
    "id": 630,
    "koName": "버랜지나",
    "formType": null,
    "formLabel": "",
    "types": [
      "악",
      "비행"
    ],
    "koFlavor": "넓은 하늘에서 원을 그리며 날고\n먹이를 발견하면 덮쳐서\n둥지까지 가뿐히 나른다.",
    "gen": 5
  },
  {
    "id": 631,
    "koName": "앤티골",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "뜨겁게 타오르는 불꽃의 혀로\n아이앤트의 강철 몸을\n녹여서 알맹이를 먹어치운다.",
    "gen": 5
  },
  {
    "id": 632,
    "koName": "아이앤트",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "강철"
    ],
    "koFlavor": "천적인 앤티골에 대해서\n모두와 역할 분담을 하면서\n반격해 둥지에서 쫓아낸다.",
    "gen": 5
  },
  {
    "id": 633,
    "koName": "모노두",
    "formType": null,
    "formLabel": "",
    "types": [
      "악",
      "드래곤"
    ],
    "koFlavor": "눈이 보이지 않아서 몸통박치기나\n물기로 주변을 살핀다.\n몸에 상처가 끊이지 않는다.",
    "gen": 5
  },
  {
    "id": 634,
    "koName": "디헤드",
    "formType": null,
    "formLabel": "",
    "types": [
      "악",
      "드래곤"
    ],
    "koFlavor": "2개의 머리는 사이가 나빠서\n상대보다 많이 먹는 것으로\n주도권을 잡으려고 한다.",
    "gen": 5
  },
  {
    "id": 635,
    "koName": "삼삼드래",
    "formType": null,
    "formLabel": "",
    "types": [
      "악",
      "드래곤"
    ],
    "koFlavor": "양팔에 있는 머리에는 뇌가\n없다. 3개의 머리로 모든 것을\n먹어치워 파괴해 버린다.",
    "gen": 5
  },
  {
    "id": 636,
    "koName": "활화르바",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "불꽃"
    ],
    "koFlavor": "태양에서 태어났다고 전해진다.\n진화할 때 뿔에서 뿜어져 나온\n불꽃으로 전신을 감싼다.",
    "gen": 5
  },
  {
    "id": 637,
    "koName": "불카모스",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "불꽃"
    ],
    "koFlavor": "싸울 때는 6개의 날개에서\n불꽃 가루를 흩뿌려서\n주변 일대를 불바다로 만든다.",
    "gen": 5
  },
  {
    "id": 638,
    "koName": "코바르온",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철",
      "격투"
    ],
    "koFlavor": "강철의 몸과 마음을 지녔다.\n째려보기만 해도 난폭한\n포켓몬마저도 따르게 된다.",
    "gen": 5
  },
  {
    "id": 639,
    "koName": "테라키온",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "격투"
    ],
    "koFlavor": "거대한 성벽을 일격에\n돌파할 만한 돌진력을 가졌다.\n전설로 전해지는 포켓몬이다.",
    "gen": 5
  },
  {
    "id": 640,
    "koName": "비리디온",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "격투"
    ],
    "koFlavor": "머리의 뿔은 날카로운 칼날이다.\n회오리바람과 같은 움직임으로\n상대를 농락하여 재빠르게 벤다.",
    "gen": 5
  },
  {
    "id": 641,
    "koName": "토네로스",
    "formType": null,
    "formLabel": "",
    "types": [
      "비행"
    ],
    "koFlavor": "구름처럼 생긴 에너지체에\n하반신이 둘러싸여 있다.\n시속 300km로 하늘을 난다.",
    "gen": 5
  },
  {
    "id": 10019,
    "koName": "토네로스",
    "formType": "form",
    "formLabel": "영물",
    "types": [
      "비행"
    ],
    "koFlavor": "구름처럼 생긴 에너지체에\n하반신이 둘러싸여 있다.\n시속 300km로 하늘을 난다.",
    "gen": 5
  },
  {
    "id": 642,
    "koName": "볼트로스",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기",
      "비행"
    ],
    "koFlavor": "꼬리의 가시에서 전격을\n날린다. 하나지방의 하늘을\n날아다니며 번개를 내리친다.",
    "gen": 5
  },
  {
    "id": 10020,
    "koName": "볼트로스",
    "formType": "form",
    "formLabel": "영물",
    "types": [
      "전기",
      "비행"
    ],
    "koFlavor": "꼬리의 가시에서 전격을\n날린다. 하나지방의 하늘을\n날아다니며 번개를 내리친다.",
    "gen": 5
  },
  {
    "id": 643,
    "koName": "레시라무",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤",
      "불꽃"
    ],
    "koFlavor": "불꽃으로 세상을 태워버릴 수 있는\n전설의 포켓몬. 진실의 세계를\n구축하는 사람을 도와준다.",
    "gen": 5
  },
  {
    "id": 644,
    "koName": "제크로무",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤",
      "전기"
    ],
    "koFlavor": "번개로 세상을 태워버릴 수 있는\n전설의 포켓몬. 이상의 세계를\n구축하는 사람을 보좌한다.",
    "gen": 5
  },
  {
    "id": 645,
    "koName": "랜드로스",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅",
      "비행"
    ],
    "koFlavor": "랜드로스가 찾아온 땅에는\n작물에 열매가 많이 열리기 때문에\n농지의 신이라고 전해진다.",
    "gen": 5
  },
  {
    "id": 10021,
    "koName": "랜드로스",
    "formType": "form",
    "formLabel": "영물",
    "types": [
      "땅",
      "비행"
    ],
    "koFlavor": "랜드로스가 찾아온 땅에는\n작물에 열매가 많이 열리기 때문에\n농지의 신이라고 전해진다.",
    "gen": 5
  },
  {
    "id": 646,
    "koName": "큐레무",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤",
      "얼음"
    ],
    "koFlavor": "잃어버린 몸을 진실과\n이상으로 채워줄 영웅을\n기다리는 얼음의 전설 포켓몬.",
    "gen": 5
  },
  {
    "id": 10022,
    "koName": "큐레무",
    "formType": "form",
    "formLabel": "블랙",
    "types": [
      "드래곤",
      "얼음"
    ],
    "koFlavor": "잃어버린 몸을 진실과\n이상으로 채워줄 영웅을\n기다리는 얼음의 전설 포켓몬.",
    "gen": 5
  },
  {
    "id": 10023,
    "koName": "큐레무",
    "formType": "form",
    "formLabel": "화이트",
    "types": [
      "드래곤",
      "얼음"
    ],
    "koFlavor": "잃어버린 몸을 진실과\n이상으로 채워줄 영웅을\n기다리는 얼음의 전설 포켓몬.",
    "gen": 5
  },
  {
    "id": 647,
    "koName": "케르디오",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "격투"
    ],
    "koFlavor": "바다나 강 등의 수면을 달려\n세계 곳곳을 뛰어다닌다.\n아름다운 물가에 나타난다.",
    "gen": 5
  },
  {
    "id": 10024,
    "koName": "케르디오",
    "formType": "form",
    "formLabel": "각오",
    "types": [
      "물",
      "격투"
    ],
    "koFlavor": "바다나 강 등의 수면을 달려\n세계 곳곳을 뛰어다닌다.\n아름다운 물가에 나타난다.",
    "gen": 5
  },
  {
    "id": 648,
    "koName": "메로엣타",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "에스퍼"
    ],
    "koFlavor": "메로엣타가 연주하는 선율에는\n주위 포켓몬을 기쁘게 하거나\n슬프게 할 정도의 힘이 있다.",
    "gen": 5
  },
  {
    "id": 10018,
    "koName": "메로엣타",
    "formType": "form",
    "formLabel": "스텝",
    "types": [
      "노말",
      "격투"
    ],
    "koFlavor": "메로엣타가 연주하는 선율에는\n주위 포켓몬을 기쁘게 하거나\n슬프게 할 정도의 힘이 있다.",
    "gen": 5
  },
  {
    "id": 649,
    "koName": "게노세크트",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "강철"
    ],
    "koFlavor": "플라스마단에게 개조당한\n고대의 벌레포켓몬이다.\n등에 있는 대포의 파워가 올라갔다.",
    "gen": 5
  },
  {
    "id": 650,
    "koName": "도치마론",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "머리의 가시는 평소에는 부드럽지만\n힘을 주면 뾰족하고 날카로워지며\n바위를 뚫어 버릴 정도로 단단해진다.",
    "gen": 6
  },
  {
    "id": 651,
    "koName": "도치보구",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "몸을 둘러싼 단단한 껍질이\n적의 공격을 튕겨내고\n날카로운 가시로 반격한다.",
    "gen": 6
  },
  {
    "id": 652,
    "koName": "브리가론",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "격투"
    ],
    "koFlavor": "몸통박치기로 50톤 전차를\n뒤집는 파워를 지녔다. 자신이\n방패가 되어 동료를 지킨다.",
    "gen": 6
  },
  {
    "id": 10292,
    "koName": "브리가론",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "풀",
      "격투"
    ],
    "koFlavor": "몸통박치기로 50톤 전차를\n뒤집는 파워를 지녔다. 자신이\n방패가 되어 동료를 지킨다.",
    "gen": 6
  },
  {
    "id": 653,
    "koName": "푸호꼬",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "잔가지를 먹으면 힘이 나서\n섭씨 200도가 넘는 열기를\n커다란 귀에서 내뿜는다.",
    "gen": 6
  },
  {
    "id": 654,
    "koName": "테르나",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "나뭇가지를 꼬리에 꽂고 있다.\n꼬리털의 마찰열로\n가지에 불을 붙여 싸운다.",
    "gen": 6
  },
  {
    "id": 655,
    "koName": "마폭시",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃",
      "에스퍼"
    ],
    "koFlavor": "지팡이 끝의 타오르는 불꽃을\n바라보며 정신을 통일하면\n미래에 일어날 일을 내다볼 수 있다.",
    "gen": 6
  },
  {
    "id": 10293,
    "koName": "마폭시",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "불꽃",
      "에스퍼"
    ],
    "koFlavor": "지팡이 끝의 타오르는 불꽃을\n바라보며 정신을 통일하면\n미래에 일어날 일을 내다볼 수 있다.",
    "gen": 6
  },
  {
    "id": 656,
    "koName": "개구마르",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "가슴과 등에서 거품을 내뿜는다.\n탄력 있는 거품으로 공격을\n막아내고 데미지를 줄인다.",
    "gen": 6
  },
  {
    "id": 657,
    "koName": "개굴반장",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "거품으로 싸인 돌멩이를 던지는\n기술을 쓴다. 30m 앞에 있는\n빈 캔을 맞출 정도로 컨트롤이 좋다.",
    "gen": 6
  },
  {
    "id": 658,
    "koName": "개굴닌자",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "악"
    ],
    "koFlavor": "물을 압축시켜 수리검을\n만들어 낸다. 고속으로 회전시키며\n던지면 금속도 두 동강이 난다.",
    "gen": 6
  },
  {
    "id": 10294,
    "koName": "개굴닌자",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "물",
      "악"
    ],
    "koFlavor": "물을 압축시켜 수리검을\n만들어 낸다. 고속으로 회전시키며\n던지면 금속도 두 동강이 난다.",
    "gen": 6
  },
  {
    "id": 659,
    "koName": "파르빗",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "커다란 귀로 땅을 파고\n보금자리를 만든다. 하룻밤 동안\n쉬지 않고 계속 팔 수 있다.",
    "gen": 6
  },
  {
    "id": 660,
    "koName": "파르토",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "땅"
    ],
    "koFlavor": "커다란 귀에는 무게가 1톤을 넘는 바위를\n가뿐히 들어 올릴 만한 파워가 있다.\n공사 현장에서 대활약한다.",
    "gen": 6
  },
  {
    "id": 661,
    "koName": "화살꼬빈",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "비행"
    ],
    "koFlavor": "사람을 잘 따르는 성격이다. 아름다운\n지저귐과 꽁지를 흔드는 움직임으로\n동료에게 신호를 보낸다.",
    "gen": 6
  },
  {
    "id": 662,
    "koName": "불화살빈",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃",
      "비행"
    ],
    "koFlavor": "부리에서 불꽃을 뿜어\n풀숲을 태우고 놀라서\n뛰쳐나온 사냥감을 잡는다.",
    "gen": 6
  },
  {
    "id": 663,
    "koName": "파이어로",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃",
      "비행"
    ],
    "koFlavor": "격렬한 싸움으로 흥분하게 되면\n온몸의 깃털 사이에서\n불꽃을 뿜어내며 비행한다.",
    "gen": 6
  },
  {
    "id": 664,
    "koName": "분이벌레",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레"
    ],
    "koFlavor": "새포켓몬에게 습격당하면\n검은 가루를 흩뿌린다.\n만지면 마비되는 독가루다.",
    "gen": 6
  },
  {
    "id": 665,
    "koName": "분떠도리",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레"
    ],
    "koFlavor": "수풀의 그늘에 숨어 산다.\n적에게 공격당하면 몸의 털을\n뾰족하게 곤두세우며 위협한다.",
    "gen": 6
  },
  {
    "id": 666,
    "koName": "비비용",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "비행"
    ],
    "koFlavor": "세계에는 다양한 무늬의 날개를 가진\n비비용이 있다. 살고 있는 곳의\n기후에 영향을 받는 것 같다.",
    "gen": 6
  },
  {
    "id": 667,
    "koName": "레오꼬",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃",
      "노말"
    ],
    "koFlavor": "강한 상대에게 맞설 때일수록\n갈기의 온도가 높아지고\n전신에 힘이 넘쳐난다.",
    "gen": 6
  },
  {
    "id": 668,
    "koName": "화염레오",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃",
      "노말"
    ],
    "koFlavor": "무리 중에서 가장 커다란\n불꽃 갈기를 지닌 수컷이\n리더로서 동료들을 이끈다.",
    "gen": 6
  },
  {
    "id": 10295,
    "koName": "화염레오",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "불꽃",
      "노말"
    ],
    "koFlavor": "무리 중에서 가장 커다란\n불꽃 갈기를 지닌 수컷이\n리더로서 동료들을 이끈다.",
    "gen": 6
  },
  {
    "id": 669,
    "koName": "플라베베",
    "formType": null,
    "formLabel": "",
    "types": [
      "페어리"
    ],
    "koFlavor": "꽃의 숨겨진 힘을 끌어내어\n자유자재로 조종한다. 플라베베가 지닌\n꽃은 이미 몸의 일부다.",
    "gen": 6
  },
  {
    "id": 670,
    "koName": "플라엣테",
    "formType": null,
    "formLabel": "",
    "types": [
      "페어리"
    ],
    "koFlavor": "꽃밭을 날아다니며 말라가는\n꽃을 보살핀다. 꽃의 숨겨진\n힘을 끌어내어 싸운다.",
    "gen": 6
  },
  {
    "id": 10296,
    "koName": "플라엣테",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "페어리"
    ],
    "koFlavor": "꽃밭을 날아다니며 말라가는\n꽃을 보살핀다. 꽃의 숨겨진\n힘을 끌어내어 싸운다.",
    "gen": 6
  },
  {
    "id": 671,
    "koName": "플라제스",
    "formType": null,
    "formLabel": "",
    "types": [
      "페어리"
    ],
    "koFlavor": "멋진 화원이 영역이다.\n화초가 내보내는 에너지를\n쬐어 자신의 파워로 삼는다.",
    "gen": 6
  },
  {
    "id": 672,
    "koName": "메이클",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "사람과 살기 시작한\n최초의 포켓몬이라고 한다.\n온화한 성격의 포켓몬이다.",
    "gen": 6
  },
  {
    "id": 673,
    "koName": "고고트",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "뿔을 잡을 때 느껴지는 작은 차이로\n트레이너의 마음을 읽어낼 수 있기에\n하나가 되어 달릴 수 있는 것이다.",
    "gen": 6
  },
  {
    "id": 674,
    "koName": "판짱",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투"
    ],
    "koFlavor": "적이 얕잡아 보지 못하도록 열심히\n노려보지만, 효과가 약하다.\n물고 있는 잎사귀가 트레이드마크다.",
    "gen": 6
  },
  {
    "id": 675,
    "koName": "부란다",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투",
      "악"
    ],
    "koFlavor": "성질이 거칠어 툭하면 싸우려 들지만\n약자를 괴롭히는 일은 용서하지 않는다.\n잎사귀로 적의 움직임을 읽는다.",
    "gen": 6
  },
  {
    "id": 676,
    "koName": "트리미앙",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "복슬복슬한 털을 깎고 다듬으면\n모습이 아름다워질 뿐만 아니라\n몸의 움직임도 좋아진다.",
    "gen": 6
  },
  {
    "id": 677,
    "koName": "냐스퍼",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "강력한 사이코 파워가\n새어 나가지 않도록\n방출되는 기관을 귀로 막고 있다.",
    "gen": 6
  },
  {
    "id": 678,
    "koName": "냐오닉스",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "위험이 다가오면 귀를 들어 올리고\n10톤 트럭을 눌러 부술 정도의\n사이코 파워를 방출한다.",
    "gen": 6
  },
  {
    "id": 10314,
    "koName": "냐오닉스",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "위험이 다가오면 귀를 들어 올리고\n10톤 트럭을 눌러 부술 정도의\n사이코 파워를 방출한다.",
    "gen": 6
  },
  {
    "id": 679,
    "koName": "단칼빙",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철",
      "고스트"
    ],
    "koFlavor": "죽은 자의 혼이 고대의\n검에 깃들어 태어났다고 한다.\n사람에게 씌어 생명을 빨아들인다.",
    "gen": 6
  },
  {
    "id": 680,
    "koName": "쌍검킬",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철",
      "고스트"
    ],
    "koFlavor": "진화하여 2자루로 분열되었다.\n텔레파시로 서로 대화하며\n연계 공격으로 적을 조각낸다.",
    "gen": 6
  },
  {
    "id": 681,
    "koName": "킬가르도",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철",
      "고스트"
    ],
    "koFlavor": "역대 왕들이 데리고 있었다.\n영험한 힘으로 사람이나 포켓몬의\n마음을 조종하여 복종하게 한다.",
    "gen": 6
  },
  {
    "id": 682,
    "koName": "슈쁘",
    "formType": null,
    "formLabel": "",
    "types": [
      "페어리"
    ],
    "koFlavor": "냄새를 맡은 자를 황홀하게 만드는\n향기를 몸에서 풍긴다.\n먹은 먹이에 따라 향기가 달라진다.",
    "gen": 6
  },
  {
    "id": 683,
    "koName": "프레프티르",
    "formType": null,
    "formLabel": "",
    "types": [
      "페어리"
    ],
    "koFlavor": "여러 가지 향기를 만들어 낸다.\n상대가 싫어하는 냄새를 내보내\n싸움을 유리하게 이끌어 나간다.",
    "gen": 6
  },
  {
    "id": 684,
    "koName": "나룸퍼프",
    "formType": null,
    "formLabel": "",
    "types": [
      "페어리"
    ],
    "koFlavor": "솜사탕 같은 달고 끈적끈적한\n하얀 실을 내뿜어 상대를\n휘감고 움직이지 못하게 한다.",
    "gen": 6
  },
  {
    "id": 685,
    "koName": "나루림",
    "formType": null,
    "formLabel": "",
    "types": [
      "페어리"
    ],
    "koFlavor": "아주 약간의 냄새도 구별할 수 있는\n민감한 후각을 살려\n파티시에를 돕고 있다.",
    "gen": 6
  },
  {
    "id": 686,
    "koName": "오케이징",
    "formType": null,
    "formLabel": "",
    "types": [
      "악",
      "에스퍼"
    ],
    "koFlavor": "깜빡이는 발광체를 바라본\n상대는 눈앞이 어두컴컴해져\n전의를 상실해버리고 만다.",
    "gen": 6
  },
  {
    "id": 687,
    "koName": "칼라마네로",
    "formType": null,
    "formLabel": "",
    "types": [
      "악",
      "에스퍼"
    ],
    "koFlavor": "포켓몬 중에서 가장 강력한\n최면술을 쓴다. 상대를\n자기 마음대로 조종해버린다.",
    "gen": 6
  },
  {
    "id": 10297,
    "koName": "칼라마네로",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "악",
      "에스퍼"
    ],
    "koFlavor": "포켓몬 중에서 가장 강력한\n최면술을 쓴다. 상대를\n자기 마음대로 조종해버린다.",
    "gen": 6
  },
  {
    "id": 688,
    "koName": "거북손손",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "물"
    ],
    "koFlavor": "2마리의 거북손손이 하나의\n바위에서 산다. 서로 싸우면\n한쪽이 다른 바위로 옮겨 간다.",
    "gen": 6
  },
  {
    "id": 689,
    "koName": "거북손데스",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "물"
    ],
    "koFlavor": "진화할 때 2마리의 거북손손이\n7마리로 분열된 포켓몬이다.\n7마리분의 파워로 싸운다.",
    "gen": 6
  },
  {
    "id": 10298,
    "koName": "거북손데스",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "바위",
      "격투"
    ],
    "koFlavor": "진화할 때 2마리의 거북손손이\n7마리로 분열된 포켓몬이다.\n7마리분의 파워로 싸운다.",
    "gen": 6
  },
  {
    "id": 690,
    "koName": "수레기",
    "formType": null,
    "formLabel": "",
    "types": [
      "독",
      "물"
    ],
    "koFlavor": "썩은 해조로 위장한다.\n눈치채지 못하고 가까이 다가온\n사냥감에 독액을 끼얹어 잡는다.",
    "gen": 6
  },
  {
    "id": 691,
    "koName": "드래캄",
    "formType": null,
    "formLabel": "",
    "types": [
      "독",
      "드래곤"
    ],
    "koFlavor": "유조선의 선체를 썩게 할 정도의\n맹독을 영역 안에 들어 온 것에\n무턱대고 끼얹는다",
    "gen": 6
  },
  {
    "id": 10299,
    "koName": "드래캄",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "독",
      "드래곤"
    ],
    "koFlavor": "유조선의 선체를 썩게 할 정도의\n맹독을 영역 안에 들어 온 것에\n무턱대고 끼얹는다",
    "gen": 6
  },
  {
    "id": 692,
    "koName": "완철포",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "커다란 집게발로\n압축한 물을 권총처럼 쏘아\n날고 있는 사냥감을 떨어뜨린다.",
    "gen": 6
  },
  {
    "id": 693,
    "koName": "블로스터",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "물 포탄을 발사하는\n거대한 집게발을 지녔다.\n유조선의 선체를 뚫어 버린다.",
    "gen": 6
  },
  {
    "id": 694,
    "koName": "목도리키텔",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기",
      "노말"
    ],
    "koFlavor": "사막에서 생활한다. 태양의\n빛을 쬐고 발전하면\n먹이를 먹지 않아도 괜찮다.",
    "gen": 6
  },
  {
    "id": 695,
    "koName": "일레도리자드",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기",
      "노말"
    ],
    "koFlavor": "목의 깃을 펼쳐 발전한다.\n일레도리자드 1마리로 고층 빌딩에\n필요한 전기를 만들어 낼 수 있다.",
    "gen": 6
  },
  {
    "id": 696,
    "koName": "티고라스",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "드래곤"
    ],
    "koFlavor": "화석에서 부활한 포켓몬이다.\n마음에 들지 않는 일이 있으면\n짜증을 내며 난동을 부린다.",
    "gen": 6
  },
  {
    "id": 697,
    "koName": "견고라스",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "드래곤"
    ],
    "koFlavor": "두꺼운 철판을 종잇장처럼\n물어뜯는 커다란 턱 덕분에\n고대 세계에서는 무적이었다.",
    "gen": 6
  },
  {
    "id": 698,
    "koName": "아마루스",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "얼음"
    ],
    "koFlavor": "1억 년 전부터 빙하로\n뒤덮여 있던 몸의 일부에서\n부활한 고대의 포켓몬이다.",
    "gen": 6
  },
  {
    "id": 699,
    "koName": "아마루르가",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "얼음"
    ],
    "koFlavor": "마이너스 150도의 냉기를\n마름모꼴의 결정에서 내뿜어\n적을 감싸 얼어붙게 한다.",
    "gen": 6
  },
  {
    "id": 700,
    "koName": "님피아",
    "formType": null,
    "formLabel": "",
    "types": [
      "페어리"
    ],
    "koFlavor": "리본 모양의 더듬이에서\n마음을 온화하게 하는 파동을\n보내 싸움을 그만두게 한다.",
    "gen": 6
  },
  {
    "id": 701,
    "koName": "루차불",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투",
      "비행"
    ],
    "koFlavor": "체격은 작지만 괴력몬이나\n하리뭉 등의 커다란 포켓몬과\n막상막하로 싸우는 테크니션이다.",
    "gen": 6
  },
  {
    "id": 10300,
    "koName": "루차불",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "격투",
      "비행"
    ],
    "koFlavor": "체격은 작지만 괴력몬이나\n하리뭉 등의 커다란 포켓몬과\n막상막하로 싸우는 테크니션이다.",
    "gen": 6
  },
  {
    "id": 702,
    "koName": "데덴네",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기",
      "페어리"
    ],
    "koFlavor": "수염이 안테나의 역할을 한다.\n전파를 송수신해서 멀리 떨어진\n동료와 서로 연락하는 것이다.",
    "gen": 6
  },
  {
    "id": 703,
    "koName": "멜리시",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "페어리"
    ],
    "koFlavor": "지하 깊은 곳에 있는 고온, 고압의\n환경에서 태어났다. 머리의\n돌에서 에너지를 방출한다.",
    "gen": 6
  },
  {
    "id": 704,
    "koName": "미끄메라",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤"
    ],
    "koFlavor": "가장 약한 드래곤포켓몬이다.\n미끌미끌한 몸이 마르지 않도록\n축축한 그늘에서 산다.",
    "gen": 6
  },
  {
    "id": 705,
    "koName": "미끄네일",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤"
    ],
    "koFlavor": "무엇이든 녹여버리는 점액을\n분비해 적을 격퇴한다.\n눈은 퇴화하여 보이지 않는다.",
    "gen": 6
  },
  {
    "id": 10241,
    "koName": "미끄네일",
    "formType": "hisui",
    "formLabel": "",
    "types": [
      "강철",
      "드래곤"
    ],
    "koFlavor": "무엇이든 녹여버리는 점액을\n분비해 적을 격퇴한다.\n눈은 퇴화하여 보이지 않는다.",
    "gen": 6
  },
  {
    "id": 706,
    "koName": "미끄래곤",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤"
    ],
    "koFlavor": "사람을 잘 따르는 드래곤포켓몬이다.\n좋아하는 트레이너에게 달려들어\n미끈미끈한 점액투성이로 만들어 버린다.",
    "gen": 6
  },
  {
    "id": 10242,
    "koName": "미끄래곤",
    "formType": "hisui",
    "formLabel": "",
    "types": [
      "강철",
      "드래곤"
    ],
    "koFlavor": "사람을 잘 따르는 드래곤포켓몬이다.\n좋아하는 트레이너에게 달려들어\n미끈미끈한 점액투성이로 만들어 버린다.",
    "gen": 6
  },
  {
    "id": 707,
    "koName": "클레피",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철",
      "페어리"
    ],
    "koFlavor": "열쇠를 모으는 습성이 있다.\n적에게 습격당하면 열쇠로\n짤랑짤랑 소리를 내어 위협한다.",
    "gen": 6
  },
  {
    "id": 708,
    "koName": "나목령",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트",
      "풀"
    ],
    "koFlavor": "썩은 그루터기에 혼이\n깃들어 포켓몬이 되었다.\n사람이 가까이 가지 않는 숲에 산다.",
    "gen": 6
  },
  {
    "id": 709,
    "koName": "대로트",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트",
      "풀"
    ],
    "koFlavor": "다른 나무들을 자유자재로 조종한다.\n숲을 어지럽히는 인간은 죽을 때까지\n숲에서 벗어나지 못하게 한다.",
    "gen": 6
  },
  {
    "id": 710,
    "koName": "호바귀",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트",
      "풀"
    ],
    "koFlavor": "성불하지 못한 혼을\n호박으로 된 몸속에 담고 있다.\n해가 지면 활동하기 시작한다.",
    "gen": 6
  },
  {
    "id": 711,
    "koName": "펌킨인",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트",
      "풀"
    ],
    "koFlavor": "초승달이 뜬 밤에 기분 나쁜 목소리로\n노래를 부르며 마을 안을 헤맨다.\n그 노래를 들으면 저주를 받는다.",
    "gen": 6
  },
  {
    "id": 712,
    "koName": "꽁어름",
    "formType": null,
    "formLabel": "",
    "types": [
      "얼음"
    ],
    "koFlavor": "몸을 둘러싼 얼음이 적의\n공격을 막는다. 깨져도\n냉기로 재빨리 얼음을 얼린다.",
    "gen": 6
  },
  {
    "id": 713,
    "koName": "크레베이스",
    "formType": null,
    "formLabel": "",
    "types": [
      "얼음"
    ],
    "koFlavor": "얼어붙은 몸은 강철처럼\n단단하다. 앞을 가로막는 것을\n커다란 몸으로 파괴하며 이동한다.",
    "gen": 6
  },
  {
    "id": 10243,
    "koName": "크레베이스",
    "formType": "hisui",
    "formLabel": "",
    "types": [
      "얼음",
      "바위"
    ],
    "koFlavor": "얼어붙은 몸은 강철처럼\n단단하다. 앞을 가로막는 것을\n커다란 몸으로 파괴하며 이동한다.",
    "gen": 6
  },
  {
    "id": 714,
    "koName": "음뱃",
    "formType": null,
    "formLabel": "",
    "types": [
      "비행",
      "드래곤"
    ],
    "koFlavor": "캄캄한 동굴에서 산다.\n20만Hz의 초음파를\n커다란 귀에서 발사한다.",
    "gen": 6
  },
  {
    "id": 715,
    "koName": "음번",
    "formType": null,
    "formLabel": "",
    "types": [
      "비행",
      "드래곤"
    ],
    "koFlavor": "달빛조차 없는 어둠 속을 날며\n방심하고 있는 사냥감을 덮친다.\n어둠 속의 싸움에서는 무적이다.",
    "gen": 6
  },
  {
    "id": 716,
    "koName": "제르네아스",
    "formType": null,
    "formLabel": "",
    "types": [
      "페어리"
    ],
    "koFlavor": "영원한 생명을 나누어 준다고 한다.\n수목의 모습으로 1000년 동안\n잠들고 부활한다.",
    "gen": 6
  },
  {
    "id": 717,
    "koName": "이벨타르",
    "formType": null,
    "formLabel": "",
    "types": [
      "악",
      "비행"
    ],
    "koFlavor": "날개와 꼬리를 펼치고 빨갛게\n빛날 때 살아 있는 생명을\n빨아들이는 전설의 포켓몬.",
    "gen": 6
  },
  {
    "id": 718,
    "koName": "지가르데",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤",
      "땅"
    ],
    "koFlavor": "칼로스지방의 생태계가\n무너지면 모습을 나타내어\n숨겨진 힘을 발휘한다고 한다.",
    "gen": 6
  },
  {
    "id": 10301,
    "koName": "지가르데",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "드래곤",
      "땅"
    ],
    "koFlavor": "칼로스지방의 생태계가\n무너지면 모습을 나타내어\n숨겨진 힘을 발휘한다고 한다.",
    "gen": 6
  },
  {
    "id": 719,
    "koName": "디안시",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "페어리"
    ],
    "koFlavor": "멜리시의 돌연변이다.\n분홍빛으로 빛나는 몸은\n세계에서 가장 아름답다고 일컬어진다.",
    "gen": 6
  },
  {
    "id": 10075,
    "koName": "디안시",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "바위",
      "페어리"
    ],
    "koFlavor": "멜리시의 돌연변이다.\n분홍빛으로 빛나는 몸은\n세계에서 가장 아름답다고 일컬어진다.",
    "gen": 6
  },
  {
    "id": 720,
    "koName": "후파",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼",
      "고스트"
    ],
    "koFlavor": "공간을 뒤트는 링으로\n모든 것을 멀리 떨어진 곳으로\n날려버리고 마는 트러블메이커다.",
    "gen": 6
  },
  {
    "id": 10086,
    "koName": "후파",
    "formType": "form",
    "formLabel": "풀림",
    "types": [
      "에스퍼",
      "악"
    ],
    "koFlavor": "공간을 뒤트는 링으로\n모든 것을 멀리 떨어진 곳으로\n날려버리고 마는 트러블메이커다.",
    "gen": 6
  },
  {
    "id": 721,
    "koName": "볼케니온",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃",
      "물"
    ],
    "koFlavor": "수증기를 뿜어내어 자신의\n모습을 짙은 안개 속에 숨긴다. 사람이\n오지 않는 산에 산다고 한다.",
    "gen": 6
  },
  {
    "id": 722,
    "koName": "나몰빼미",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "비행"
    ],
    "koFlavor": "낮 동안에는 광합성으로\n힘을 비축하고 밤이 되면\n소리 없이 날며 먹이를 찾는다.",
    "gen": 7
  },
  {
    "id": 723,
    "koName": "빼미스로우",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "비행"
    ],
    "koFlavor": "날개 손질을 게을리하지 않는다.\n몸가짐을 정돈하는 이유뿐만 아니라\n칼날깃의 날을 유지하기 위해서다.",
    "gen": 7
  },
  {
    "id": 724,
    "koName": "모크나이퍼",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "고스트"
    ],
    "koFlavor": "0.1초 만에 화살깃을 날개에 달린\n시위에 메겨 발사한다. 상대가\n알아차리기 전에 급소를 꿰뚫어버린다.",
    "gen": 7
  },
  {
    "id": 10244,
    "koName": "모크나이퍼",
    "formType": "hisui",
    "formLabel": "",
    "types": [
      "풀",
      "격투"
    ],
    "koFlavor": "0.1초 만에 화살깃을 날개에 달린\n시위에 메겨 발사한다. 상대가\n알아차리기 전에 급소를 꿰뚫어버린다.",
    "gen": 7
  },
  {
    "id": 725,
    "koName": "냐오불",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "냐오불에게 신뢰받기 전에\n쓰다듬으려고 하면 날카로운 발톱으로\n심하게 할퀴니 주의가 필요하다.",
    "gen": 7
  },
  {
    "id": 726,
    "koName": "냐오히트",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "강적을 상대하게 되면\n전투 의욕이 높아지고 동시에\n불꽃 방울의 화력도 올라간다.",
    "gen": 7
  },
  {
    "id": 727,
    "koName": "어흥염",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃",
      "악"
    ],
    "koFlavor": "난폭한 거동이 눈에 띄지만\n작은 포켓몬을 도와주는\n상냥한 일면도 있다.",
    "gen": 7
  },
  {
    "id": 728,
    "koName": "누리공",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "매일 열심히 연습하면\n결국에는 커다랗고 성능 좋은\n벌룬을 만들 수 있게 된다.",
    "gen": 7
  },
  {
    "id": 729,
    "koName": "키요공",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "파도가 잔잔한 밤이 되면\n리더인 누리레느의 노랫소리에\n맞춰 동료와 함께 춤을 춘다.",
    "gen": 7
  },
  {
    "id": 730,
    "koName": "누리레느",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "페어리"
    ],
    "koFlavor": "싸움은 누리레느의 스테이지다.\n노래와 벌룬이 흩날리는 모습은\n보는 이들을 매료시킨다.",
    "gen": 7
  },
  {
    "id": 731,
    "koName": "콕코구리",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "비행"
    ],
    "koFlavor": "가늘어 보이지만 강인한\n목 근육을 가졌다. 초당\n16연타로 나무를 마구 쪼아 댄다.",
    "gen": 7
  },
  {
    "id": 732,
    "koName": "크라파",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "비행"
    ],
    "koFlavor": "먹은 나무열매의 씨를 부리에서\n발사한다. 씨는 대지에 흩어져서\n새로운 풀과 나무가 자라난다.",
    "gen": 7
  },
  {
    "id": 733,
    "koName": "왕큰부리",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "비행"
    ],
    "koFlavor": "암수의 사이가 좋다고 알려져 있다.\n행운을 부르기 위해\n결혼식에 데리고 온다.",
    "gen": 7
  },
  {
    "id": 734,
    "koName": "영구스",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "무엇이든 먹지만 신선하고\n살아 있는 것을 좋아해서\n먹이를 찾아 길을 누비고 다닌다.",
    "gen": 7
  },
  {
    "id": 735,
    "koName": "형사구스",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "매우 인내심이 강한 성질이지만\n좋아하는 꼬렛을 발견하면\n이성을 잃고 덤벼든다.",
    "gen": 7
  },
  {
    "id": 736,
    "koName": "턱지충이",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레"
    ],
    "koFlavor": "커다란 턱으로 숲에서\n땅을 파고 굴을 만든다.\n달콤한 수액을 매우 좋아한다.",
    "gen": 7
  },
  {
    "id": 737,
    "koName": "전지충이",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "전기"
    ],
    "koFlavor": "먹은 낙엽을 소화할 때 전기가\n발생하는 구조로 되어 있다.\n배의 전기 주머니에 충전된다.",
    "gen": 7
  },
  {
    "id": 738,
    "koName": "투구뿌논",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "전기"
    ],
    "koFlavor": "예비 배터리로서 전지충이를\n안고 날면 높은 전력의\n전자빔을 연사할 수 있다.",
    "gen": 7
  },
  {
    "id": 739,
    "koName": "오기지게",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투"
    ],
    "koFlavor": "야자나무로 착각하고 나시에\n오르는 일도 있다. 분노를 사\n내동댕이쳐진 다음 짓밟힌다.",
    "gen": 7
  },
  {
    "id": 740,
    "koName": "모단단게",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투",
      "얼음"
    ],
    "koFlavor": "생각하기보다는 일단 때리고 본다.\n눈사태를 펀치 러시로\n되받아쳤다는 기록도 있다.",
    "gen": 7
  },
  {
    "id": 10315,
    "koName": "모단단게",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "격투",
      "얼음"
    ],
    "koFlavor": "생각하기보다는 일단 때리고 본다.\n눈사태를 펀치 러시로\n되받아쳤다는 기록도 있다.",
    "gen": 7
  },
  {
    "id": 741,
    "koName": "춤추새",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃",
      "비행"
    ],
    "koFlavor": "다홍꿀을 빨아들인 춤추새.\n트레이너가 틀린 지시를 내리면\n격렬하게 화를 내는 격정적인 성격이다.",
    "gen": 7
  },
  {
    "id": 742,
    "koName": "에블리",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "페어리"
    ],
    "koFlavor": "상대가 내뿜는 오라로\n다음 행동을 예측한다.\n공격을 가볍게 피하고 반격한다.",
    "gen": 7
  },
  {
    "id": 743,
    "koName": "에리본",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "페어리"
    ],
    "koFlavor": "비에 젖는 것을 매우 싫어한다.\n흐린 날이 많은 가라르지방에서는\n모습을 좀처럼 보기 힘들다.",
    "gen": 7
  },
  {
    "id": 744,
    "koName": "암멍이",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위"
    ],
    "koFlavor": "목의 바위를 땅에 세게 부딪쳐서\n상대를 위협한다. 풀이 죽은\n순간에 덮친다.",
    "gen": 7
  },
  {
    "id": 745,
    "koName": "루가루암",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위"
    ],
    "koFlavor": "빠른 움직임으로 먹이를\n차츰차츰 궁지에 몰아넣는다.\n이빨은 항상 급소를 노리고 있다.",
    "gen": 7
  },
  {
    "id": 10126,
    "koName": "루가루암",
    "formType": "form",
    "formLabel": "한밤",
    "types": [
      "바위"
    ],
    "koFlavor": "빠른 움직임으로 먹이를\n차츰차츰 궁지에 몰아넣는다.\n이빨은 항상 급소를 노리고 있다.",
    "gen": 7
  },
  {
    "id": 10152,
    "koName": "루가루암",
    "formType": "form",
    "formLabel": "황혼",
    "types": [
      "바위"
    ],
    "koFlavor": "빠른 움직임으로 먹이를\n차츰차츰 궁지에 몰아넣는다.\n이빨은 항상 급소를 노리고 있다.",
    "gen": 7
  },
  {
    "id": 746,
    "koName": "약어리",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "위험을 느끼면 눈물을 글썽인다.\n눈물의 빛은 그들만의 신호로\n신호를 받고 많은 동료가 모인다.",
    "gen": 7
  },
  {
    "id": 747,
    "koName": "시마사리",
    "formType": null,
    "formLabel": "",
    "types": [
      "독",
      "물"
    ],
    "koFlavor": "알로라지방의 시마사리와 달리\n가라르의 시마사리는 코산호의\n가지의 맛을 아직 모른다.",
    "gen": 7
  },
  {
    "id": 748,
    "koName": "더시마사리",
    "formType": null,
    "formLabel": "",
    "types": [
      "독",
      "물"
    ],
    "koFlavor": "고래왕도 사흘 밤낮 괴로워할 정도의\n맹독을 체내 독주머니에\n듬뿍 비축하고 있다.",
    "gen": 7
  },
  {
    "id": 749,
    "koName": "머드나기",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅"
    ],
    "koFlavor": "흙을 먹어서 만든 진흙을\n다리에 바르면 험한 길에서도\n미끄러지지 않고 걸을 수 있게 된다.",
    "gen": 7
  },
  {
    "id": 750,
    "koName": "만마드",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅"
    ],
    "koFlavor": "10톤이 넘는 짐을 끌고\n자지도 쉬지도 않고 가라르지방을\n종단할 수 있는 지구력이 있다.",
    "gen": 7
  },
  {
    "id": 751,
    "koName": "물거미",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "벌레"
    ],
    "koFlavor": "평소에는 물속에서 생활하지만\n먹이를 찾으러 육지로\n올라올 때는 수포를 뒤집어쓴다.",
    "gen": 7
  },
  {
    "id": 752,
    "koName": "깨비물거미",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "벌레"
    ],
    "koFlavor": "머리의 수포 안에\n물거미를 넣어 남은 먹이를\n먹이면서 돌봐준다.",
    "gen": 7
  },
  {
    "id": 753,
    "koName": "짜랑랑",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "낮에는 햇빛을 받으며\n새근새근 잔다. 한밤중에\n잠에서 깨어 활동을 시작한다.",
    "gen": 7
  },
  {
    "id": 754,
    "koName": "라란티스",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "양팔의 꽃잎은\n얇고 예리하다. 빛을\n모아 빔을 쏘기도 한다.",
    "gen": 7
  },
  {
    "id": 755,
    "koName": "자마슈",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "페어리"
    ],
    "koFlavor": "낮에도 어두운 숲에서 생활한다.\n점멸하면서 빛나는 포자를\n흩뿌려 적을 잠들게 한다.",
    "gen": 7
  },
  {
    "id": 756,
    "koName": "마셰이드",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "페어리"
    ],
    "koFlavor": "한밤중에 숲속에서 빛을\n발견하더라도 다가가면 안 된다.\n마셰이드가 잠들어 버리게 한다.",
    "gen": 7
  },
  {
    "id": 757,
    "koName": "야도뇽",
    "formType": null,
    "formLabel": "",
    "types": [
      "독",
      "불꽃"
    ],
    "koFlavor": "먹이의 뒤로 숨어들어서\n눈치채기 전에 독가스를\n퍼부어 움직이지 못하게 한다.",
    "gen": 7
  },
  {
    "id": 758,
    "koName": "염뉴트",
    "formType": null,
    "formLabel": "",
    "types": [
      "독",
      "불꽃"
    ],
    "koFlavor": "염뉴트들의 싸움은\n거느리고 있는 수컷 야도뇽의\n수로 승패가 정해지는 듯하다.",
    "gen": 7
  },
  {
    "id": 759,
    "koName": "포곰곰",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "격투"
    ],
    "koFlavor": "앞발을 바둥바둥 흔들어 몸을\n지키는 모습은 귀엽지만\n큰 나무도 꺾을 정도의 위력이 있다.",
    "gen": 7
  },
  {
    "id": 760,
    "koName": "이븐곰",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "격투"
    ],
    "koFlavor": "격투가가 무색할 정도의 기술로\n먹이를 잡아 양쪽 겨드랑이에\n끼우고 거처로 갖고 간다.",
    "gen": 7
  },
  {
    "id": 761,
    "koName": "달콤아",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "습격당할 때 흘리는 땀은\n달콤하고 맛있다. 그 향기가\n적을 더 늘리고 만다.",
    "gen": 7
  },
  {
    "id": 762,
    "koName": "달무리나",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "쪼아대는 파크로우를\n머리의 꼭지로 후려치고\n예리한 발차기를 먹인다.",
    "gen": 7
  },
  {
    "id": 763,
    "koName": "달코퀸",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "단단하고 뾰족한 발끝으로\n킥을 먹여서 상대의 몸과 마음에\n지워지지 않는 상처를 남긴다.",
    "gen": 7
  },
  {
    "id": 764,
    "koName": "큐아링",
    "formType": null,
    "formLabel": "",
    "types": [
      "페어리"
    ],
    "koFlavor": "매우 좋은 향기가 나는 포켓몬이다.\n몸에 붙이는 꽃이 달라서\n큐아링마다 향이 다르다",
    "gen": 7
  },
  {
    "id": 765,
    "koName": "하랑우탄",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "에스퍼"
    ],
    "koFlavor": "숲 구석구석까지 파악하고 있어\n상처 입은 포켓몬이 있으면\n약초를 찾아 치료한다.",
    "gen": 7
  },
  {
    "id": 766,
    "koName": "내던숭이",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투"
    ],
    "koFlavor": "20마리 정도가 무리 지어 생활한다.\n정해진 역할을 해내면서\n혹독한 자연에서 꿋꿋하게 살아남았다.",
    "gen": 7
  },
  {
    "id": 767,
    "koName": "꼬시레",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "물"
    ],
    "koFlavor": "무리가 모여 다니며 항상\n주위를 경계한다. 적의 기척을\n느끼면 뿔뿔이 흩어져 도망간다.",
    "gen": 7
  },
  {
    "id": 768,
    "koName": "갑주무사",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "물"
    ],
    "koFlavor": "해저의 굴이나 침몰선이\n거처다. 케오퍼스와 싸워서\n진 쪽이 먹이가 된다.",
    "gen": 7
  },
  {
    "id": 10316,
    "koName": "갑주무사",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "벌레",
      "강철"
    ],
    "koFlavor": "해저의 굴이나 침몰선이\n거처다. 케오퍼스와 싸워서\n진 쪽이 먹이가 된다.",
    "gen": 7
  },
  {
    "id": 769,
    "koName": "모래꿍",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트",
      "땅"
    ],
    "koFlavor": "주로 모래사장에 산다.\n입안에 손을 넣은 상대를\n조종하여 자신을 크게 만든다.",
    "gen": 7
  },
  {
    "id": 770,
    "koName": "모래성이당",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트",
      "땅"
    ],
    "koFlavor": "해변에 살지만 물을 싫어한다.\n세찬 비를 맞으면\n성의 형태를 유지하지 못한다.",
    "gen": 7
  },
  {
    "id": 771,
    "koName": "해무기",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "보습 효과가 뛰어난 점액이\n피부를 감싸고 있어 며칠을\n육지에 있어도 마르지 않는다.",
    "gen": 7
  },
  {
    "id": 772,
    "koName": "타입:널",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "신화 속 포켓몬을 모델로\n만들었지만 힘이 폭주하는 것을\n억제하는 마스크를 쓰고 있다.",
    "gen": 7
  },
  {
    "id": 773,
    "koName": "실버디",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "본래의 힘을 해방하게 하는\n마지막 요소는 신뢰하는\n트레이너와의 유대였다.",
    "gen": 7
  },
  {
    "id": 774,
    "koName": "메테노",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "비행"
    ],
    "koFlavor": "겉껍질은 매우 튼튼하지만\n지상에 낙하할 때의 충격으로\n산산이 조각나 버린다.",
    "gen": 7
  },
  {
    "id": 775,
    "koName": "자말라",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "죽을 때까지 계속 잠들어 있는 이유는\n먹이인 잎사귀에 마취 성분이\n포함되어 있기 때문이다.",
    "gen": 7
  },
  {
    "id": 776,
    "koName": "폭거북스",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃",
      "드래곤"
    ],
    "koFlavor": "화산에서 살며 먹은 유황이\n등껍질에 있는 폭약의 원료가 된다.\n위험하게도 배설물 역시 폭발물이다.",
    "gen": 7
  },
  {
    "id": 777,
    "koName": "토게데마루",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기",
      "강철"
    ],
    "koFlavor": "위기에 처하면 몸을 둥글게 말고\n등의 가시를 곤두세워\n마구잡이로 전격을 쏘아댄다.",
    "gen": 7
  },
  {
    "id": 778,
    "koName": "따라큐",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트",
      "페어리"
    ],
    "koFlavor": "연구를 위해 누더기 속을\n들여다본 학자가 알 수 없는\n병으로 목숨을 잃었다.",
    "gen": 7
  },
  {
    "id": 779,
    "koName": "치갈기",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "에스퍼"
    ],
    "koFlavor": "시마사리의 바늘도 뚫지 못할 정도로\n두꺼운 피부를 가졌다. 튼튼한 이빨로\n어적어적 바늘을 갉아서 먹는다.",
    "gen": 7
  },
  {
    "id": 780,
    "koName": "할비롱",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "드래곤"
    ],
    "koFlavor": "사람을 잘 따르고 마음이 착하지만\n한번 화가 나면 강풍을 일으켜\n모든 것을 쓰러뜨려 버린다.",
    "gen": 7
  },
  {
    "id": 10302,
    "koName": "할비롱",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "노말",
      "드래곤"
    ],
    "koFlavor": "사람을 잘 따르고 마음이 착하지만\n한번 화가 나면 강풍을 일으켜\n모든 것을 쓰러뜨려 버린다.",
    "gen": 7
  },
  {
    "id": 781,
    "koName": "타타륜",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트",
      "풀"
    ],
    "koFlavor": "바다에 닻을 내려 먹이를\n기다린다. 몸집이 큰 고래왕을\n잡아 생기를 빨아들인다.",
    "gen": 7
  },
  {
    "id": 782,
    "koName": "짜랑꼬",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤"
    ],
    "koFlavor": "털이 금속처럼 단단해져서 생긴\n비늘을 부딪쳐서 소리를 내고\n동료와 소통한다.",
    "gen": 7
  },
  {
    "id": 783,
    "koName": "짜랑고우",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤",
      "격투"
    ],
    "koFlavor": "비늘을 부딪쳐 우렁찬 소리를\n낸 후 상대에게 덤벼들어\n날카로운 손톱으로 갈기갈기 찢는다.",
    "gen": 7
  },
  {
    "id": 784,
    "koName": "짜랑고우거",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤",
      "격투"
    ],
    "koFlavor": "짜랑고우거의 비늘로 만든\n갑옷을 두른 고대의 전사가\n유적에 그려져 있다.",
    "gen": 7
  },
  {
    "id": 785,
    "koName": "카푸꼬꼬꼭",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기",
      "페어리"
    ],
    "koFlavor": "번개를 조종하는 멜레멜레의\n수호신. 호기심이 왕성해서\n가끔 사람들 앞에 나타난다.",
    "gen": 7
  },
  {
    "id": 786,
    "koName": "카푸나비나",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼",
      "페어리"
    ],
    "koFlavor": "수호신으로 불리지만 천진난만하면서\n잔혹한 성질도 겸비한\n자연의 화신이라 할 수 있는 존재다.",
    "gen": 7
  },
  {
    "id": 787,
    "koName": "카푸브루루",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "페어리"
    ],
    "koFlavor": "꼬리로 소리를 내어 위치를 알림으로써\n불필요한 싸움을 피한다. 초목을\n조종하는 울라울라의 수호신.",
    "gen": 7
  },
  {
    "id": 788,
    "koName": "카푸느지느",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "페어리"
    ],
    "koFlavor": "수호신으로 불리지만 무턱대고\n다가오는 상대에게는 무서운\n재앙을 가져다주는 일도 있다.",
    "gen": 7
  },
  {
    "id": 789,
    "koName": "코스모그",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "경계심이 없고 호기심이 왕성해\n위험한 상황에 맞닥뜨리는 경우가 많다.\n위기에 처하면 워프해서 도망친다.",
    "gen": 7
  },
  {
    "id": 790,
    "koName": "코스모움",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "대기의 티끌을 굉장한 기세로\n빨아들여 진화 에너지를\n코어에서 열심히 만들고 있다.",
    "gen": 7
  },
  {
    "id": 791,
    "koName": "솔가레오",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼",
      "강철"
    ],
    "koFlavor": "태양을 삼키는 짐승이라고\n불렸다. 굉장한 양의\n빛 에너지를 방출한다.",
    "gen": 7
  },
  {
    "id": 792,
    "koName": "루나아라",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼",
      "고스트"
    ],
    "koFlavor": "주위의 빛을 모두 빼앗아\n자신 스스로 만월의 모습이 되어\n밤하늘에 빛을 발산한다.",
    "gen": 7
  },
  {
    "id": 793,
    "koName": "텅비드",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "독"
    ],
    "koFlavor": "울트라홀을 통해 이 세계에\n나타났다. 포켓몬이나 인간에게\n기생해서 사는 듯하다.",
    "gen": 7
  },
  {
    "id": 794,
    "koName": "매시붕",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "격투"
    ],
    "koFlavor": "이상할 정도로 팽창하는\n근육을 자랑한다.\n울트라비스트의 일종.",
    "gen": 7
  },
  {
    "id": 795,
    "koName": "페로코체",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "격투"
    ],
    "koFlavor": "이 세계와는 성질이 다르고\n위험하지만 원래 살던 세계에서는\n흔히 볼 수 있는 생물인 듯하다.",
    "gen": 7
  },
  {
    "id": 796,
    "koName": "전수목",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "울트라비스트라고 불린다.\n나무처럼 땅에 손발을 꽂고\n움직이지 않는 것도 있다.",
    "gen": 7
  },
  {
    "id": 797,
    "koName": "철화구야",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철",
      "비행"
    ],
    "koFlavor": "이 세계와는 성질이 다르고\n위험하지만 원래 살던 세계에서는\n흔히 볼 수 있는 생물인 듯하다.",
    "gen": 7
  },
  {
    "id": 798,
    "koName": "종이신도",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "강철"
    ],
    "koFlavor": "이 세계와는 성질이 다르고\n위험하지만 원래 살던 세계에서는\n흔히 볼 수 있는 생물인 듯하다.",
    "gen": 7
  },
  {
    "id": 799,
    "koName": "악식킹",
    "formType": null,
    "formLabel": "",
    "types": [
      "악",
      "드래곤"
    ],
    "koFlavor": "UB라고 불리는 미지의 생명체.\n늘 배가 고픈 상태인 것인지\n계속해서 무언가를 먹고 있다.",
    "gen": 7
  },
  {
    "id": 800,
    "koName": "네크로즈마",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "살기 위해 빛을 찾아 날뛰며\n돌아다닌다. 레이저 광선을 쏘아\n온갖 것을 산산조각 낸다.",
    "gen": 7
  },
  {
    "id": 10155,
    "koName": "네크로즈마",
    "formType": "form",
    "formLabel": "황혼",
    "types": [
      "에스퍼",
      "강철"
    ],
    "koFlavor": "살기 위해 빛을 찾아 날뛰며\n돌아다닌다. 레이저 광선을 쏘아\n온갖 것을 산산조각 낸다.",
    "gen": 7
  },
  {
    "id": 10156,
    "koName": "네크로즈마",
    "formType": "form",
    "formLabel": "새벽",
    "types": [
      "에스퍼",
      "고스트"
    ],
    "koFlavor": "살기 위해 빛을 찾아 날뛰며\n돌아다닌다. 레이저 광선을 쏘아\n온갖 것을 산산조각 낸다.",
    "gen": 7
  },
  {
    "id": 10157,
    "koName": "네크로즈마",
    "formType": "form",
    "formLabel": "울트라",
    "types": [
      "에스퍼",
      "드래곤"
    ],
    "koFlavor": "살기 위해 빛을 찾아 날뛰며\n돌아다닌다. 레이저 광선을 쏘아\n온갖 것을 산산조각 낸다.",
    "gen": 7
  },
  {
    "id": 801,
    "koName": "마기아나",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철",
      "페어리"
    ],
    "koFlavor": "약 500년 전 과학자에 의해\n만들어졌다. 소울하트라고\n불리는 파츠가 본체다.",
    "gen": 7
  },
  {
    "id": 10147,
    "koName": "마기아나",
    "formType": "form",
    "formLabel": "500년전의모습",
    "types": [
      "강철",
      "페어리"
    ],
    "koFlavor": "약 500년 전 과학자에 의해\n만들어졌다. 소울하트라고\n불리는 파츠가 본체다.",
    "gen": 7
  },
  {
    "id": 10317,
    "koName": "마기아나",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "강철",
      "페어리"
    ],
    "koFlavor": "약 500년 전 과학자에 의해\n만들어졌다. 소울하트라고\n불리는 파츠가 본체다.",
    "gen": 7
  },
  {
    "id": 802,
    "koName": "마샤도",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투",
      "고스트"
    ],
    "koFlavor": "모든 그림자 안에 숨어들 수 있는\n능력을 갖고 있어 오랫동안\n누구에게도 발견되지 않았다.",
    "gen": 7
  },
  {
    "id": 803,
    "koName": "베베놈",
    "formType": null,
    "formLabel": "",
    "types": [
      "독"
    ],
    "koFlavor": "다른 세계에 사는 울트라비스트.\n머리의 독침에서 나온 독액을\n상대에게 끼얹고 깔깔 웃는다.",
    "gen": 7
  },
  {
    "id": 804,
    "koName": "아고용",
    "formType": null,
    "formLabel": "",
    "types": [
      "독",
      "드래곤"
    ],
    "koFlavor": "울트라비스트의 일종.\n독침에서 점도가 높고\n빛나는 독액을 발사한다.",
    "gen": 7
  },
  {
    "id": 805,
    "koName": "차곡차곡",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "강철"
    ],
    "koFlavor": "UB 같은 수수께끼의 생명체.\n갑자기 움직이기 시작해서 덮쳐온\n돌담의 정체는 이 녀석이다.",
    "gen": 7
  },
  {
    "id": 806,
    "koName": "두파팡",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃",
      "고스트"
    ],
    "koFlavor": "울트라홀에서 나타난 UB.\n폭발로 상대를 놀라게 하고\n그 틈에 생기를 빼앗는다.",
    "gen": 7
  },
  {
    "id": 807,
    "koName": "제라오라",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "손발의 볼록살에서 전기를 내보낸다.\n제라오라가 달려나가면 번개가\n치고 우렛소리가 울려 퍼진다.",
    "gen": 7
  },
  {
    "id": 10319,
    "koName": "제라오라",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "손발의 볼록살에서 전기를 내보낸다.\n제라오라가 달려나가면 번개가\n치고 우렛소리가 울려 퍼진다.",
    "gen": 7
  },
  {
    "id": 808,
    "koName": "멜탄",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철"
    ],
    "koFlavor": "무리 지어 생활하지만\n때가 되면 1마리의 강한 멜탄이\n동료들을 흡수해 진화한다.",
    "gen": 7
  },
  {
    "id": 809,
    "koName": "멜메탈",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철"
    ],
    "koFlavor": "원심력으로 힘을 더해서\n날리는 묵직한 너트 펀치는\n포켓몬 중 최강이라고 전해진다.",
    "gen": 7
  },
  {
    "id": 10208,
    "koName": "멜메탈",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "강철"
    ],
    "koFlavor": "원심력으로 힘을 더해서\n날리는 묵직한 너트 펀치는\n포켓몬 중 최강이라고 전해진다.",
    "gen": 7
  },
  {
    "id": 810,
    "koName": "흥나숭",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "스틱으로 연타하여 공격한다.\n굉장한 속도로 치다 보면\n점점 텐션이 올라간다.",
    "gen": 8
  },
  {
    "id": 811,
    "koName": "채키몽",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "격렬한 비트를 내는데\n열중한 나머지 싸움에서\n상대가 기절해도 모른다.",
    "gen": 8
  },
  {
    "id": 812,
    "koName": "고릴타",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "드럼 테크닉이 가장 뛰어난 자가\n보스가 된다. 천성이 온화해서\n그룹의 조화를 중히 여긴다.",
    "gen": 8
  },
  {
    "id": 10209,
    "koName": "고릴타",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "드럼 테크닉이 가장 뛰어난 자가\n보스가 된다. 천성이 온화해서\n그룹의 조화를 중히 여긴다.",
    "gen": 8
  },
  {
    "id": 813,
    "koName": "염버니",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "싸울 준비가 되면\n코끝과 발바닥의\n볼록살에서 고열을 낸다.",
    "gen": 8
  },
  {
    "id": 814,
    "koName": "래비풋",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "손을 쓰지 않고 나뭇가지에서\n나무열매를 따내고 리프팅한다.\n발 기술을 연마하는 연습이다.",
    "gen": 8
  },
  {
    "id": 815,
    "koName": "에이스번",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "공수에 뛰어나고 응원을 받으면\n더 뜨겁게 타오르지만 스탠드 플레이를\n하다가 위기에 처하는 경우도 있다.",
    "gen": 8
  },
  {
    "id": 10210,
    "koName": "에이스번",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "공수에 뛰어나고 응원을 받으면\n더 뜨겁게 타오르지만 스탠드 플레이를\n하다가 위기에 처하는 경우도 있다.",
    "gen": 8
  },
  {
    "id": 816,
    "koName": "울머기",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "젖으면 피부색이 변한다.\n위장한 것처럼\n모습이 보이지 않게 된다.",
    "gen": 8
  },
  {
    "id": 817,
    "koName": "누겔레온",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "머리가 좋지만 귀찮음이 많다.\n영역에 적이 다가오지 못하게\n여기저기에 함정을 만들어 놓는다.",
    "gen": 8
  },
  {
    "id": 818,
    "koName": "인텔리레온",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "손가락 끝에서 마하3의 스피드로\n물대포를 쏜다. 눈의 얇은 막으로\n급소를 간파해 꿰뚫어버린다.",
    "gen": 8
  },
  {
    "id": 10211,
    "koName": "인텔리레온",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "손가락 끝에서 마하3의 스피드로\n물대포를 쏜다. 눈의 얇은 막으로\n급소를 간파해 꿰뚫어버린다.",
    "gen": 8
  },
  {
    "id": 819,
    "koName": "탐리스",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "항상 나무열매를 먹고 있어\n보기보다 튼튼하다. 나무열매를\n노리고 밭에 출몰한다.",
    "gen": 8
  },
  {
    "id": 820,
    "koName": "요씽리스",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "아무리 단단한 나무열매 껍질도\n이빨로 아작아작 갉아 먹는다.\n가라르에서 쉽게 볼 수 있는 포켓몬이다.",
    "gen": 8
  },
  {
    "id": 821,
    "koName": "파라꼬",
    "formType": null,
    "formLabel": "",
    "types": [
      "비행"
    ],
    "koFlavor": "작은 몸을 기민하게 날려\n틈을 노리는 전법으로\n몸집이 큰 상대를 농락한다.",
    "gen": 8
  },
  {
    "id": 822,
    "koName": "파크로우",
    "formType": null,
    "formLabel": "",
    "types": [
      "비행"
    ],
    "koFlavor": "혹독한 싸움을 헤쳐 나와\n상대의 역량을 정확히\n판단하는 힘을 습득했다.",
    "gen": 8
  },
  {
    "id": 823,
    "koName": "아머까오",
    "formType": null,
    "formLabel": "",
    "types": [
      "비행",
      "강철"
    ],
    "koFlavor": "비행 능력이 뛰어나고\n매우 영리해 가라르지방에서\n하늘의 택시로 활약한다.",
    "gen": 8
  },
  {
    "id": 10212,
    "koName": "아머까오",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "비행",
      "강철"
    ],
    "koFlavor": "비행 능력이 뛰어나고\n매우 영리해 가라르지방에서\n하늘의 택시로 활약한다.",
    "gen": 8
  },
  {
    "id": 824,
    "koName": "두루지벌레",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레"
    ],
    "koFlavor": "밭에서 자주 보이는 포켓몬이다.\n몸에 난 털로 주위에서\n일어나는 일을 감지한다.",
    "gen": 8
  },
  {
    "id": 825,
    "koName": "레돔벌레",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "에스퍼"
    ],
    "koFlavor": "껍질 안에서 성장 중이다.\n사이코 파워로 밖의 상태를\n살피며 진화에 대비하고 있다.",
    "gen": 8
  },
  {
    "id": 826,
    "koName": "이올브",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "에스퍼"
    ],
    "koFlavor": "사이코 파워를 발산해 주위를\n조사한다. 관측 범위는\n주변 10km에 달한다.",
    "gen": 8
  },
  {
    "id": 10213,
    "koName": "이올브",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "벌레",
      "에스퍼"
    ],
    "koFlavor": "사이코 파워를 발산해 주위를\n조사한다. 관측 범위는\n주변 10km에 달한다.",
    "gen": 8
  },
  {
    "id": 827,
    "koName": "훔처우",
    "formType": null,
    "formLabel": "",
    "types": [
      "악"
    ],
    "koFlavor": "조심성이 많고 교활하다.\n먹이를 훔치고는 꼬리로\n발자국을 지우며 도망간다.",
    "gen": 8
  },
  {
    "id": 828,
    "koName": "폭슬라이",
    "formType": null,
    "formLabel": "",
    "types": [
      "악"
    ],
    "koFlavor": "가벼운 몸과 날카로운 발톱으로\n먹이나 알을 훔치며 돌아다닌다.\n펄스멍이 천적이다.",
    "gen": 8
  },
  {
    "id": 829,
    "koName": "꼬모카",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "산들바람에 빙글빙글 돌면서\n즐겁게 노래하는 귀여운 모습에\n반해서 키우는 사람이 많다.",
    "gen": 8
  },
  {
    "id": 830,
    "koName": "백솜모카",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "머리의 솜털로 만든 실은\n윤이 나고 매우 아름답다.\n가라르지방의 특산품이다.",
    "gen": 8
  },
  {
    "id": 831,
    "koName": "우르",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "털이 많이 자라면 움직이지 못한다.\n우르의 털로 짠 천은\n놀라울 정도로 튼튼하다.",
    "gen": 8
  },
  {
    "id": 832,
    "koName": "배우르",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "늠름하게 자란 뿔은 이성에게\n어필하기 위한 것이다.\n무기로는 사용하지 않는다.",
    "gen": 8
  },
  {
    "id": 833,
    "koName": "깨물부기",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "머리 뿔은 바위처럼 단단하다.\n뿔로 싸우다가 풀이 죽은 틈에\n덥석 물고 놓지 않는다.",
    "gen": 8
  },
  {
    "id": 834,
    "koName": "갈가부기",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "바위"
    ],
    "koFlavor": "목을 자유자재로 늘이고 줄인다.\n떨어져 있는 곳에서 목을 단번에 늘여\n날카로운 이빨로 적의 숨통을 끊는다.",
    "gen": 8
  },
  {
    "id": 10214,
    "koName": "갈가부기",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "물",
      "바위"
    ],
    "koFlavor": "목을 자유자재로 늘이고 줄인다.\n떨어져 있는 곳에서 목을 단번에 늘여\n날카로운 이빨로 적의 숨통을 끊는다.",
    "gen": 8
  },
  {
    "id": 835,
    "koName": "멍파치",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "간식에 끌려 사람의 일을\n돕는 먹보다. 탁탁 튀는\n전기를 두르고 계속 달린다.",
    "gen": 8
  },
  {
    "id": 836,
    "koName": "펄스멍",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "전기의 힘으로 다릿심을\n강하게 키운다. 최고 속도는\n시속 90km를 가볍게 넘긴다.",
    "gen": 8
  },
  {
    "id": 837,
    "koName": "탄동",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위"
    ],
    "koFlavor": "바위투성이의 거친 길을 아무렇지도\n않게 일륜차처럼 달린다.\n석탄을 태워서 살고 있다.",
    "gen": 8
  },
  {
    "id": 838,
    "koName": "탄차곤",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "불꽃"
    ],
    "koFlavor": "다리를 고속으로 회전시켜\n시속 30km로 달린다.\n섭씨 1000도의 불꽃을 내뿜는다.",
    "gen": 8
  },
  {
    "id": 839,
    "koName": "석탄산",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "불꽃"
    ],
    "koFlavor": "싸우게 되면 석탄으로 된 산이\n새빨갛게 타올라 불똥을\n흩뿌려 주위를 태운다.",
    "gen": 8
  },
  {
    "id": 10215,
    "koName": "석탄산",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "바위",
      "불꽃"
    ],
    "koFlavor": "싸우게 되면 석탄으로 된 산이\n새빨갛게 타올라 불똥을\n흩뿌려 주위를 태운다.",
    "gen": 8
  },
  {
    "id": 840,
    "koName": "과사삭벌레",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "드래곤"
    ],
    "koFlavor": "태어나면 사과 안으로 숨어든다.\n안을 파먹으면서 성장하고\n사과 맛이 진화를 결정한다.",
    "gen": 8
  },
  {
    "id": 841,
    "koName": "애프룡",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "드래곤"
    ],
    "koFlavor": "사과 껍질로 된 날개로 날며\n강산성의 타액을 뱉는다.\n사과의 형태로 변형한다.",
    "gen": 8
  },
  {
    "id": 10216,
    "koName": "애프룡",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "풀",
      "드래곤"
    ],
    "koFlavor": "사과 껍질로 된 날개로 날며\n강산성의 타액을 뱉는다.\n사과의 형태로 변형한다.",
    "gen": 8
  },
  {
    "id": 842,
    "koName": "단지래플",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "드래곤"
    ],
    "koFlavor": "달콤한 꿀로 몸이 둘러싸여 있다.\n등의 껍질은 특히 더 달콤해서\n옛날에는 어린이 간식이었다.",
    "gen": 8
  },
  {
    "id": 10217,
    "koName": "단지래플",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "풀",
      "드래곤"
    ],
    "koFlavor": "달콤한 꿀로 몸이 둘러싸여 있다.\n등의 껍질은 특히 더 달콤해서\n옛날에는 어린이 간식이었다.",
    "gen": 8
  },
  {
    "id": 843,
    "koName": "모래뱀",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅"
    ],
    "koFlavor": "콧구멍으로 모래를 분사한다.\n적의 눈을 속이고 그 틈에\n땅속으로 숨어들어 몸을 숨긴다.",
    "gen": 8
  },
  {
    "id": 844,
    "koName": "사다이사",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅"
    ],
    "koFlavor": "독특한 똬리 형태는\n모래주머니의 모래를 더 효율적으로\n분사하기 위함이다.",
    "gen": 8
  },
  {
    "id": 10218,
    "koName": "사다이사",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "땅"
    ],
    "koFlavor": "독특한 똬리 형태는\n모래주머니의 모래를 더 효율적으로\n분사하기 위함이다.",
    "gen": 8
  },
  {
    "id": 845,
    "koName": "윽우지",
    "formType": null,
    "formLabel": "",
    "types": [
      "비행",
      "물"
    ],
    "koFlavor": "먹보이다. 먹이인 찌로꼬치를\n통째로 삼키지만 가끔 실수로\n다른 포켓몬을 먹어버린다.",
    "gen": 8
  },
  {
    "id": 846,
    "koName": "찌로꼬치",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "배가 불러서 현저히\n움직임이 둔해지면\n윽우지가 통째로 삼켜버린다.",
    "gen": 8
  },
  {
    "id": 847,
    "koName": "꼬치조",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "꼬리지느러미를 회전시켜 단번에\n돌격한다. 100노트를 넘는\n속도로 먹이를 관통한다.",
    "gen": 8
  },
  {
    "id": 848,
    "koName": "일레즌",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기",
      "독"
    ],
    "koFlavor": "독소를 화학 변화시켜\n전기를 만들어 낸다. 전력은\n약하지만 찌릿찌릿 마비된다.",
    "gen": 8
  },
  {
    "id": 849,
    "koName": "스트린더",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기",
      "독"
    ],
    "koFlavor": "호전적이며 성미가 급하다.\n고인 물을 벌컥벌컥 마셔서\n물속의 독소를 흡수한다.",
    "gen": 8
  },
  {
    "id": 10184,
    "koName": "스트린더",
    "formType": "form",
    "formLabel": "로우",
    "types": [
      "전기",
      "독"
    ],
    "koFlavor": "호전적이며 성미가 급하다.\n고인 물을 벌컥벌컥 마셔서\n물속의 독소를 흡수한다.",
    "gen": 8
  },
  {
    "id": 10219,
    "koName": "스트린더",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "전기",
      "독"
    ],
    "koFlavor": "호전적이며 성미가 급하다.\n고인 물을 벌컥벌컥 마셔서\n물속의 독소를 흡수한다.",
    "gen": 8
  },
  {
    "id": 10228,
    "koName": "스트린더",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "전기",
      "독"
    ],
    "koFlavor": "호전적이며 성미가 급하다.\n고인 물을 벌컥벌컥 마셔서\n물속의 독소를 흡수한다.",
    "gen": 8
  },
  {
    "id": 850,
    "koName": "태우지네",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃",
      "벌레"
    ],
    "koFlavor": "발열된 몸으로 먹이를\n세게 조른다. 알맞게 구워지면\n우적우적 먹어버린다.",
    "gen": 8
  },
  {
    "id": 851,
    "koName": "다태우지네",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃",
      "벌레"
    ],
    "koFlavor": "공격적인 성질을 가졌다.\n탄 몸도 위험하지만\n큰 이빨도 날카롭다.",
    "gen": 8
  },
  {
    "id": 10220,
    "koName": "다태우지네",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "불꽃",
      "벌레"
    ],
    "koFlavor": "공격적인 성질을 가졌다.\n탄 몸도 위험하지만\n큰 이빨도 날카롭다.",
    "gen": 8
  },
  {
    "id": 852,
    "koName": "때때무노",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투"
    ],
    "koFlavor": "세 살 아이 정도의 지능을 가졌다.\n촉수는 잘 끊어지지만\n재생되기 때문에 신경 쓰지 않는다.",
    "gen": 8
  },
  {
    "id": 853,
    "koName": "케오퍼스",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투"
    ],
    "koFlavor": "자신의 실력을 시험하기 위해\n육지로 올라가 대전 상대를 찾는다.\n싸움이 끝나면 바다로 돌아간다.",
    "gen": 8
  },
  {
    "id": 854,
    "koName": "데인차",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트"
    ],
    "koFlavor": "거처로 삼고 있는 찻잔은\n유명한 골동품 식기다.\n위작이 많이 나돌고 있다.",
    "gen": 8
  },
  {
    "id": 855,
    "koName": "포트데스",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트"
    ],
    "koFlavor": "남겨진 홍차를 발견하면\n자신의 몸을 흘러 들어가게 한다.\n그 홍차는 포트데스가 된다.",
    "gen": 8
  },
  {
    "id": 856,
    "koName": "몸지브림",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "인적이 드문 곳을 좋아한다.\n강한 감정이 느껴지면\n쏜살같이 도망쳐버린다.",
    "gen": 8
  },
  {
    "id": 857,
    "koName": "손지브림",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "머리의 술로 상대를 때려\n꼼짝 못 하게 한다. 프로복서조차\n한 방에 KO되는 파괴력이다.",
    "gen": 8
  },
  {
    "id": 858,
    "koName": "브리무음",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼",
      "페어리"
    ],
    "koFlavor": "숲의 마녀라는 별명을 가졌다.\n소란을 피우면 촉수의 손톱에\n찢겨질지도 모른다.",
    "gen": 8
  },
  {
    "id": 10221,
    "koName": "브리무음",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "에스퍼",
      "페어리"
    ],
    "koFlavor": "숲의 마녀라는 별명을 가졌다.\n소란을 피우면 촉수의 손톱에\n찢겨질지도 모른다.",
    "gen": 8
  },
  {
    "id": 859,
    "koName": "메롱꿍",
    "formType": null,
    "formLabel": "",
    "types": [
      "악",
      "페어리"
    ],
    "koFlavor": "민가에 숨어들어 도둑질을\n하고 속상해하는 사람의\n마이너스 에너지도 얻는다.",
    "gen": 8
  },
  {
    "id": 860,
    "koName": "쏘겨모",
    "formType": null,
    "formLabel": "",
    "types": [
      "악",
      "페어리"
    ],
    "koFlavor": "못된 꾀를 내어 밤에 숲으로\n꾀어내려 한다. 농작물을\n키우는 힘을 갖고 있는 듯하다.",
    "gen": 8
  },
  {
    "id": 861,
    "koName": "오롱털",
    "formType": null,
    "formLabel": "",
    "types": [
      "악",
      "페어리"
    ],
    "koFlavor": "머리카락은 근섬유의 역할을 하며\n매듭이 풀어지면 촉수와 같은\n움직임으로 상대를 묶어버린다.",
    "gen": 8
  },
  {
    "id": 10222,
    "koName": "오롱털",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "악",
      "페어리"
    ],
    "koFlavor": "머리카락은 근섬유의 역할을 하며\n매듭이 풀어지면 촉수와 같은\n움직임으로 상대를 묶어버린다.",
    "gen": 8
  },
  {
    "id": 862,
    "koName": "가로막구리",
    "formType": null,
    "formLabel": "",
    "types": [
      "악",
      "노말"
    ],
    "koFlavor": "싸움을 반복하면서 진화한다.\n팔을 크로스하고 우렁차게 외치면\n어떤 상대라도 풀죽게 된다.",
    "gen": 8
  },
  {
    "id": 863,
    "koName": "나이킹",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철"
    ],
    "koFlavor": "싸움에 열중해 진화한 결과\n펴면 단검으로 변하는\n위험한 발톱을 얻었다.",
    "gen": 8
  },
  {
    "id": 864,
    "koName": "산호르곤",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트"
    ],
    "koFlavor": "혼을 감싸는 영체의 몸은\n주의가 필요하다. 만지면\n돌처럼 움직일 수 없게 된다.",
    "gen": 8
  },
  {
    "id": 865,
    "koName": "창파나이트",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투"
    ],
    "koFlavor": "단단한 파잎으로 공격을 받아넘기고\n날카로운 줄기로 반격한다.\n파는 무기인 동시에 식재료다.",
    "gen": 8
  },
  {
    "id": 866,
    "koName": "마임꽁꽁",
    "formType": null,
    "formLabel": "",
    "types": [
      "얼음",
      "에스퍼"
    ],
    "koFlavor": "유머러스한 움직임으로 모두에게\n인기가 높다. 배의 무늬에서\n사이코 파워를 방출한다.",
    "gen": 8
  },
  {
    "id": 867,
    "koName": "데스판",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅",
      "고스트"
    ],
    "koFlavor": "그림자 같은 몸을 만지면 안 된다.\n그림에 새겨진 무서운 기억을\n보게 되기 때문이다.",
    "gen": 8
  },
  {
    "id": 868,
    "koName": "마빌크",
    "formType": null,
    "formLabel": "",
    "types": [
      "페어리"
    ],
    "koFlavor": "마빌크가 모습을 보인\n디저트 가게는 크게\n번창한다고 전해지고 있다.",
    "gen": 8
  },
  {
    "id": 869,
    "koName": "마휘핑",
    "formType": null,
    "formLabel": "",
    "types": [
      "페어리"
    ],
    "koFlavor": "손에서 나오는 크림은\n마휘핑이 행복할 때\n단맛과 감칠맛이 깊어진다.",
    "gen": 8
  },
  {
    "id": 10223,
    "koName": "마휘핑",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "페어리"
    ],
    "koFlavor": "손에서 나오는 크림은\n마휘핑이 행복할 때\n단맛과 감칠맛이 깊어진다.",
    "gen": 8
  },
  {
    "id": 870,
    "koName": "대여르",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투"
    ],
    "koFlavor": "6마리가 1마리의 포켓몬이다.\n대열을 바꿔가며\n팀워크로 싸운다.",
    "gen": 8
  },
  {
    "id": 10303,
    "koName": "대여르",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "격투"
    ],
    "koFlavor": "6마리가 1마리의 포켓몬이다.\n대열을 바꿔가며\n팀워크로 싸운다.",
    "gen": 8
  },
  {
    "id": 871,
    "koName": "찌르성게",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "가시 하나하나에 전기를\n비축하고 있다. 부러진 가시도\n3시간 동안 방전을 계속한다.",
    "gen": 8
  },
  {
    "id": 872,
    "koName": "누니머기",
    "formType": null,
    "formLabel": "",
    "types": [
      "얼음",
      "벌레"
    ],
    "koFlavor": "땅에 쌓인 눈을 먹는다.\n많이 먹으면 먹을수록\n등의 가시는 훌륭하게 자란다.",
    "gen": 8
  },
  {
    "id": 873,
    "koName": "모스노우",
    "formType": null,
    "formLabel": "",
    "types": [
      "얼음",
      "벌레"
    ],
    "koFlavor": "산과 들을 황폐하게 만들면 용서하지 않는다.\n차가운 날개로 날아다니며\n눈보라를 일으켜 응징한다.",
    "gen": 8
  },
  {
    "id": 874,
    "koName": "돌헨진",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위"
    ],
    "koFlavor": "1년에 1번 정해진 일시에\n어디선가 모여 둥글게\n늘어서는 습성이 있다.",
    "gen": 8
  },
  {
    "id": 875,
    "koName": "빙큐보",
    "formType": null,
    "formLabel": "",
    "types": [
      "얼음"
    ],
    "koFlavor": "더위에 약해서 얼굴을 언제나\n얼음으로 식히고 있다. 머리의 털을\n바다에 늘어뜨리고 먹이를 낚는다.",
    "gen": 8
  },
  {
    "id": 10185,
    "koName": "빙큐보",
    "formType": "form",
    "formLabel": "나이스페이스",
    "types": [
      "얼음"
    ],
    "koFlavor": "더위에 약해서 얼굴을 언제나\n얼음으로 식히고 있다. 머리의 털을\n바다에 늘어뜨리고 먹이를 낚는다.",
    "gen": 8
  },
  {
    "id": 876,
    "koName": "에써르",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼",
      "노말"
    ],
    "koFlavor": "뿔로 가까이 있는 생명체의\n기분을 읽는다. 긍정적인\n감정이 힘의 원천이다.",
    "gen": 8
  },
  {
    "id": 877,
    "koName": "모르페코",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기",
      "악"
    ],
    "koFlavor": "아무리 먹어도 금방 배가 고프다.\n전기로 구운 씨앗을\n소중히 갖고 다닌다.",
    "gen": 8
  },
  {
    "id": 10187,
    "koName": "모르페코",
    "formType": "form",
    "formLabel": "배고픈모습",
    "types": [
      "전기",
      "악"
    ],
    "koFlavor": "아무리 먹어도 금방 배가 고프다.\n전기로 구운 씨앗을\n소중히 갖고 다닌다.",
    "gen": 8
  },
  {
    "id": 878,
    "koName": "끼리동",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철"
    ],
    "koFlavor": "힘쓰는 일에 강하다.\n동으로 된 몸체는 비에 녹슬어\n선명한 녹색으로 변한다.",
    "gen": 8
  },
  {
    "id": 879,
    "koName": "대왕끼리동",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철"
    ],
    "koFlavor": "무리를 지어 생활한다.\n코의 악력은 큰 바위도\n산산이 부술 정도로 강하다.",
    "gen": 8
  },
  {
    "id": 10224,
    "koName": "대왕끼리동",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "강철"
    ],
    "koFlavor": "무리를 지어 생활한다.\n코의 악력은 큰 바위도\n산산이 부술 정도로 강하다.",
    "gen": 8
  },
  {
    "id": 880,
    "koName": "파치래곤",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기",
      "드래곤"
    ],
    "koFlavor": "꼬리의 억센 근육으로\n발전한다. 하반신에 비해\n상반신이 너무 작다.",
    "gen": 8
  },
  {
    "id": 881,
    "koName": "파치르돈",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기",
      "얼음"
    ],
    "koFlavor": "고대의 해변에 살며 먹이를\n몸의 얼음으로 보존시켰지만\n움직임이 둔해 멸종하였다.",
    "gen": 8
  },
  {
    "id": 882,
    "koName": "어래곤",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "드래곤"
    ],
    "koFlavor": "특유의 다릿심으로 시속 60km\n이상으로 달릴 수 있지만\n물속에서만 호흡할 수 있다.",
    "gen": 8
  },
  {
    "id": 883,
    "koName": "어치르돈",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "얼음"
    ],
    "koFlavor": "어떤 공격에도 상처 입지 않는\n얼굴 가죽을 가졌지만 호흡이\n자유롭지 않았던 탓에 멸종하였다.",
    "gen": 8
  },
  {
    "id": 884,
    "koName": "두랄루돈",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철",
      "드래곤"
    ],
    "koFlavor": "금속으로 된 특수한 몸은\n가벼워서 몸놀림이 뛰어나다.\n비를 싫어해 동굴에 산다.",
    "gen": 8
  },
  {
    "id": 10225,
    "koName": "두랄루돈",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "강철",
      "드래곤"
    ],
    "koFlavor": "금속으로 된 특수한 몸은\n가벼워서 몸놀림이 뛰어나다.\n비를 싫어해 동굴에 산다.",
    "gen": 8
  },
  {
    "id": 885,
    "koName": "드라꼰",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤",
      "고스트"
    ],
    "koFlavor": "1마리로는 아이에게도 질 정도로\n힘이 약하지만 동료의 협력으로\n단련하고 진화하면 강해진다.",
    "gen": 8
  },
  {
    "id": 886,
    "koName": "드래런치",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤",
      "고스트"
    ],
    "koFlavor": "보살피는 드라꼰을 머리에\n태우지 않으면 진정하지 못하고\n다른 포켓몬을 태우려고 한다.",
    "gen": 8
  },
  {
    "id": 887,
    "koName": "드래펄트",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤",
      "고스트"
    ],
    "koFlavor": "뿔에 들어간 드라꼰은\n마하의 속도로 날려지기를\n기대하고 있는 것 같다.",
    "gen": 8
  },
  {
    "id": 888,
    "koName": "자시안",
    "formType": null,
    "formLabel": "",
    "types": [
      "페어리"
    ],
    "koFlavor": "오랜 세월 잠들어 있던\n자마젠타의 형제자매 또는\n라이벌로 불리는 포켓몬이다.",
    "gen": 8
  },
  {
    "id": 10188,
    "koName": "자시안",
    "formType": "form",
    "formLabel": "왕",
    "types": [
      "페어리",
      "강철"
    ],
    "koFlavor": "오랜 세월 잠들어 있던\n자마젠타의 형제자매 또는\n라이벌로 불리는 포켓몬이다.",
    "gen": 8
  },
  {
    "id": 889,
    "koName": "자마젠타",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투"
    ],
    "koFlavor": "석상 같은 모습으로\n잊혀질 정도의 세월 동안\n잠들어 있던 포켓몬이다.",
    "gen": 8
  },
  {
    "id": 10189,
    "koName": "자마젠타",
    "formType": "form",
    "formLabel": "왕",
    "types": [
      "격투",
      "강철"
    ],
    "koFlavor": "석상 같은 모습으로\n잊혀질 정도의 세월 동안\n잠들어 있던 포켓몬이다.",
    "gen": 8
  },
  {
    "id": 890,
    "koName": "무한다이노",
    "formType": null,
    "formLabel": "",
    "types": [
      "독",
      "드래곤"
    ],
    "koFlavor": "2만 년 전에 떨어진 운석\n안에 있었다. 다이맥스의\n수수께끼와 관련이 있는 듯하다.",
    "gen": 8
  },
  {
    "id": 10190,
    "koName": "무한다이노",
    "formType": "eternamax",
    "formLabel": "",
    "types": [
      "독",
      "드래곤"
    ],
    "koFlavor": "2만 년 전에 떨어진 운석\n안에 있었다. 다이맥스의\n수수께끼와 관련이 있는 듯하다.",
    "gen": 8
  },
  {
    "id": 891,
    "koName": "치고마",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투"
    ],
    "koFlavor": "머리의 하얗고 긴 털을\n잡아당기면 기세가 고조되어\n단전에서 파워가 끓어오른다.",
    "gen": 8
  },
  {
    "id": 892,
    "koName": "우라오스",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투",
      "악"
    ],
    "koFlavor": "먼 지방의 산악지대에 산다.\n낭떠러지 절벽을 달리며\n하체를 단련하고 기술을 연마한다.",
    "gen": 8
  },
  {
    "id": 10191,
    "koName": "우라오스",
    "formType": "form",
    "formLabel": "연격",
    "types": [
      "격투",
      "물"
    ],
    "koFlavor": "먼 지방의 산악지대에 산다.\n낭떠러지 절벽을 달리며\n하체를 단련하고 기술을 연마한다.",
    "gen": 8
  },
  {
    "id": 10226,
    "koName": "우라오스",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "격투",
      "악"
    ],
    "koFlavor": "먼 지방의 산악지대에 산다.\n낭떠러지 절벽을 달리며\n하체를 단련하고 기술을 연마한다.",
    "gen": 8
  },
  {
    "id": 10227,
    "koName": "우라오스",
    "formType": "gmax",
    "formLabel": "",
    "types": [
      "격투",
      "물"
    ],
    "koFlavor": "먼 지방의 산악지대에 산다.\n낭떠러지 절벽을 달리며\n하체를 단련하고 기술을 연마한다.",
    "gen": 8
  },
  {
    "id": 893,
    "koName": "자루도",
    "formType": null,
    "formLabel": "",
    "types": [
      "악",
      "풀"
    ],
    "koFlavor": "몸에 난 덩굴이 끊어지면\n토양에 영양분이 되어\n숲의 식물들을 성장시킨다.",
    "gen": 8
  },
  {
    "id": 894,
    "koName": "레지에레키",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "온몸이 전기 에너지를 만드는 기관이다.\n가라르 전 지역에서 사용하는 양의\n전기를 만들어 낼 수 있다.",
    "gen": 8
  },
  {
    "id": 895,
    "koName": "레지드래고",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤"
    ],
    "koFlavor": "온몸이 드래곤 에너지의\n결정체다. 모든 드래곤포켓몬의\n힘을 가지고 있는 듯하다.",
    "gen": 8
  },
  {
    "id": 896,
    "koName": "블리자포스",
    "formType": null,
    "formLabel": "",
    "types": [
      "얼음"
    ],
    "koFlavor": "굉장한 괴력을 가졌다.\n얼굴을 덮는 얼음 마스크는\n다이아몬드보다 100배 단단하다.",
    "gen": 8
  },
  {
    "id": 897,
    "koName": "레이스포스",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트"
    ],
    "koFlavor": "어두운 밤을 달리며 잠든 자의\n생명 에너지를 흡수한다.\n고독과 정적을 좋아한다.",
    "gen": 8
  },
  {
    "id": 898,
    "koName": "버드렉스",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼",
      "풀"
    ],
    "koFlavor": "먼 옛날 가라르를 지배했던\n전설의 왕. 마음을 치유하고\n초목을 싹 트게 하는 능력이 있다.",
    "gen": 8
  },
  {
    "id": 10193,
    "koName": "버드렉스",
    "formType": "form",
    "formLabel": "백마탈것",
    "types": [
      "에스퍼",
      "얼음"
    ],
    "koFlavor": "먼 옛날 가라르를 지배했던\n전설의 왕. 마음을 치유하고\n초목을 싹 트게 하는 능력이 있다.",
    "gen": 8
  },
  {
    "id": 10194,
    "koName": "버드렉스",
    "formType": "form",
    "formLabel": "흑마탈것",
    "types": [
      "에스퍼",
      "고스트"
    ],
    "koFlavor": "먼 옛날 가라르를 지배했던\n전설의 왕. 마음을 치유하고\n초목을 싹 트게 하는 능력이 있다.",
    "gen": 8
  },
  {
    "id": 899,
    "koName": "신비록",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "에스퍼"
    ],
    "koFlavor": "",
    "gen": 8
  },
  {
    "id": 900,
    "koName": "사마자르",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "바위"
    ],
    "koFlavor": "",
    "gen": 8
  },
  {
    "id": 901,
    "koName": "다투곰",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅",
      "노말"
    ],
    "koFlavor": "",
    "gen": 8
  },
  {
    "id": 10272,
    "koName": "다투곰",
    "formType": "form",
    "formLabel": "붉은달",
    "types": [
      "땅",
      "노말"
    ],
    "koFlavor": "",
    "gen": 8
  },
  {
    "id": 902,
    "koName": "대쓰여너",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "고스트"
    ],
    "koFlavor": "",
    "gen": 8
  },
  {
    "id": 903,
    "koName": "포푸니크",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투",
      "독"
    ],
    "koFlavor": "",
    "gen": 8
  },
  {
    "id": 904,
    "koName": "장침바루",
    "formType": null,
    "formLabel": "",
    "types": [
      "악",
      "독"
    ],
    "koFlavor": "",
    "gen": 8
  },
  {
    "id": 905,
    "koName": "러브로스",
    "formType": null,
    "formLabel": "",
    "types": [
      "페어리",
      "비행"
    ],
    "koFlavor": "",
    "gen": 8
  },
  {
    "id": 10249,
    "koName": "러브로스",
    "formType": "form",
    "formLabel": "영물",
    "types": [
      "페어리",
      "비행"
    ],
    "koFlavor": "",
    "gen": 8
  },
  {
    "id": 906,
    "koName": "나오하",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 907,
    "koName": "나로테",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 908,
    "koName": "마스카나",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "악"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 909,
    "koName": "뜨아거",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 910,
    "koName": "악뜨거",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 911,
    "koName": "라우드본",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃",
      "고스트"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 912,
    "koName": "꾸왁스",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 913,
    "koName": "아꾸왁",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 914,
    "koName": "웨이니발",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "격투"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 915,
    "koName": "맛보돈",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 916,
    "koName": "퍼퓨돈",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 917,
    "koName": "타랜툴라",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 918,
    "koName": "트래피더",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 919,
    "koName": "콩알뚜기",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 920,
    "koName": "엑스레그",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "악"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 921,
    "koName": "빠모",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 922,
    "koName": "빠모트",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기",
      "격투"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 923,
    "koName": "빠르모트",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기",
      "격투"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 924,
    "koName": "두리쥐",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 925,
    "koName": "파밀리쥐",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 926,
    "koName": "쫀도기",
    "formType": null,
    "formLabel": "",
    "types": [
      "페어리"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 927,
    "koName": "바우첼",
    "formType": null,
    "formLabel": "",
    "types": [
      "페어리"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 928,
    "koName": "미니브",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "노말"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 929,
    "koName": "올리뇨",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "노말"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 930,
    "koName": "올리르바",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "노말"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 931,
    "koName": "시비꼬",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "비행"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 932,
    "koName": "베베솔트",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 933,
    "koName": "스태솔트",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 934,
    "koName": "콜로솔트",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 935,
    "koName": "카르본",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 936,
    "koName": "카디나르마",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃",
      "에스퍼"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 937,
    "koName": "파라블레이즈",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃",
      "고스트"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 938,
    "koName": "빈나두",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 939,
    "koName": "찌리배리",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 940,
    "koName": "찌리비",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기",
      "비행"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 941,
    "koName": "찌리비크",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기",
      "비행"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 942,
    "koName": "오라티프",
    "formType": null,
    "formLabel": "",
    "types": [
      "악"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 943,
    "koName": "마피티프",
    "formType": null,
    "formLabel": "",
    "types": [
      "악"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 944,
    "koName": "땃쭈르",
    "formType": null,
    "formLabel": "",
    "types": [
      "독",
      "노말"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 945,
    "koName": "태깅구르",
    "formType": null,
    "formLabel": "",
    "types": [
      "독",
      "노말"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 946,
    "koName": "그푸리",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "고스트"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 947,
    "koName": "공푸리",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "고스트"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 948,
    "koName": "들눈해",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅",
      "풀"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 949,
    "koName": "육파리",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅",
      "풀"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 950,
    "koName": "절벼게",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 951,
    "koName": "캡싸이",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 952,
    "koName": "스코빌런",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "불꽃"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 10320,
    "koName": "스코빌런",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "풀",
      "불꽃"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 953,
    "koName": "구르데",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 954,
    "koName": "베라카스",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "에스퍼"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 955,
    "koName": "하느라기",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 956,
    "koName": "클레스퍼트라",
    "formType": null,
    "formLabel": "",
    "types": [
      "에스퍼"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 957,
    "koName": "어리짱",
    "formType": null,
    "formLabel": "",
    "types": [
      "페어리",
      "강철"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 958,
    "koName": "벼리짱",
    "formType": null,
    "formLabel": "",
    "types": [
      "페어리",
      "강철"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 959,
    "koName": "두드리짱",
    "formType": null,
    "formLabel": "",
    "types": [
      "페어리",
      "강철"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 960,
    "koName": "바다그다",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 961,
    "koName": "바닥트리오",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 962,
    "koName": "떨구새",
    "formType": null,
    "formLabel": "",
    "types": [
      "비행",
      "악"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 963,
    "koName": "맨돌핀",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 964,
    "koName": "돌핀맨",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 965,
    "koName": "부르롱",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철",
      "독"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 966,
    "koName": "부르르룸",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철",
      "독"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 967,
    "koName": "모토마",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤",
      "노말"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 968,
    "koName": "꿈트렁",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 969,
    "koName": "초롱순",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "독"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 970,
    "koName": "킬라플로르",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "독"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 10321,
    "koName": "킬라플로르",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "바위",
      "독"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 971,
    "koName": "망망이",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 972,
    "koName": "묘두기",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 973,
    "koName": "꼬이밍고",
    "formType": null,
    "formLabel": "",
    "types": [
      "비행",
      "격투"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 974,
    "koName": "터벅고래",
    "formType": null,
    "formLabel": "",
    "types": [
      "얼음"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 975,
    "koName": "우락고래",
    "formType": null,
    "formLabel": "",
    "types": [
      "얼음"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 976,
    "koName": "가비루사",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "에스퍼"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 977,
    "koName": "어써러셔",
    "formType": null,
    "formLabel": "",
    "types": [
      "물"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 978,
    "koName": "싸리용",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤",
      "물"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 979,
    "koName": "저승갓숭",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투",
      "고스트"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 980,
    "koName": "토오",
    "formType": null,
    "formLabel": "",
    "types": [
      "독",
      "땅"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 981,
    "koName": "키키링",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말",
      "에스퍼"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 982,
    "koName": "노고고치",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 983,
    "koName": "대도각참",
    "formType": null,
    "formLabel": "",
    "types": [
      "악",
      "강철"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 984,
    "koName": "위대한엄니",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅",
      "격투"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 985,
    "koName": "우렁찬꼬리",
    "formType": null,
    "formLabel": "",
    "types": [
      "페어리",
      "에스퍼"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 986,
    "koName": "사나운버섯",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "악"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 987,
    "koName": "날개치는머리",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트",
      "페어리"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 988,
    "koName": "땅을기는날개",
    "formType": null,
    "formLabel": "",
    "types": [
      "벌레",
      "격투"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 989,
    "koName": "모래털가죽",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기",
      "땅"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 990,
    "koName": "무쇠바퀴",
    "formType": null,
    "formLabel": "",
    "types": [
      "땅",
      "강철"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 991,
    "koName": "무쇠보따리",
    "formType": null,
    "formLabel": "",
    "types": [
      "얼음",
      "물"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 992,
    "koName": "무쇠손",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투",
      "전기"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 993,
    "koName": "무쇠머리",
    "formType": null,
    "formLabel": "",
    "types": [
      "악",
      "비행"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 994,
    "koName": "무쇠독나방",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃",
      "독"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 995,
    "koName": "무쇠가시",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "전기"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 996,
    "koName": "드니차",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤",
      "얼음"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 997,
    "koName": "드니꽁",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤",
      "얼음"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 998,
    "koName": "드닐레이브",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤",
      "얼음"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 10325,
    "koName": "드닐레이브",
    "formType": "mega",
    "formLabel": "",
    "types": [
      "드래곤",
      "얼음"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 999,
    "koName": "모으령",
    "formType": null,
    "formLabel": "",
    "types": [
      "고스트"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 1000,
    "koName": "타부자고",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철",
      "고스트"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 1001,
    "koName": "총지엔",
    "formType": null,
    "formLabel": "",
    "types": [
      "악",
      "풀"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 1002,
    "koName": "파오젠",
    "formType": null,
    "formLabel": "",
    "types": [
      "악",
      "얼음"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 1003,
    "koName": "딩루",
    "formType": null,
    "formLabel": "",
    "types": [
      "악",
      "땅"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 1004,
    "koName": "위유이",
    "formType": null,
    "formLabel": "",
    "types": [
      "악",
      "불꽃"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 1005,
    "koName": "고동치는달",
    "formType": null,
    "formLabel": "",
    "types": [
      "드래곤",
      "악"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 1006,
    "koName": "무쇠무인",
    "formType": null,
    "formLabel": "",
    "types": [
      "페어리",
      "격투"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 1007,
    "koName": "코라이돈",
    "formType": null,
    "formLabel": "",
    "types": [
      "격투",
      "드래곤"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 1008,
    "koName": "미라이돈",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기",
      "드래곤"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 1009,
    "koName": "굽이치는물결",
    "formType": null,
    "formLabel": "",
    "types": [
      "물",
      "드래곤"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 1010,
    "koName": "무쇠잎새",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "에스퍼"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 1011,
    "koName": "과미르",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "드래곤"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 1012,
    "koName": "차데스",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "고스트"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 1013,
    "koName": "그우린차",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "고스트"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 1014,
    "koName": "조타구",
    "formType": null,
    "formLabel": "",
    "types": [
      "독",
      "격투"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 1015,
    "koName": "이야후",
    "formType": null,
    "formLabel": "",
    "types": [
      "독",
      "에스퍼"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 1016,
    "koName": "기로치",
    "formType": null,
    "formLabel": "",
    "types": [
      "독",
      "페어리"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 1017,
    "koName": "오거폰",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 10273,
    "koName": "오거폰",
    "formType": "form",
    "formLabel": "우물의가면",
    "types": [
      "풀",
      "물"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 10274,
    "koName": "오거폰",
    "formType": "form",
    "formLabel": "화덕의가면",
    "types": [
      "풀",
      "불꽃"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 10275,
    "koName": "오거폰",
    "formType": "form",
    "formLabel": "주춧돌의가면",
    "types": [
      "풀",
      "바위"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 1018,
    "koName": "브리두라스",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철",
      "드래곤"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 1019,
    "koName": "과미드라",
    "formType": null,
    "formLabel": "",
    "types": [
      "풀",
      "드래곤"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 1020,
    "koName": "꿰뚫는화염",
    "formType": null,
    "formLabel": "",
    "types": [
      "불꽃",
      "드래곤"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 1021,
    "koName": "날뛰는우레",
    "formType": null,
    "formLabel": "",
    "types": [
      "전기",
      "드래곤"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 1022,
    "koName": "무쇠암석",
    "formType": null,
    "formLabel": "",
    "types": [
      "바위",
      "에스퍼"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 1023,
    "koName": "무쇠감투",
    "formType": null,
    "formLabel": "",
    "types": [
      "강철",
      "에스퍼"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 1024,
    "koName": "테라파고스",
    "formType": null,
    "formLabel": "",
    "types": [
      "노말"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 10276,
    "koName": "테라파고스",
    "formType": "form",
    "formLabel": "테라스탈",
    "types": [
      "노말"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 10277,
    "koName": "테라파고스",
    "formType": "form",
    "formLabel": "스텔라",
    "types": [
      "노말"
    ],
    "koFlavor": "",
    "gen": 9
  },
  {
    "id": 1025,
    "koName": "복숭악동",
    "formType": null,
    "formLabel": "",
    "types": [
      "독",
      "고스트"
    ],
    "koFlavor": "",
    "gen": 9
  }
];