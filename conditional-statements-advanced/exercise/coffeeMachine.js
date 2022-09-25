function coffeeMachine(input) {
    let drink = input[0];
    let sugar = input[1];
    let drinkCount = Number(input[2]);

    let totalPrice = 0;

    switch (drink) {
        case 'Espresso':
            switch (sugar) {
                case 'Without':
                    totalPrice = drinkCount * 0.90;
                    break;
                case 'Normal':
                    totalPrice = drinkCount * 1.00;
                    break;
                case 'Extra':
                    totalPrice = drinkCount * 1.20;
                    break;
            }
            break;
        case 'Cappuccino':
            switch (sugar) {
                case 'Without':
                    totalPrice = drinkCount * 1.00;
                    break;
                case 'Normal':
                    totalPrice = drinkCount * 1.20;
                    break;
                case 'Extra':
                    totalPrice = drinkCount * 1.60;
                    break;
            }
            break;
        case 'Tea':
            switch (sugar) {
                case 'Without':
                    totalPrice = drinkCount * 0.50;
                    break;
                case 'Normal':
                    totalPrice = drinkCount * 0.60;
                    break;
                case 'Extra':
                    totalPrice = drinkCount * 0.70;
                    break;
            }
            break;
    }
    if (sugar === 'Without') {
        totalPrice = totalPrice * 0.65;
    }
    if (drink === 'Espresso' && drinkCount >= 5) {
        totalPrice = totalPrice * 0.75;
    }
    if (totalPrice > 15) {
        totalPrice = totalPrice * 0.80;
    }
    console.log(`You bought ${drinkCount} cups of ${drink} for ${totalPrice.toFixed(2)} lv.`);
}
coffeeMachine(["Tea",
"Extra",
"3"])


