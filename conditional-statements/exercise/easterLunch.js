function easterLunch(input) {

    let easterBreadCount = Number(input[0]);
    let eggBoxesCount = Number(input[1]);
    let cookiesCount = Number(input[2]);

    let easterBreadPrice = easterBreadCount * 3.20;
    let cookiesPrice = cookiesCount * 5.40;
    let eggBoxesPrice = eggBoxesCount * 4.35;
    let eggCount = eggBoxesCount * 12;
    let eggColorPrice = eggCount * 0.15;

    let total = easterBreadPrice + cookiesPrice + eggBoxesPrice + eggColorPrice;

    console.log(total.toFixed(2));
}
easterLunch(["3",
"2",
"3"])
