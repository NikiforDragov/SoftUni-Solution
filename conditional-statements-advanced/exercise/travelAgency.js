function travelAgency(input) {
    let town = input[0];
    let type = input[1];
    let vip = input[2];

    let daysCount = Number(input[3]);
    if (daysCount >= 7) {
        daysCount = daysCount - 1;
    } else if (daysCount < 1) {
        console.log(`Days must be positive number!`);
        return;
    }
    let finalPrice = 0;

    if (town === 'Bansko' || town === 'Borovets') {
        switch (type) {
            case 'withEquipment':
                finalPrice = daysCount * 100;
                if (vip === 'yes') {
                    finalPrice = finalPrice * 0.90;
                }
                console.log(`The price is ${finalPrice.toFixed(2)}lv! Have a nice time!`);
                break;
            case 'noEquipment':
                finalPrice = daysCount * 80;
                if (vip === 'yes') {
                    finalPrice = finalPrice * 0.95;
                }
                console.log(`The price is ${finalPrice.toFixed(2)}lv! Have a nice time!`);
                break;
            default: console.log(`Invalid input!`);
        }

    } else if (town === 'Varna' || town === 'Burgas') {
        switch (type) {
            case 'withBreakfast':
                finalPrice = daysCount * 130;
                if (vip === 'yes') {
                    finalPrice = finalPrice * 0.88;
                }
                if (finalPrice > 0) {
                    console.log(`The price is ${finalPrice.toFixed(2)}lv! Have a nice time!`);
                }
                break;
            case 'noBreakfast':
                finalPrice = daysCount * 100;
                if (vip === 'yes') {
                    finalPrice = finalPrice * 0.93;
                }
                if (finalPrice > 0) {
                    console.log(`The price is ${finalPrice.toFixed(2)}lv! Have a nice time!`);
                }
                break;
            default: console.log(`Invalid input!`);
        }
    } else {
        console.log(`Invalid input!`);
        return;
    }
}
travelAgency(["Bansko",
"noBreakfast",
"no",
"3"])






















