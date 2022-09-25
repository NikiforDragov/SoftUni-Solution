function familyTrip(input) {

    let budget = Number(input[0]);
    let nightCount = Number(input[1]);
    let nightPrice = Number(input[2]);
    let bonusCosts = Number(input[3]);

    let bonusCostsMoney = budget * (bonusCosts / 100);

    let nightsMoney = nightCount * nightPrice;

    if (nightCount > 7) {
        nightsMoney = nightsMoney * 0.95;
    }

    let moneyNeeded = nightsMoney + bonusCostsMoney;

    let diff = Math.abs(budget - moneyNeeded);

    if (budget >= moneyNeeded) {
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${diff.toFixed(2)} leva needed.`);
    }
}
familyTrip(["800.50",
    "8",
    "100",
    "2"])

familyTrip(["500",
    "7",
    "66",
    "15"])
