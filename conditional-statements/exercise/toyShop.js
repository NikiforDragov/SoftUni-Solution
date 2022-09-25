function toyShop(input) {

    let travelPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let talkingDollCount = Number(input[2]);
    let teddyBearCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let toyPrice = puzzleCount * 2.60 + talkingDollCount * 3.0 + teddyBearCount * 4.10 + minionsCount * 8.20 + truckCount * 2.0;
    let toyCount = puzzleCount + talkingDollCount + teddyBearCount + minionsCount + truckCount

    if (toyCount >= 50) {
        toyPrice = toyPrice * 0.75;
    }
     toyPrice = toyPrice * 0.90;
    let diff = Math.abs(travelPrice - toyPrice);

    if (toyPrice >= travelPrice) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    } else  {
        diff = travelPrice - toyPrice;
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }
}
toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"])


