function easterBakery(input) {

    let flourCostKg = Number(input[0]);
    let flourKg = Number(input[1]);
    let sugarKg = Number(input[2]);
    let eggBoxesCount = Number(input[3]);
    let yeastPackages = Number(input[4]);

    let sugarCostKg = flourCostKg * 0.75;
    let eggBoxCost = flourCostKg * 1.1;
    let yeastPackageCost = sugarCostKg * 0.20;

    let flourSum = flourKg * flourCostKg;
    let sugarSum = sugarKg * sugarCostKg;
    let eggBoxesSum = eggBoxesCount * eggBoxCost;
    let yeastSum = yeastPackages * yeastPackageCost;

    let total = flourSum + sugarSum + eggBoxesSum + yeastSum;

    console.log(total.toFixed(2));
}
easterBakery(["50",
    "10",
    "3.5",
    "6",
    "1"])
