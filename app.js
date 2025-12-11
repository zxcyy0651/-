const movies = [
  {title:"인터스텔라", rate:4.9, desc:"우주 생존을 건 인류의 마지막 미션", img:"images/m1.jpg", type:"movie", genre:"SF"},
  {title:"인셉션", rate:4.8, desc:"꿈 속 작전", img:"images/m2.jpg", type:"movie", genre:"SF"},
  {title:"듄", rate:4.7, desc:"사막 행성 전쟁", img:"images/m3.jpg", type:"movie", genre:"SF"},
  {title:"아바타", rate:4.8, desc:"판도라 행성", img:"images/m4.jpg", type:"movie", genre:"SF"},
  {title:"매트릭스", rate:4.9, desc:"가상현실 탈출", img:"images/m5.jpg", type:"movie", genre:"SF"},
  {title:"설국열차", rate:4.2, desc:"빙하기 계급", img:"images/m6.jpg", type:"movie", genre:"액션"},
  {title:"컨택트", rate:4.4, desc:"외계 언어", img:"images/m7.jpg", type:"movie", genre:"SF"},
  {title:"블레이드러너", rate:4.5, desc:"복제인간", img:"images/m8.jpg", type:"movie", genre:"SF"},
  {title:"월-E", rate:4.6, desc:"로봇 사랑", img:"images/m9.jpg", type:"movie", genre:"애니"},
  {title:"터미네이터", rate:4.3, desc:"미래 전쟁", img:"images/m10.jpg", type:"movie", genre:"액션"},
  {title:"스타워즈", rate:4.7, desc:"포스 전쟁", img:"images/m11.jpg", type:"series", genre:"SF"},
  {title:"기묘한이야기", rate:4.6, desc:"초자연적 사건", img:"images/m12.jpg", type:"series", genre:"스릴러"},
  {title:"블랙미러", rate:4.5, desc:"기술 디스토피아", img:"images/m13.jpg", type:"series", genre:"SF"},
  {title:"더문", rate:4.0, desc:"달 생존", img:"images/m14.jpg", type:"movie", genre:"SF"},
  {title:"테넷", rate:4.1, desc:"시간 반전", img:"images/m15.jpg", type:"movie", genre:"SF"}
];

const grid = document.getElementById("grid");
const modal = document.getElementById("modal");
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
  document.getElementById("detail-desc").innerText=m.desc;
  document.getElementById("detail-rate").innerText=m.rate;
  
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
}

function closeModal(){
  modal.style.display="none";
}

// 좋아요 토글
function toggleLike(){
  if(!currentMovie) return;
  
  const index = favorites.findIndex(fav => fav.title === currentMovie.title);
  
  if(index === -1) {
    // 추가
    favorites.push(currentMovie);
    alert(`${currentMovie.title}를 찜 목록에 추가했습니다! ❤️`);
  } else {
    // 제거
    favorites.splice(index, 1);
    alert(`${currentMovie.title}를 찜 목록에서 제거했습니다.`);
  }
  
  localStorage.setItem("favorites", JSON.stringify(favorites));
  
  // 현재 보고 있는 목록이 찜 목록이면 다시 렌더링
  const currentView = document.querySelector('nav span[style*="color: red"]');
  if(currentView && currentView.innerText === "찜한콘텐츠") {
    showFavorites();
  } else {
    render(movies);
  }
  
  closeModal();
}

// 검색 기능
function searchMovies(){
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  const filtered = movies.filter(m => 
    m.title.toLowerCase().includes(keyword) || 
    m.desc.toLowerCase().includes(keyword) ||
    m.genre.toLowerCase().includes(keyword)
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

// 초기 렌더링
render(movies);
