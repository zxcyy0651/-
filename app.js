// 로그인 체크
checkLogin();
updateHeader();

const movies = [
  {
    id: 1,
    title:"인터스텔라", 
    rate:4.9, 
    desc:"우주 생존을 건 인류의 마지막 미션", 
    img:"images/m1.jpg", 
    type:"movie", 
    genre:"SF", 
    trailer:"d2VN6NNa9BE",
    year: 2014,
    runtime: "169분",
    director: "크리스토퍼 놀란",
    cast: "매튜 매커너히, 앤 해서웨이, 제시카 차스테인",
    plot: "환경 재앙으로 인류가 멸망 위기에 처한 미래. NASA는 새로운 행성을 찾기 위해 극비 우주 탐사 프로젝트를 진행한다. 전직 우주비행사 쿠퍼는 인류를 구하기 위해 우주로 떠나지만, 시간과 중력의 법칙이 왜곡되는 블랙홀 근처에서 예상치 못한 상황과 마주하게 된다. 5차원 공간에서 과거와 소통하며 인류의 미래를 구하려는 감동적인 SF 대서사시.",
    defaultComments: [
      {user: "우주덕후", text: "인생 영화... 블랙홀 장면에서 소름 돋았어요 🌌", likes: 45, dislikes: 2},
      {user: "SF마니아", text: "과학적 고증이 대박이에요. 킵 손 교수님 감수 레전드", likes: 38, dislikes: 1},
      {user: "눈물바다", text: "딸과의 이별 장면에서 펑펑 울었습니다 ㅠㅠ", likes: 52, dislikes: 0},
      {user: "놀란광", text: "크리스토퍼 놀란 작품 중 최고봉! 음악도 완벽", likes: 41, dislikes: 3},
      {user: "재관람러", text: "벌써 5번째 보는 중... 볼 때마다 새롭네요", likes: 29, dislikes: 1}
    ]
  },
  {
    id: 2,
    title:"인셉션", 
    rate:4.8, 
    desc:"꿈 속 작전", 
    img:"images/m2.jpg", 
    type:"movie", 
    genre:"SF", 
    trailer:"EiFcZjhmFDA",
    year: 2010,
    runtime: "148분",
    director: "크리스토퍼 놀란",
    cast: "레오나르도 디카프리오, 와타나베 켄, 조셉 고든-레빗",
    plot: "타인의 꿈에 침투해 생각을 빼내는 특수 요원 코브. 그에게 생각을 '훔치는' 대신 '심는' 불가능한 임무인 '인셉션'이 주어진다. 꿈 속의 꿈, 그 깊은 곳으로 들어가는 위험한 작전이 시작되고, 현실과 꿈의 경계가 무너지기 시작한다. 과연 그는 현실로 돌아올 수 있을까?",
    defaultComments: [
      {user: "꿈해몽", text: "팽이가 멈췄을까 안 멈췄을까... 아직도 궁금 😵", likes: 67, dislikes: 4},
      {user: "액션매니아", text: "무중력 복도 싸움 장면 진짜 미쳤다", likes: 55, dislikes: 1},
      {user: "디카프리오팬", text: "레오나르도 연기 소름... 이 영화로 입덕", likes: 43, dislikes: 2},
      {user: "복잡해", text: "3번 봐야 이해되는 영화 ㅋㅋ 그래도 재밌음", likes: 38, dislikes: 5},
      {user: "OST러버", text: "Time 음악 들으면 아직도 전율", likes: 51, dislikes: 0}
    ]
  },
  {
    id: 3,
    title:"듄", 
    rate:4.7, 
    desc:"사막 행성 전쟁", 
    img:"images/m3.jpg", 
    type:"movie", 
    genre:"SF", 
    trailer:"VXjGcWq6VnM",
    year: 2021,
    runtime: "155분",
    director: "드니 빌뇌브",
    cast: "티모시 샬라메, 젠데이아, 레베카 퍼거슨",
    plot: "우주에서 가장 귀한 자원 '스파이스'가 생산되는 사막 행성 아라키스. 황제의 명령으로 이곳을 관리하게 된 아트레이데스 가문의 후계자 폴은 배신으로 모든 것을 잃는다. 원주민 프레멘과 함께하며 자신의 운명과 우주의 미래를 마주하게 되는 장대한 여정이 펼쳐진다.",
    defaultComments: [
      {user: "사막러버", text: "영상미 진짜 미쳤다... IMAX로 봐야 함", likes: 72, dislikes: 3},
      {user: "원작팬", text: "소설 읽고 봤는데 완벽한 영상화!", likes: 58, dislikes: 2},
      {user: "음악광", text: "한스 짐머 음악 듣고 기절... 너무 웅장해", likes: 49, dislikes: 1},
      {user: "속편기다림", text: "듄2 언제 나와요ㅠㅠ 기다리다 죽을듯", likes: 61, dislikes: 0},
      {user: "티모시팬", text: "티모시 샬라메 연기 미쳤고 비주얼도 미쳤다", likes: 44, dislikes: 5}
    ]
  },
  {
    id: 4,
    title:"아바타", 
    rate:4.8, 
    desc:"판도라 행성", 
    img:"images/m4.jpg", 
    type:"movie", 
    genre:"SF", 
    trailer:"e7wrqBT-WLQ",
    year: 2009,
    runtime: "162분",
    director: "제임스 카메론",
    cast: "샘 워싱턴, 조이 샐다나, 시고니 위버",
    plot: "자원 채굴을 위해 판도라 행성에 온 인간들. 하반신 마비인 전직 해병대원 제이크는 아바타 프로그램을 통해 원주민 나비족의 몸으로 활동하게 된다. 나비족 공주 네이티리와 사랑에 빠진 제이크는 인간과 나비족 사이에서 선택의 기로에 서게 된다. 숨막히는 영상미와 감동적인 스토리.",
    defaultComments: [
      {user: "3D최고", text: "3D 영화의 레전드... 극장에서 10번 봤어요", likes: 89, dislikes: 4},
      {user: "판도라가고싶다", text: "판도라 행성 진짜 가보고 싶다 ㅠㅠ 너무 아름다워", likes: 76, dislikes: 2},
      {user: "환경주의자", text: "자연 보호 메시지가 너무 좋았어요", likes: 54, dislikes: 8},
      {user: "나비어배우기", text: "나비어 대사 다 외웠다 ㅋㅋ", likes: 42, dislikes: 3},
      {user: "속편대기", text: "아바타2 물의 길도 최고였어요! 3편 기대", likes: 67, dislikes: 5}
    ]
  },
  {
    id: 5,
    title:"매트릭스", 
    rate:4.9, 
    desc:"가상현실 탈출", 
    img:"images/m5.jpg", 
    type:"movie", 
    genre:"SF", 
    trailer:"C3HMidalbko",
    year: 1999,
    runtime: "136분",
    director: "워쇼스키 자매",
    cast: "키아누 리브스, 로렌스 피시번, 캐리 앤 모스",
    plot: "평범한 회사원 네오는 해커 모피어스를 만나 충격적인 진실을 알게 된다. 현실이라 믿었던 세계는 기계가 만든 가상현실 '매트릭스'였던 것. 인류를 구할 구세주로 지목된 네오는 요원 스미스와 대결하며 진정한 현실을 찾기 위한 여정을 시작한다. 혁명적인 액션과 철학적 주제.",
    defaultComments: [
      {user: "빨간약", text: "빨간 알약 먹을래요? 파란 알약? 인생 명대사", likes: 95, dislikes: 2},
      {user: "액션덕후", text: "총알 피하는 장면 CGI 혁명이었지... 지금 봐도 멋짐", likes: 82, dislikes: 1},
      {user: "철학도", text: "철학적 의미가 깊은 영화... 논문 쓸 수 있을듯", likes: 61, dislikes: 7},
      {user: "키아누러브", text: "키아누 리브스 이 영화 때문에 팬됨", likes: 73, dislikes: 3},
      {user: "90년대감성", text: "1999년에 이런 영화를... 진짜 천재들", likes: 88, dislikes: 1}
    ]
  },
  {
    id: 6,
    title:"설국열차", 
    rate:4.2, 
    desc:"빙하기 계급", 
    img:"images/m6.jpg", 
    type:"movie", 
    genre:"액션", 
    trailer:"xVh3bh0N68Q",
    year: 2013,
    runtime: "126분",
    director: "봉준호",
    cast: "크리스 에반스, 송강호, 틸다 스윈튼",
    plot: "지구 온난화를 막으려던 실험이 실패하며 빙하기가 찾아온 세계. 살아남은 인류는 끊임없이 달리는 열차 안에서 살아간다. 꼬리칸의 하층민들과 앞칸의 상류층으로 나뉜 열차 안, 커티스는 혁명을 일으켜 엔진실을 향해 나아간다. 계급 사회를 비판한 강렬한 메시지.",
    defaultComments: [
      {user: "봉준호최고", text: "한국 감독이 할리우드 배우들과... 자랑스럽다", likes: 58, dislikes: 2},
      {user: "사회비판", text: "계급 사회 풍자가 소름돋아요", likes: 47, dislikes: 5},
      {user: "송강호팬", text: "송강호 연기 진짜 미쳤다 ㅋㅋㅋ", likes: 52, dislikes: 1},
      {user: "액션좋아", text: "열차 칸마다 넘어갈 때 긴장감 오짐", likes: 41, dislikes: 3},
      {user: "엔딩충격", text: "결말 보고 며칠 동안 생각났어요", likes: 38, dislikes: 6}
    ]
  },
  {
    id: 7,
    title:"컨택트", 
    rate:4.4, 
    desc:"외계 언어", 
    img:"images/m7.jpg", 
    type:"movie", 
    genre:"SF", 
    trailer:"MwH_ebYprKs",
    year: 2016,
    runtime: "116분",
    director: "드니 빌뇌브",
    cast: "에이미 애덤스, 제레미 레너, 포레스트 휘태커",
    plot: "정체불명의 외계 우주선이 지구 곳곳에 나타난다. 언어학자 루이스는 외계인과 소통하기 위해 그들의 언어를 배우기 시작한다. 그러나 그들의 언어를 이해할수록 시간을 인식하는 방식이 바뀌고, 자신의 미래를 보게 되는 놀라운 경험을 하게 된다. 지적이고 감성적인 SF 걸작.",
    defaultComments: [
      {user: "언어학도", text: "언어학 전공자로서 이 영화 너무 좋아요", likes: 44, dislikes: 1},
      {user: "눈물주의", text: "딸 이야기 나오는 부분 눈물 펑펑 ㅠㅠ", likes: 56, dislikes: 2},
      {user: "SF지적", text: "외계인이 침략 안 하는 SF 너무 좋다", likes: 49, dislikes: 3},
      {user: "에이미팬", text: "에이미 애덤스 연기 진짜 최고... 오스카감", likes: 38, dislikes: 0},
      {user: "다시보기", text: "반전 알고 다시 보면 더 슬퍼요", likes: 51, dislikes: 1}
    ]
  },
  {
    id: 8,
    title:"블레이드러너", 
    rate:4.5, 
    desc:"복제인간", 
    img:"images/m8.jpg", 
    type:"movie", 
    genre:"SF", 
    trailer:"EvNrUpVZgIE",
    year: 1982,
    runtime: "117분",
    director: "리들리 스콧",
    cast: "해리슨 포드, 루트거 하우어, 숀 영",
    plot: "2019년 로스앤젤레스. 복제인간 '레플리칸트'를 추적하는 블레이드 러너 데커드는 탈주한 레플리칸트들을 제거하라는 임무를 받는다. 그러나 그들을 쫓으며 인간과 복제인간의 경계, 삶과 죽음의 의미에 대해 고민하게 된다. SF 누아르의 고전이자 시각적 걸작.",
    defaultComments: [
      {user: "고전명작", text: "1982년 영화라고? 지금 봐도 영상미 미쳤다", likes: 71, dislikes: 2},
      {user: "철학적SF", text: "인간이란 무엇인가... 깊은 질문을 던지는 영화", likes: 58, dislikes: 4},
      {user: "음악좋아", text: "반젤리스 음악 너무 몽환적이고 좋아요", likes: 47, dislikes: 1},
      {user: "속편도봄", text: "블레이드러너 2049도 명작!", likes: 52, dislikes: 3},
      {user: "느와르감성", text: "사이버펑크 느와르의 시조... 레전드", likes: 63, dislikes: 2}
    ]
  },
  {
    id: 9,
    title:"월-E", 
    rate:4.6, 
    desc:"로봇 사랑", 
    img:"images/m9.jpg", 
    type:"movie", 
    genre:"애니", 
    trailer:"oY_arXYUl-k",
    year: 2008,
    runtime: "98분",
    director: "앤드류 스탠턴",
    cast: "벤 버트, 엘리사 나이트(성우)",
    plot: "쓰레기로 뒤덮인 지구에 홀로 남겨진 청소 로봇 월-E. 700년 동안 외롭게 쓰레기를 정리하던 그는 우주에서 온 탐사 로봇 이브를 만나 사랑에 빠진다. 이브를 따라 우주로 떠난 월-E는 인류를 지구로 돌려보내기 위한 모험을 시작한다. 대사 없이도 감동을 전하는 픽사의 명작.",
    defaultComments: [
      {user: "픽사러버", text: "픽사 작품 중 최고봉이에요... 대사 없이 감동", likes: 82, dislikes: 1},
      {user: "로봇귀여워", text: "월-E 너무 귀엽다 ㅠㅠ 로봇인데 감정 전달 완벽", likes: 76, dislikes: 0},
      {user: "환경메시지", text: "환경 파괴 경고 메시지가 무겁네요", likes: 54, dislikes: 3},
      {user: "가족영화", text: "아이들과 함께 보기 최고! 교훈도 있고", likes: 61, dislikes: 2},
      {user: "음악감동", text: "우주 춤추는 장면에서 울었어요", likes: 69, dislikes: 1}
    ]
  },
  {
    id: 10,
    title:"터미네이터", 
    rate:4.3, 
    desc:"미래 전쟁", 
    img:"images/m10.jpg", 
    type:"movie", 
    genre:"액션", 
    trailer:"c8TBokRJrA8",
    year: 1984,
    runtime: "107분",
    director: "제임스 카메론",
    cast: "아놀드 슈워제네거, 린다 해밀턴, 마이클 빈",
    plot: "인공지능 스카이넷이 지배하는 2029년 미래. 인류 저항군의 리더가 될 존 코너를 제거하기 위해 터미네이터가 1984년으로 시간여행한다. 미래에서 온 전사 카일 리스는 존의 어머니 사라 코너를 지키기 위해 목숨을 건 전투를 벌인다. SF 액션의 전설적인 시작.",
    defaultComments: [
      {user: "아놀드팬", text: "I'll be back 명대사 레전드", likes: 88, dislikes: 2},
      {user: "80년대명작", text: "1984년 영화인데 지금 봐도 재밌어요!", likes: 72, dislikes: 3},
      {user: "액션최고", text: "추격 장면들 진짜 손에 땀 쥐게 만듦", likes: 59, dislikes: 1},
      {user: "시리즈팬", text: "터미네이터 2도 꼭 보세요! 더 재밌음", likes: 65, dislikes: 4},
      {user: "AI경고", text: "AI의 위험성을 경고한 선구자적 영화", likes: 51, dislikes: 6}
    ]
  },
  {
    id: 11,
    title:"스타워즈", 
    rate:4.7, 
    desc:"포스 전쟁", 
    img:"images/m11.jpg", 
    type:"series", 
    genre:"SF", 
    trailer:"Nl92ktYbbDA",
    year: 1977,
    runtime: "121분",
    director: "조지 루카스",
    cast: "마크 해밀, 해리슨 포드, 캐리 피셔",
    plot: "먼 은하계, 사악한 은하 제국이 반란군을 탄압하고 있다. 농장 청년 루크 스카이워커는 제다이 기사 오비완 케노비를 만나 포스를 배우고 우주의 운명을 바꿀 여정을 시작한다. 레아 공주를 구하고 데스스타를 파괴하기 위한 반란군의 전투가 펼쳐진다. 전설적인 스페이스 오페라.",
    defaultComments: [
      {user: "포스유저", text: "May the Force be with you 🙏", likes: 104, dislikes: 1},
      {user: "올드팬", text: "1977년부터 지금까지 팬입니다... 전설", likes: 92, dislikes: 2},
      {user: "라이트세이버", text: "라이트세이버 갖고 싶다 ㅠㅠ", likes: 78, dislikes: 3},
      {user: "시리즈추천", text: "에피소드 5 제국의 역습이 최고봉!", likes: 85, dislikes: 5},
      {user: "문화아이콘", text: "SF 문화를 바꾼 영화... 모든 것이 레전드", likes: 97, dislikes: 0}
    ]
  },
  {
    id: 12,
    title:"기묘한이야기", 
    rate:4.6, 
    desc:"초자연적 사건", 
    img:"images/m12.jpg", 
    type:"series", 
    genre:"스릴러", 
    trailer:"N8CvVBTStXc",
    year: 2016,
    runtime: "시즌당 8-9화",
    director: "더퍼 브라더스",
    cast: "밀리 바비 브라운, 피넌 울프하드, 위노나 라이더",
    plot: "1980년대 작은 마을 호킨스. 소년 윌이 실종되고 그의 친구들은 엘이라는 초능력 소녀를 만난다. 정부 실험실의 비밀과 뒤집힌세계라는 평행차원이 드러나며 아이들은 괴물과 맞서 싸운다. 향수를 자극하는 80년대 감성과 스릴 넘치는 스토리.",
    defaultComments: [
      {user: "80년대러버", text: "80년대 감성 미쳤다... 너무 좋아 ㅠㅠ", likes: 87, dislikes: 2},
      {user: "엘팬", text: "밀리 바비 브라운 연기 천재 아니냐고", likes: 94, dislikes: 1},
      {user: "공포주의", text: "데모고르곤 나올 때마다 소름 ㄷㄷ", likes: 68, dislikes: 4},
      {user: "OST최고", text: "신스웨이브 음악 듣고 80년대 빠짐", likes: 73, dislikes: 2},
      {user: "시즌5기대", text: "시즌5 완결편 기다리는 중... 제발 명작으로", likes: 81, dislikes: 3}
    ]
  },
  {
    id: 13,
    title:"블랙미러", 
    rate:4.5, 
    desc:"기술 디스토피아", 
    img:"images/m13.jpg", 
    type:"series", 
    genre:"SF", 
    trailer:"A-jNNZ3mj1U",
    year: 2011,
    runtime: "에피소드당 45-90분",
    director: "찰리 브루커",
    cast: "옴니버스 형식",
    plot: "기술이 가져올 수 있는 어두운 미래를 그린 SF 앤솔로지 시리즈. 각 에피소드는 독립적인 이야기로, SNS 평점제 사회, 의식 복제, 가상현실 등 기술의 발전이 인간성에 미치는 영향을 날카롭게 풍자한다. 충격적이고 생각할 거리를 던지는 현대 SF의 걸작.",
    defaultComments: [
      {user: "충격받음", text: "매 에피소드마다 충격... 현실이 될까봐 무섭다", likes: 96, dislikes: 3},
      {user: "산주니페로", text: "산 주니페로 에피소드 인생작... 눈물 펑펑", likes: 102, dislikes: 1},
      {user: "기술비판", text: "기술 발전의 어두운 면을 너무 잘 표현함", likes: 78, dislikes: 5},
      {user: "혼자보기무서워", text: "밤에 혼자 보다가 잠 못잤어요 ㅋㅋ", likes: 64, dislikes: 2},
      {user: "추천에피", text: "화이트 크리스마스, USS 콜리스터 강추!", likes: 85, dislikes: 4}
    ]
  },
  {
    id: 14,
    title:"더문", 
    rate:4.0, 
    desc:"달 생존", 
    img:"images/m14.jpg", 
    type:"movie", 
    genre:"SF", 
    trailer:"5O3g8nwlXHo",
    year: 2009,
    runtime: "97분",
    director: "던칸 존스",
    cast: "샘 록웰, 케빈 스페이시(목소리)",
    plot: "달 기지에서 3년간 홀로 자원 채굴 작업을 하는 샘 벨. 지구 귀환을 2주 앞둔 어느 날, 사고를 당한 그는 자신과 똑같은 또 다른 사람을 발견한다. 고독과 정체성에 대한 질문을 던지는 철학적 SF. 저예산으로 만든 숨겨진 명작.",
    defaultComments: [
      {user: "저예산명작", text: "500만 달러로 이런 영화를... 대단하다", likes: 53, dislikes: 2},
      {user: "샘록웰팬", text: "샘 록웰 1인 2역 연기 미쳤어요", likes: 48, dislikes: 1},
      {user: "고독한영화", text: "고독함이 느껴지는 영화... 쓸쓸해", likes: 41, dislikes: 3},
      {user: "반전충격", text: "반전 보고 입 떡 벌어짐", likes: 56, dislikes: 4},
      {user: "철학적", text: "정체성에 대해 생각하게 만드는 영화", likes: 44, dislikes: 2}
    ]
  },
  {
    id: 15,
    title:"테넷", 
    rate:4.1, 
    desc:"시간 반전", 
    img:"images/m15.jpg", 
    type:"movie", 
    genre:"SF", 
    trailer:"IW_khaePCBE",
    year: 2020,
    runtime: "150분",
    director: "크리스토퍼 놀란",
    cast: "존 데이비드 워싱턴, 로버트 패틴슨, 엘리자베스 데비키",
    plot: "시간을 역행할 수 있는 물질이 발견되고, 이를 이용한 제3차 세계대전의 위협이 다가온다. 요원 '주인공'은 시간을 거슬러 올라가는 '인버전' 기술을 이용해 세계를 구하기 위한 임무에 뛰어든다. 순행과 역행이 동시에 펼쳐지는 놀란의 야심작.",
    defaultComments: [
      {user: "어렵다", text: "3번 봐도 이해 안 됨 ㅋㅋ 그래도 멋있어", likes: 72, dislikes: 8},
      {user: "액션미쳤다", text: "시간 역행 액션 진짜 독창적!", likes: 65, dislikes: 3},
      {user: "음향최고", text: "극장에서 IMAX로 봐야 함... 음향 쾌감", likes: 58, dislikes: 2},
      {user: "놀란매니아", text: "놀란 감독님 천재... 이해 못해도 재밌어", likes: 61, dislikes: 5},
      {user: "해석영상", text: "유튜브 해석 영상 보고 다시 봤더니 이해됨!", likes: 54, dislikes: 4}
    ]
  }
];

