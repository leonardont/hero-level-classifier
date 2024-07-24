function getLevelNameByXP(heroXPLevel) {
  const levels = [
    { max: 1000, name: "Iron" },
    { max: 2000, name: "Bronze" },
    { max: 3000, name: "Silver" },
    { max: 5000, name: "Gold" },
    { max: 7000, name: "Platinum" },
    { max: 8000, name: "Diamond" },
    { max: 9000, name: "Ascendant" },
    { max: 10000, name: "Immortal" },
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

  content.innerHTML = `Your challenger, ${heroName}, is currently in rank ${getLevelNameByXP(
    heroXPLevel
  )} with ${heroXPLevelFormatted} points!`;
}
