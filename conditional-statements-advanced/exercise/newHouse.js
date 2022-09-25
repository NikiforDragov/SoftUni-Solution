function newHouse(input) {
    let type = input[0];
    let count = Number(input[1]);
    let budget = Number(input[2]);

    let totalPrice = 0;
    //"Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
    switch (type) {
        case 'Roses': totalPrice = count * 5.00;
            if (count > 80) {
                totalPrice = totalPrice * 0.90;
            }
            break;
        case 'Dahlias': totalPrice = count * 3.80;
            if (count > 90) {
                totalPrice = totalPrice * 0.85;
            }
            break;
        case 'Tulips': totalPrice = count * 2.80;
            if (count > 80) {
                totalPrice = totalPrice * 0.85;
            }
            break;
        case 'Narcissus': totalPrice = count * 3.00;
            if (count < 120) {
                totalPrice = totalPrice * 1.15;
            }
            break;
        case 'Gladiolus': totalPrice = count * 2.50;
            if (count < 80) {
                totalPrice = totalPrice * 1.20;
            }
            break;
    }

    let diff = Math.abs(budget - totalPrice);

    if (budget >= totalPrice) {
        console.log(`Hey, you have a great garden with ${count} ${type} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }
}

newHouse(["Roses", "55", "250"])
newHouse(["Tulips",
    "88",
    "260"])