const grid = document.getElementById("grid");
const modal = document.getElementById("modal");
const trailerContainer = document.getElementById("trailer-container");
const trailerIframe = document.getElementById("trailer-iframe");
let currentMovie = null;
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// 댓글 데이터 초기화
function initComments() {
  let allComments = JSON.parse(localStorage.getItem("movieComments")) || {};
  
  movies.forEach(movie => {
    if(!allComments[movie.id]) {
      allComments[movie.id] = movie.defaultComments.map((comment, index) => ({
        id: Date.now() + index,
        user: comment.user,
        text: comment.text,
        likes: comment.likes,
        dislikes: comment.dislikes,
        userLiked: false,
        userDisliked: false
      }));
    }
  });
  
  localStorage.setItem("movieComments", JSON.stringify(allComments));
  return allComments;
}

let movieComments = initComments();

// 렌더링 함수
function render(list){
  grid.innerHTML = "";
  
  if(list.length === 0) {
    grid.innerHTML = '<div class="empty-message">검색 결과가 없습니다 😢</div>';
    return;
  }
  
  list.forEach(m=>{
    const d = document.createElement("div");
    d.className = "card";
    d.style.backgroundImage = `url(${m.img})`;
    
    const genreBadge = `<div class="genre-badge">${m.genre}</div>`;
    const isLiked = favorites.some(fav => fav.title === m.title);
    const likeBadge = isLiked ? '<div class="like-badge">❤️</div>' : '';
    
    d.innerHTML = `
      ${genreBadge}
      ${likeBadge}
      <div class="hover-info">
        ${m.title}<br>
        ⭐ ${m.rate}<br>
        <small>${m.genre}</small>
      </div>
    `;
    
    d.onclick = ()=>openDetail(m);
    grid.appendChild(d);
  });
}

