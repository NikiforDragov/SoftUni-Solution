function easterParty(input) {

    let guestsCount = Number(input[0]);
    let coverPerGuest = Number(input[1]);
    let budget = Number(input[2]);

    let coverPrice = 0;

    if (guestsCount < 10) {
        coverPrice = guestsCount * coverPerGuest;
    } else if (guestsCount >= 10 && guestsCount <= 15) {
        coverPrice = (guestsCount * coverPerGuest) * 0.85;
    } else if (guestsCount > 15 && guestsCount <= 20) {
        coverPrice = (guestsCount * coverPerGuest) * 0.80;
    } else {
        coverPrice = (guestsCount * coverPerGuest) * 0.75;
    }

    let cakePrice = budget * 0.10;

    let total = coverPrice + cakePrice;

    let diff = Math.abs(budget - total);

    if (budget >= total) {
        console.log(`It is party time! ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${diff.toFixed(2)} leva needed.`);
    }
}
easterParty(["18",
    "30",
    "450"])

easterParty(["8",
    "25",
    "340"])

easterParty(["24",
    "35",
    "550"])
