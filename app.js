// app.js

const movies = [
  { id: 1,  title: "인터스텔라",   rate: 4.9, desc: "우주 생존을 건 인류의 마지막 미션", img: "images/m1.jpg",  type: "movie" },
  { id: 2,  title: "인셉션",       rate: 4.8, desc: "꿈 속 작전",                       img: "images/m2.jpg",  type: "movie" },
  { id: 3,  title: "듄",           rate: 4.7, desc: "사막 행성 전쟁",                   img: "images/m3.jpg",  type: "movie" },
  { id: 4,  title: "아바타",       rate: 4.8, desc: "판도라 행성",                     img: "images/m4.jpg",  type: "movie" },
  { id: 5,  title: "매트릭스",     rate: 4.9, desc: "가상현실 탈출",                   img: "images/m5.jpg",  type: "movie" },
  { id: 6,  title: "설국열차",     rate: 4.2, desc: "빙하기 계급",                     img: "images/m6.jpg",  type: "movie" },
  { id: 7,  title: "컨택트",       rate: 4.4, desc: "외계 언어",                       img: "images/m7.jpg",  type: "movie" },
  { id: 8,  title: "블레이드러너", rate: 4.5, desc: "복제인간",                       img: "images/m8.jpg",  type: "movie" },
  { id: 9,  title: "월-E",         rate: 4.6, desc: "로봇 사랑",                       img: "images/m9.jpg",  type: "movie" },
  { id: 10, title: "터미네이터",   rate: 4.3, desc: "미래 전쟁",                       img: "images/m10.jpg", type: "movie" },
  { id: 11, title: "스타워즈",     rate: 4.7, desc: "포스 전쟁",                       img: "images/m11.jpg", type: "series" },
  { id: 12, title: "기묘한 이야기", rate: 4.6, desc: "초자연",                        img: "images/m12.jpg", type: "series" },
  { id: 13, title: "블랙미러",     rate: 4.5, desc: "기술 디스토피아",                 img: "images/m13.jpg", type: "series" },
  { id: 14, title: "더 문",        rate: 4.0, desc: "달 생존",                        img: "images/m14.jpg", type: "movie" },
  { id: 15, title: "테넷",         rate: 4.1, desc: "시간 반전",                       img: "images/m15.jpg", type: "movie" }
];

const grid  = document.getElementById("grid");
const modal = document.getElementById("modal");

/** index(0~14)에 따라 m1~m7.mp4 반복 */
function getVideo(index) {
  const v = (index % 7) + 1;      // 1~7 반복
  return `images/videos/m${v}.mp4`;
}

function render(list) {
  grid.innerHTML = "";

  list.forEach((m, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.backgroundImage = `url(${m.img})`;

    // 먼저 hover-info 넣고
    card.innerHTML = `
      <div class="hover-info">
        ${m.title}<br>⭐ ${m.rate}
      </div>
    `;

    // 그 다음에 video 추가해야 함 (안 그러면 innerHTML이 video를 지움)
    const video = document.createElement("video");
    video.className   = "preview-video";
    video.src         = getVideo(index);
    video.muted       = true;
    video.loop        = true;
    video.playsInline = true;
    video.preload     = "metadata";

    card.appendChild(video);

    // 카드 클릭하면 상세 모달
    card.addEventListener("click", () => openDetail(m));

    // 마우스 올리면 영상 재생
    card.addEventListener("mouseenter", () => {
      video.currentTime   = 0;
      video.style.opacity = "1";
      video.play().catch(() => {});
    });

    // 마우스 나가면 영상 정지
    card.addEventListener("mouseleave", () => {
      video.pause();
      video.style.opacity = "0";
    });

    grid.appendChild(card);
  });
}

function openDetail(m) {
  modal.style.display = "flex";
  document.getElementById("detail-img").src       = m.img;
  document.getElementById("detail-title").innerText = m.title;
  document.getElementById("detail-desc").innerText  = m.desc;
  document.getElementById("detail-rate").innerText  = m.rate;
}

function closeModal() {
  modal.style.display = "none";
}

function showHome()   { render(movies); }
function showMovies() { render(movies.filter(m => m.type === "movie")); }
function showSeries() { render(movies.filter(m => m.type === "series")); }

// 처음 로딩 시 전체 출력
render(movies);