// 상세보기
function openDetail(m){
  currentMovie = m;
  modal.style.display="flex";
  document.getElementById("detail-img").src=m.img;
  document.getElementById("detail-title").innerText=m.title;
  document.getElementById("detail-genre").innerText=m.genre;
  document.getElementById("detail-rate").innerText=m.rate;
  
  document.getElementById("detail-year").innerText=m.year || "정보 없음";
  document.getElementById("detail-runtime").innerText=m.runtime || "정보 없음";
  document.getElementById("detail-director").innerText=m.director || "정보 없음";
  document.getElementById("detail-cast").innerText=m.cast || "정보 없음";
  document.getElementById("detail-plot").innerText=m.plot || "줄거리 정보가 없습니다.";
  
  trailerContainer.classList.remove("show");
  trailerIframe.src = "";
  
  const likeBtn = document.getElementById("likeBtn");
  const isLiked = favorites.some(fav => fav.title === m.title);
  
  if(isLiked) {
    likeBtn.innerText = "💔 찜 해제";
    likeBtn.classList.add("liked");
  } else {
    likeBtn.innerText = "❤️ 찜하기";
    likeBtn.classList.remove("liked");
  }
  
  // 관련 영화 추천
  renderRecommendations(m);
  
  // 댓글 렌더링
  renderComments(m.id);
  
  addMileage(10, '영화 탐색');
  updateStats('movie');
}

