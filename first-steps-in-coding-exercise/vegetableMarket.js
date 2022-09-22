function vegetableMarket(input) {

    let vegetablesKgPrice = Number(input[0]);
    let fruitKgPrice = Number(input[1]);
    let totalVegetablesKg = Number(input[2]);
    let totalFruitKg = Number(input[3]);

    let vegetablesPrice = vegetablesKgPrice * totalVegetablesKg;
    let fruitPrice = fruitKgPrice * totalFruitKg;
    let sumPrice = vegetablesPrice + fruitPrice;

    let priceInEuro = sumPrice / 1.94;

    console.log(priceInEuro.toFixed(2));
}
vegetableMarket(["0.194",
    "19.4",
    "10",
    "10"]
)