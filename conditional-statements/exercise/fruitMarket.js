function fruitMarket(input) {

    let strawberryPrice = Number(input[0]);
    let bananasCount = Number(input[1]);
    let orangesCount = Number(input[2]);
    let raspberriesCount = Number(input[3]);
    let strawberriesCount = Number(input[4]);

    let raspberriesPrice = strawberryPrice / 2;
    let orangesPrice = raspberriesPrice * 0.60;
    let bananasPrice = raspberriesPrice * 0.20;

    let strawberryMoney = strawberriesCount * strawberryPrice;
    let raspberriesMoney = raspberriesCount * raspberriesPrice;
    let orangesMoney = orangesCount * orangesPrice;
    let bananasMoney = bananasCount * bananasPrice;

    let total = strawberryMoney + raspberriesMoney + orangesMoney + bananasMoney;
    console.log(total.toFixed(2));
}