// 관련 영화 추천
function renderRecommendations(currentMovie) {
  const recommendList = document.getElementById("recommend-list");
  recommendList.innerHTML = "";
  
  // 같은 장르 영화 필터링 (현재 영화 제외)
  const sameGenre = movies.filter(m => 
    m.genre === currentMovie.genre && m.id !== currentMovie.id
  );
  
  // 랜덤으로 3개 선택
  const shuffled = sameGenre.sort(() => 0.5 - Math.random());
  const recommendations = shuffled.slice(0, 3);
  
  if(recommendations.length === 0) {
    recommendList.innerHTML = '<p style="text-align:center; color:#666;">추천할 영화가 없습니다</p>';
    return;
  }
  
  recommendations.forEach(movie => {
    const card = document.createElement("div");
    card.className = "recommend-card";
    card.style.backgroundImage = `url(${movie.img})`;
    card.onclick = () => {
      closeModal();
      setTimeout(() => openDetail(movie), 100);
    };
    
    card.innerHTML = `
      <div class="recommend-overlay">
        <h4>${movie.title}</h4>
        <p>⭐ ${movie.rate}</p>
      </div>
    `;
    
    recommendList.appendChild(card);
  });
}

// 댓글 렌더링
function renderComments(movieId) {
  const commentList = document.getElementById("comment-list");
  commentList.innerHTML = "";
  
  const comments = movieComments[movieId] || [];
  
  if(comments.length === 0) {
    commentList.innerHTML = '<p class="no-comments">아직 댓글이 없습니다. 첫 댓글을 작성해보세요!</p>';
    return;
  }
  
  comments.forEach(comment => {
    const div = document.createElement("div");
    div.className = "comment-item";
    
    const likedClass = comment.userLiked ? 'active' : '';
    const dislikedClass = comment.userDisliked ? 'active' : '';
    
    div.innerHTML = `
      <div class="comment-header">
        <strong>${comment.user}</strong>
      </div>
      <p class="comment-text">${comment.text}</p>
      <div class="comment-actions">
        <button class="like-btn ${likedClass}" onclick="likeComment(${movieId}, ${comment.id})">
          👍 <span>${comment.likes}</span>
        </button>
        <button class="dislike-btn ${dislikedClass}" onclick="dislikeComment(${movieId}, ${comment.id})">
          👎 <span>${comment.dislikes}</span>
        </button>
      </div>
    `;
    
    commentList.appendChild(div);
  });
}

