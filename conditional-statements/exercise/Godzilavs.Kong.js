function godzillaVsKong(input) {

    let filmBudget = Number(input[0]);
    let statistCount = Number(input[1]);
    let dressPricePerStatist = Number(input[2]);

    let decor = filmBudget * 0.10;
    let statistDressTotalPrice = statistCount * dressPricePerStatist;

    if (statistCount > 150) {
        statistDressTotalPrice = statistDressTotalPrice * 0.90;
    }

    let filmPrice = decor + statistDressTotalPrice;
    let diff = Math.abs(filmBudget - filmPrice);

    if (filmPrice > filmBudget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    } else if (filmPrice <= filmBudget) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }
}
godzillaVsKong(["9587.88",
"222",
"55.68"])

