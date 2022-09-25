function easterGuests(input) {

    let guestsCount = Number(input[0]);
    let budget = Number(input[1]);

    let easterBreadCount = Math.ceil(guestsCount / 3);
    let eggsCount = guestsCount * 2;

    let easterBreadPrice = easterBreadCount * 4;
    let eggsPrice = eggsCount * 0.45;

    let money = easterBreadPrice + eggsPrice;
    let diff = Math.abs(budget - money);

    if (budget >= money) {
        console.log(`Lyubo bought ${easterBreadCount} Easter bread and ${eggsCount} eggs.`);
        console.log(`He has ${diff.toFixed(2)} lv. left.`);
    } else {
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${diff.toFixed(2)} lv. more.`);
    }
}
easterGuests(["10",
    "35"])
