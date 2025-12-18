// 로그인 체크
checkLogin();
updateHeader();

const movies = [
  {
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
    plot: "환경 재앙으로 인류가 멸망 위기에 처한 미래. NASA는 새로운 행성을 찾기 위해 극비 우주 탐사 프로젝트를 진행한다. 전직 우주비행사 쿠퍼는 인류를 구하기 위해 우주로 떠나지만, 시간과 중력의 법칙이 왜곡되는 블랙홀 근처에서 예상치 못한 상황과 마주하게 된다. 5차원 공간에서 과거와 소통하며 인류의 미래를 구하려는 감동적인 SF 대서사시."
  },
  {
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
    plot: "타인의 꿈에 침투해 생각을 빼내는 특수 요원 코브. 그에게 생각을 '훔치는' 대신 '심는' 불가능한 임무인 '인셉션'이 주어진다. 꿈 속의 꿈, 그 깊은 곳으로 들어가는 위험한 작전이 시작되고, 현실과 꿈의 경계가 무너지기 시작한다. 과연 그는 현실로 돌아올 수 있을까?"
  },
  {
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
    plot: "우주에서 가장 귀한 자원 '스파이스'가 생산되는 사막 행성 아라키스. 황제의 명령으로 이곳을 관리하게 된 아트레이데스 가문의 후계자 폴은 배신으로 모든 것을 잃는다. 원주민 프레멘과 함께하며 자신의 운명과 우주의 미래를 마주하게 되는 장대한 여정이 펼쳐진다."
  },
  {
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
    plot: "자원 채굴을 위해 판도라 행성에 온 인간들. 하반신 마비인 전직 해병대원 제이크는 아바타 프로그램을 통해 원주민 나비족의 몸으로 활동하게 된다. 나비족 공주 네이티리와 사랑에 빠진 제이크는 인간과 나비족 사이에서 선택의 기로에 서게 된다. 숨막히는 영상미와 감동적인 스토리."
  },
  {
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
    plot: "평범한 회사원 네오는 해커 모피어스를 만나 충격적인 진실을 알게 된다. 현실이라 믿었던 세계는 기계가 만든 가상현실 '매트릭스'였던 것. 인류를 구할 구세주로 지목된 네오는 요원 스미스와 대결하며 진정한 현실을 찾기 위한 여정을 시작한다. 혁명적인 액션과 철학적 주제."
  },
  {
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
    plot: "지구 온난화를 막으려던 실험이 실패하며 빙하기가 찾아온 세계. 살아남은 인류는 끊임없이 달리는 열차 안에서 살아간다. 꼬리칸의 하층민들과 앞칸의 상류층으로 나뉜 열차 안, 커티스는 혁명을 일으켜 엔진실을 향해 나아간다. 계급 사회를 비판한 강렬한 메시지."
  },
  {
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
    plot: "정체불명의 외계 우주선이 지구 곳곳에 나타난다. 언어학자 루이스는 외계인과 소통하기 위해 그들의 언어를 배우기 시작한다. 그러나 그들의 언어를 이해할수록 시간을 인식하는 방식이 바뀌고, 자신의 미래를 보게 되는 놀라운 경험을 하게 된다. 지적이고 감성적인 SF 걸작."
  },
  {
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
    plot: "2019년 로스앤젤레스. 복제인간 '레플리칸트'를 추적하는 블레이드 러너 데커드는 탈주한 레플리칸트들을 제거하라는 임무를 받는다. 그러나 그들을 쫓으며 인간과 복제인간의 경계, 삶과 죽음의 의미에 대해 고민하게 된다. SF 누아르의 고전이자 시각적 걸작."
  },
  {
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
    plot: "쓰레기로 뒤덮인 지구에 홀로 남겨진 청소 로봇 월-E. 700년 동안 외롭게 쓰레기를 정리하던 그는 우주에서 온 탐사 로봇 이브를 만나 사랑에 빠진다. 이브를 따라 우주로 떠난 월-E는 인류를 지구로 돌려보내기 위한 모험을 시작한다. 대사 없이도 감동을 전하는 픽사의 명작."
  },
  {
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
    plot: "인공지능 스카이넷이 지배하는 2029년 미래. 인류 저항군의 리더가 될 존 코너를 제거하기 위해 터미네이터가 1984년으로 시간여행한다. 미래에서 온 전사 카일 리스는 존의 어머니 사라 코너를 지키기 위해 목숨을 건 전투를 벌인다. SF 액션의 전설적인 시작."
  },
  {
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
    plot: "먼 은하계, 사악한 은하 제국이 반란군을 탄압하고 있다. 농장 청년 루크 스카이워커는 제다이 기사 오비완 케노비를 만나 포스를 배우고 우주의 운명을 바꿀 여정을 시작한다. 레아 공주를 구하고 데스스타를 파괴하기 위한 반란군의 전투가 펼쳐진다. 전설적인 스페이스 오페라."
  },
  {
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
    plot: "1980년대 작은 마을 호킨스. 소년 윌이 실종되고 그의 친구들은 엘이라는 초능력 소녀를 만난다. 정부 실험실의 비밀과 뒤집힌세계라는 평행차원이 드러나며 아이들은 괴물과 맞서 싸운다. 향수를 자극하는 80년대 감성과 스릴 넘치는 스토리."
  },
  {
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
    plot: "기술이 가져올 수 있는 어두운 미래를 그린 SF 앤솔로지 시리즈. 각 에피소드는 독립적인 이야기로, SNS 평점제 사회, 의식 복제, 가상현실 등 기술의 발전이 인간성에 미치는 영향을 날카롭게 풍자한다. 충격적이고 생각할 거리를 던지는 현대 SF의 걸작."
  },
  {
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
    cast: "샘 록웰, 케빈 스페이시(목소리)",
    plot: "달 기지에서 3년간 홀로 자원 채굴 작업을 하는 샘 벨. 지구 귀환을 2주 앞둔 어느 날, 사고를 당한 그는 자신과 똑같은 또 다른 사람을 발견한다. 고독과 정체성에 대한 질문을 던지는 철학적 SF. 저예산으로 만든 숨겨진 명작."
  },
  {
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
    plot: "시간을 역행할 수 있는 물질이 발견되고, 이를 이용한 제3차 세계대전의 위협이 다가온다. 요원 '주인공'은 시간을 거슬러 올라가는 '인버전' 기술을 이용해 세계를 구하기 위한 임무에 뛰어든다. 순행과 역행이 동시에 펼�쳐지는 놀란의 야심작."
  }
];

