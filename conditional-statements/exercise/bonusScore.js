function bonusScore(input) {

    let startingPoints = Number(input[0]);
    let bonus = 0
    if (startingPoints <= 100) {
        bonus = 5
    } else if (startingPoints <= 1000) {
        bonus = startingPoints * 0.2;
    } else {
        bonus = startingPoints * 0.1;
    }
    if (startingPoints % 2 === 0) {
        bonus = bonus + 1;
    } else if (startingPoints % 10 === 5) {
        bonus = bonus + 2;
    }
    console.log(bonus);
    console.log(startingPoints + bonus);
}
bonusScore(["20"])