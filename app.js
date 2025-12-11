const movies = [
  {id:1, title:"인터스텔라", rate:4.9, desc:"우주 생존을 건 인류의 마지막 미션", img:"images/m1.jpg", type:"movie"},
  {id:2, title:"인셉션", rate:4.8, desc:"꿈 속 작전", img:"images/m2.jpg", type:"movie"},
  {id:3, title:"듄", rate:4.7, desc:"사막 행성 전쟁", img:"images/m3.jpg", type:"movie"},
  {id:4, title:"아바타", rate:4.8, desc:"판도라 행성", img:"images/m4.jpg", type:"movie"},
  {id:5, title:"매트릭스", rate:4.9, desc:"가상현실 탈출", img:"images/m5.jpg", type:"movie"},
  {id:6, title:"설국열차", rate:4.2, desc:"빙하기 계급", img:"images/m6.jpg", type:"movie"},
  {id:7, title:"컨택트", rate:4.4, desc:"외계 언어", img:"images/m7.jpg", type:"movie"},
  {id:8, title:"블레이드러너", rate:4.5, desc:"복제인간", img:"images/m8.jpg", type:"movie"},
  {id:9, title:"월-E", rate:4.6, desc:"로봇 사랑", img:"images/m9.jpg", type:"movie"},
  {id:10, title:"터미네이터", rate:4.3, desc:"미래 전쟁", img:"images/m10.jpg", type:"movie"},
  {id:11, title:"스타워즈", rate:4.7, desc:"포스 전쟁", img:"images/m11.jpg", type:"series"},
  {id:12, title:"기묘한 이야기", rate:4.6, desc:"초자연적 사건", img:"images/m12.jpg", type:"series"},
  {id:13, title:"블랙미러", rate:4.5, desc:"기술 디스토피아", img:"images/m13.jpg", type:"series"},
  {id:14, title:"더 문", rate:4.0, desc:"달 생존", img:"images/m14.jpg", type:"movie"},
  {id:15, title:"테넷", rate:4.1, desc:"시간 반전", img:"images/m15.jpg", type:"movie"}
];

const grid = document.getElementById("grid");
const modal = document.getElementById("modal");

function render(list){
  grid.innerHTML = "";
  list.forEach(m=>{
    const d = document.createElement("div");
    d.className = "card";
    d.style.backgroundImage = `url(${m.img})`;

    d.innerHTML = `
      <video class="preview-video" muted preload="auto">
        <source src="images/videos/m${m.id}.mp4" type="video/mp4">
      </video>
      <div class="hover-info">${m.title}<br>⭐ ${m.rate}</div>
    `;

    d.onclick = ()=>openDetail(m);
    grid.appendChild(d);
  });
}

function openDetail(m){
  modal.style.display="flex";
  document.getElementById("detail-img").src = m.img;
  document.getElementById("detail-title").innerText = m.title;
  document.getElementById("detail-desc").innerText = m.desc;
  document.getElementById("detail-rate").innerText = m.rate;
}

function closeModal(){
  modal.style.display="none";
}

function showHome(){ render(movies); }
function showMovies(){ render(movies.filter(m=>m.type==="movie")); }
function showSeries(){ render(movies.filter(m=>m.type==="series")); }

render(movies);