// 댓글 작성
function addComment() {
  const input = document.getElementById("comment-input");
  const text = input.value.trim();
  
  if(!text) {
    alert("댓글 내용을 입력해주세요!");
    return;
  }
  
  if(!currentMovie) return;
  
  const userData = getUserData();
  
  const newComment = {
    id: Date.now(),
    user: userData.nickname,
    text: text,
    likes: 0,
    dislikes: 0,
    userLiked: false,
    userDisliked: false
  };
  
  if(!movieComments[currentMovie.id]) {
    movieComments[currentMovie.id] = [];
  }
  
  movieComments[currentMovie.id].push(newComment);
  localStorage.setItem("movieComments", JSON.stringify(movieComments));
  
  input.value = "";
  renderComments(currentMovie.id);
  
  addMileage(3, '댓글 작성');
  showNotification("댓글이 작성되었습니다! +3💎");
}

// 댓글 좋아요
function likeComment(movieId, commentId) {
  const comments = movieComments[movieId];
  const comment = comments.find(c => c.id === commentId);
  
  if(!comment) return;
  
  if(comment.userLiked) {
    comment.likes--;
    comment.userLiked = false;
  } else {
    if(comment.userDisliked) {
      comment.dislikes--;
      comment.userDisliked = false;
    }
    comment.likes++;
    comment.userLiked = true;
  }
  
  localStorage.setItem("movieComments", JSON.stringify(movieComments));
  renderComments(movieId);
}

