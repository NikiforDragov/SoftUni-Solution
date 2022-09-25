function skiTrip(input) {
    let days = Number(input[0]);
    let type = input[1];
    let feedback = input[2];

    let nights = days - 1;
    let price = 0

    switch (type) {
        case 'room for one person':
            price = nights * 18.00;
            break;
        case 'apartment':
            price = nights * 25.00;
            if (days < 10) {
                price = price * 0.70;
            } else if (days >= 10 && days <= 15) {
                price = price * 0.65;
            } else {
                price = price * 0.50;
            }
            break;
        case 'president apartment':
            price = nights * 35.00;
            if (days < 10) {
                price = price * 0.90;
            } else if (days >= 10 && days <= 15) {
                price = price * 0.85;
            } else {
                price = price * 0.80;
            }
    }
    if (feedback === 'positive') {
        price = price * 1.25;
    } else if (feedback === 'negative') {
        price = price * 0.90;
    }
    console.log(price.toFixed(2));
}
skiTrip(["30",
    "president apartment",
    "negative"])



