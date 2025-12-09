let xp = 0;
let level = 1;
let mileage = 0;

function updateUI() {
  const xpEl = document.getElementById("xp");
  const levelEl = document.getElementById("level");
  const mileageEl = document.getElementById("mileage");

  if (xpEl) xpEl.innerText = xp;
  if (levelEl) levelEl.innerText = level;
  if (mileageEl) mileageEl.innerText = mileage;
}

function gainXP() {
  xp += 20;
  mileage += 50;

  if (xp >= 100) {
    xp = 0;
    level++;
    alert("레벨 업!");
  }

  updateUI();
}

updateUI();
