let heroName = "Herói"
let heroXp = 0
let heroRank = "Ferro"
let matchResult = "tie"

heroName = "Igor o Gordão"
heroXp = 4900
matchResult = "victory"

switch (matchResult) {
    case "victory":
        heroXp = heroXp += 200;
        break;
    case "defeat":
        heroXp = heroXp -= 200;
        break;
    default:
        break;
}

if (heroXp <= 1000) {
    heroRank = "Ferro"
} else if (heroXp <= 2000){
        heroRank = "Bronze"
} else if (heroXp <= 5000){
        heroRank = "Prata"
} else if (heroXp <= 7000){
        heroRank = "Ouro"
} else if (heroXp <= 8000){
        heroRank = "Platina"
} else if (heroXp <= 9000){
        heroRank = "Ascendente"
} else if (heroXp <= 10000){
        heroRank = "Imortal"
} else {
        heroRank = "Radiante"
}

console.log(`O Herói de nome ${heroName} está no nível de ${heroRank}`)