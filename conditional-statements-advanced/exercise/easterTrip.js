function easterTrip(input) {
    let destination = input[0];
    let dates = input[1];
    let nightsCount = Number(input[2]);

    let expenses = 0;

    switch (destination) {
        case 'France':
            if (dates === '21-23') {
                expenses = nightsCount * 30.00;
            } else if (dates === '24-27') {
                expenses = nightsCount * 35.00;
            } else if (dates === '28-31') {
                expenses = nightsCount * 40.00;
            }
            break;
        case 'Italy':
            if (dates === '21-23') {
                expenses = nightsCount * 28.00;
            } else if (dates === '24-27') {
                expenses = nightsCount * 32.00;
            } else if (dates === '28-31') {
                expenses = nightsCount * 39.00;
            }
            break;
        case 'Germany':
            if (dates === '21-23') {
                expenses = nightsCount * 32.00
            } else if (dates === '24-27') {
                expenses = nightsCount * 37.00;
            } else if (dates === '28-31') {
                expenses = nightsCount * 43.00
            }
            break;
    }
    console.log(`Easter trip to ${destination} : ${expenses.toFixed(2)} leva.`)
}
easterTrip(["Germany",
"24-27",
"5"])

