function getLevelNameByXP(heroXPLevel) {
  const levels = [
    { max: 10000, name: "Iron" },
    { max: 20000, name: "Bronze" },
    { max: 30000, name: "Silver" },
    { max: 50000, name: "Gold" },
    { max: 70000, name: "Platinum" },
    { max: 80000, name: "Diamond" },
    { max: 90000, name: "Ascendant" },
    { max: 100000, name: "Immortal" },
    { max: Infinity, name: "Radiant" },
  ];

  for (const level of levels) {
    if (heroXPLevel <= level.max) return level.name;
  }
}

function changeHeroDescription() {
  const heroName = document.getElementById("heroNameInput").value;
  const heroXPLevel = document.getElementById("heroXPLevelInput").value;
  const heroXPLevelFormatted = parseInt(heroXPLevel).toLocaleString();
  const content = document.getElementById("heroDescription");

  content.innerHTML = `Your hero, 
                      <span class="font-bold font-mono">${heroName}</span>, 
                      currently has 
                      <span class="text-blue-400 font-bold font-mono">${heroXPLevelFormatted}</span>
                      XP points and is placed at rank 
                      <span class="border border-yellow-300 rounded-2xl bg-zinc-700 text-amber-300 font-bold font-mono pb-1 px-3 me-1">
                      ${getLevelNameByXP(heroXPLevel)}</span>!`;
}