// 댓글 싫어요
function dislikeComment(movieId, commentId) {
  const comments = movieComments[movieId];
  const comment = comments.find(c => c.id === commentId);
  
  if(!comment) return;
  
  if(comment.userDisliked) {
    comment.dislikes--;
    comment.userDisliked = false;
  } else {
    if(comment.userLiked) {
      comment.likes--;
      comment.userLiked = false;
    }
    comment.dislikes++;
    comment.userDisliked = true;
  }
  
  localStorage.setItem("movieComments", JSON.stringify(movieComments));
  renderComments(movieId);
}

// 예고편 재생
function playTrailer(){
  if(!currentMovie || !currentMovie.trailer) return;
  
  trailerContainer.classList.add("show");
  trailerIframe.src = `https://www.youtube.com/embed/${currentMovie.trailer}?autoplay=1`;
  
  trailerContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
  
  addMileage(15, '예고편 시청');
  updateStats('trailer');
}

function closeModal(){
  modal.style.display="none";
  trailerContainer.classList.remove("show");
  trailerIframe.src = "";
}

// 좋아요 토글
function toggleLike(){
  if(!currentMovie) return;
  
  const index = favorites.findIndex(fav => fav.title === currentMovie.title);
  
  if(index === -1) {
    favorites.push(currentMovie);
    addMileage(5, '찜하기');
    updateStats('favorite');
    showNotification(`${currentMovie.title}를 찜 목록에 추가! +5💎`);
  } else {
    favorites.splice(index, 1);
    showNotification(`${currentMovie.title}를 찜 목록에서 제거`);
  }
  
  localStorage.setItem("favorites", JSON.stringify(favorites));
  
  render(movies);
  
  closeModal();
}