const grid = document.getElementById("grid");
const modal = document.getElementById("modal");
const trailerContainer = document.getElementById("trailer-container");
const trailerIframe = document.getElementById("trailer-iframe");
let currentMovie = null;
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

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
    
    // 장르 태그 추가
    const genreBadge = `<div class="genre-badge">${m.genre}</div>`;
    
    // 좋아요 표시
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
  
  // 영화 정보 표시
  document.getElementById("detail-year").innerText=m.year || "정보 없음";
  document.getElementById("detail-runtime").innerText=m.runtime || "정보 없음";
  document.getElementById("detail-director").innerText=m.director || "정보 없음";
  document.getElementById("detail-cast").innerText=m.cast || "정보 없음";
  document.getElementById("detail-plot").innerText=m.plot || "줄거리 정보가 없습니다.";
  
  // 예고편 숨기기 (처음엔 안 보임)
  trailerContainer.classList.remove("show");
  trailerIframe.src = "";
  
  // 좋아요 버튼 상태
  const likeBtn = document.getElementById("likeBtn");
  const isLiked = favorites.some(fav => fav.title === m.title);
  
  if(isLiked) {
    likeBtn.innerText = "💔 찜 해제";
    likeBtn.classList.add("liked");
  } else {
    likeBtn.innerText = "❤️ 찜하기";
    likeBtn.classList.remove("liked");
  }
  
  // 마일리지 추가 (영화 클릭)
  addMileage(10, '영화 탐색');
  updateStats('movie');
}

// 예고편 재생
function playTrailer(){
  if(!currentMovie || !currentMovie.trailer) return;
  
  trailerContainer.classList.add("show");
  trailerIframe.src = `https://www.youtube.com/embed/${currentMovie.trailer}?autoplay=1`;
  
  // 예고편 위치로 스크롤
  trailerContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
  
  // 마일리지 추가 (예고편 시청)
  addMileage(15, '예고편 시청');
  updateStats('trailer');
}

function closeModal(){
  modal.style.display="none";
  trailerContainer.classList.remove("show");
  trailerIframe.src = ""; // 영상 중지
}

// 좋아요 토글
function toggleLike(){
  if(!currentMovie) return;
  
  const index = favorites.findIndex(fav => fav.title === currentMovie.title);
  
  if(index === -1) {
    // 추가
    favorites.push(currentMovie);
    addMileage(5, '찜하기');
    updateStats('favorite');
    showNotification(`${currentMovie.title}를 찜 목록에 추가! +5💎`);
  } else {
    // 제거
    favorites.splice(index, 1);
    showNotification(`${currentMovie.title}를 찜 목록에서 제거`);
  }
  
  localStorage.setItem("favorites", JSON.stringify(favorites));
  
  // 현재 보고 있는 목록 다시 렌더링
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

// 모달 외부 클릭시 닫기
modal.addEventListener('click', function(e){
  if(e.target === modal) {
    closeModal();
  }
});

// 초기 렌더링
render(movies);