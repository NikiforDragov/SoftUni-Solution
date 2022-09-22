function deerOfSanta(input) {
    let daysMissing = Number(input[0]);
    let foodLeft = Number(input[1]);
    let firstDeerFoodPerDay = Number(input[2]);
    let secondDeerFoodPerDay = Number(input[3]);
    let thirdDeerFoodPerDay = Number(input[4]);

    let allFoodFirst = firstDeerFoodPerDay * daysMissing;
    let allFoodSecond = secondDeerFoodPerDay * daysMissing;
    let allFoodThird = thirdDeerFoodPerDay * daysMissing;

    let sumFood = allFoodFirst + allFoodSecond + allFoodThird;

    let diff = Math.abs(sumFood - foodLeft);

    if (sumFood <= foodLeft) {
        console.log(`${Math.floor(diff)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
    }
}
deerOfSanta(["5",
    "10",
    "2.1",
    "0.8",
    "11"])