// 검색 기능
function searchMovies(){
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  const filtered = movies.filter(m => 
    m.title.toLowerCase().includes(keyword) || 
    m.desc.toLowerCase().includes(keyword) ||
    m.genre.toLowerCase().includes(keyword) ||
    (m.director && m.director.toLowerCase().includes(keyword)) ||
    (m.cast && m.cast.toLowerCase().includes(keyword))
  );
  render(filtered);
}

// 필터 함수들
function showHome(){ 
  document.getElementById("searchInput").value = "";
  render(movies); 
}

function showMovies(){ 
  document.getElementById("searchInput").value = "";
  render(movies.filter(m=>m.type==="movie")); 
}

function showSeries(){ 
  document.getElementById("searchInput").value = "";
  render(movies.filter(m=>m.type==="series")); 
}

function showFavorites(){
  document.getElementById("searchInput").value = "";
  if(favorites.length === 0) {
    grid.innerHTML = '<div class="empty-message">찜한 콘텐츠가 없습니다 🎬<br><small>마음에 드는 작품을 찜해보세요!</small></div>';
  } else {
    render(favorites);
  }
}

// 인기 영화 드롭다운 토글
function toggleTrending() {
  const dropdown = document.getElementById("trending-dropdown");
  dropdown.classList.toggle("show");
}

