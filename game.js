// 게임 시스템 전역 함수들

// 로그인 체크
function checkLogin() {
  const userData = localStorage.getItem('userData');
  if(!userData) {
    window.location.href = 'login.html';
  }
}

// 유저 데이터 가져오기
function getUserData() {
  return JSON.parse(localStorage.getItem('userData')) || null;
}

// 유저 데이터 저장
function saveUserData(data) {
  localStorage.setItem('userData', JSON.stringify(data));
}

// 헤더 업데이트
function updateHeader() {
  const userData = getUserData();
  if(!userData) return;
  
  const nicknameEl = document.getElementById('header-nickname');
  const mileageEl = document.getElementById('header-mileage');
  
  if(nicknameEl) nicknameEl.innerText = userData.nickname;
  if(mileageEl) mileageEl.innerText = userData.mileage;
}

// 마일리지 추가
function addMileage(amount, reason) {
  const userData = getUserData();
  userData.mileage += amount;
  
  // XP 추가 (마일리지와 동일하게)
  userData.xp += amount;
  
  // 레벨업 체크
  const newLevel = calculateLevel(userData.xp);
  if(newLevel > userData.level) {
    userData.level = newLevel;
    alert(`🎉 레벨 업! LV ${newLevel}에 도달했습니다!`);
    
    // 레벨업 보너스
    userData.mileage += 50;
    checkAchievement('level_' + newLevel);
  }
  
  saveUserData(userData);
  updateHeader();
  
  // 알림 표시
  showNotification(`+${amount} 💎 ${reason}`);
}

// 레벨 계산
function calculateLevel(xp) {
  if(xp < 100) return 1;
  if(xp < 300) return 2;
  if(xp < 600) return 3;
  if(xp < 1000) return 4;
  if(xp < 1500) return 5;
  return 6;
}

// 업적 체크
function checkAchievement(achievementId) {
  const userData = getUserData();
  
  if(userData.achievements.includes(achievementId)) return;
  
  const achievements = {
    first_movie: { name: '첫 영화 시청', reward: 50 },
    ten_favorites: { name: '영화 수집가', reward: 100 },
    level_3: { name: '레벨 3 달성', reward: 150 },
    level_5: { name: '레벨 5 달성', reward: 300 },
    big_spender: { name: '소비왕', reward: 200 }
  };
  
  const achievement = achievements[achievementId];
  if(!achievement) return;
  
  userData.achievements.push(achievementId);
  userData.mileage += achievement.reward;
  
  saveUserData(userData);
  
  alert(`🏆 업적 달성!\n${achievement.name}\n보상: +${achievement.reward} 마일리지`);
}

// 일일 미션 초기화
function initDailyMissions() {
  return {
    watchMovies: { target: 3, current: 0, reward: 30, completed: false },
    watchTrailers: { target: 5, current: 0, reward: 50, completed: false },
    addFavorites: { target: 2, current: 0, reward: 20, completed: false }
  };
}

// 미션 진행
function progressMission(missionType) {
  const userData = getUserData();
  const mission = userData.dailyMissions[missionType];
  
  if(!mission || mission.completed) return;
  
  mission.current++;
  
  if(mission.current >= mission.target) {
    mission.completed = true;
    userData.mileage += mission.reward;
    alert(`✅ 일일 미션 완료!\n보상: +${mission.reward} 마일리지`);
  }
  
  saveUserData(userData);
}

// 알림 표시
function showNotification(message) {
  const notif = document.createElement('div');
  notif.className = 'notification';
  notif.innerText = message;
  document.body.appendChild(notif);
  
  setTimeout(() => {
    notif.classList.add('show');
  }, 10);
  
  setTimeout(() => {
    notif.classList.remove('show');
    setTimeout(() => notif.remove(), 300);
  }, 2000);
}

// 통계 업데이트
function updateStats(type) {
  const userData = getUserData();
  
  switch(type) {
    case 'movie':
      userData.stats.moviesWatched++;
      if(userData.stats.moviesWatched === 1) {
        checkAchievement('first_movie');
      }
      progressMission('watchMovies');
      break;
      
    case 'trailer':
      userData.stats.trailersWatched++;
      progressMission('watchTrailers');
      break;
      
    case 'favorite':
      userData.stats.favoriteCount++;
      if(userData.stats.favoriteCount === 10) {
        checkAchievement('ten_favorites');
      }
      progressMission('addFavorites');
      break;
  }
  
  saveUserData(userData);
}