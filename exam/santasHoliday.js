function santaHoliday(input) {
    let daysCount = Number(input[0]);
    let roomType = input[1];
    let grade = input[2];

    let nightsCount = daysCount - 1;

    let price = 0;

    switch (roomType) {
        case 'room for one person': price = nightsCount * 18.00;
            break;
        case 'apartment': price = nightsCount * 25.00;
            if (nightsCount < 10) {
                price *= 0.70;
            } else if (nightsCount >= 10 && nightsCount <= 15) {
                price *= 0.65;
            } else {
                price *= 0.50;
            }
            break;
        case 'president apartment': price = nightsCount * 35.00;
            if (nightsCount < 10) {
                price *= 0.90;
            } else if (nightsCount >= 10 && nightsCount <= 15) {
                price *= 0.85;
            } else {
                price *= 0.80;
            }
            break;
    }

    if (grade === 'positive') {
        price *= 1.25;
    } else {
        price -= price * 0.10
    }
    console.log(price.toFixed(2));
}
santaHoliday(["30",
    "president apartment",
    "negative"])