// 인기 영화 렌더링
function renderTrendingMovies() {
  const trendingList = document.getElementById("trending-list");
  
  // 랜덤으로 섞어서 5개 선택
  const shuffled = [...movies].sort(() => 0.5 - Math.random());
  const trending = shuffled.slice(0, 5);
  
  trendingList.innerHTML = "";
  
  trending.forEach((movie, index) => {
    const item = document.createElement("div");
    item.className = "trending-item";
    item.onclick = () => {
      toggleTrending();
      openDetail(movie);
    };
    
    item.innerHTML = `
      <span class="trending-rank">${index + 1}</span>
      <img src="${movie.img}" alt="${movie.title}">
      <div class="trending-info">
        <h4>${movie.title}</h4>
        <p>⭐ ${movie.rate}</p>
      </div>
    `;
    
    trendingList.appendChild(item);
  });
}

// 검색창 포커스 시 인기 영화 표시
document.getElementById("searchInput").addEventListener('focus', function() {
  renderTrendingMovies();
  toggleTrending();
});

// 검색창 외부 클릭 시 드롭다운 닫기
document.addEventListener('click', function(e) {
  const searchBox = document.querySelector('.search-box');
  const dropdown = document.getElementById("trending-dropdown");
  
  if(!searchBox.contains(e.target)) {
    dropdown.classList.remove('show');
  }
});

// 모달 외부 클릭시 닫기
modal.addEventListener('click', function(e){
  if(e.target === modal) {
    closeModal();
  }
});

// 초기 렌더링
render(movies);