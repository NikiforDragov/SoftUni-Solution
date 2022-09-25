function tradeCommissions(input) {

    let town = input[0];
    let sells = Number(input[1]);
    let commission = 0

    if (town === 'Sofia') {
        if (sells >= 0 && sells <= 500) {
            commission = sells * 0.05;
        } else if (sells > 500 && sells <= 1000) {
            commission = sells * 0.07;
        } else if (sells > 1000 && sells <= 10000) {
            commission = sells * 0.08;
        } else {
            commission = sells * 0.12;
        }

    } else if (town === 'Varna') {
        if (sells >= 0 && sells <= 500) {
            commission = sells * 0.045;
        } else if (sells > 500 && sells <= 1000) {
            commission = sells * 0.075;
        } else if (sells > 1000 && sells <= 10000) {
            commission = sells * 0.10;
        } else {
            commission = sells * 0.13;
        }

    } else if (town === 'Plovdiv') {
        if (sells >= 0 && sells <= 500) {
            commission = sells * 0.055;
        } else if (sells > 500 && sells <= 1000) {
            commission = sells * 0.08;
        } else if (sells > 1000 && sells <= 10000) {
            commission = sells * 0.12;
        } else {
            commission = sells * 0.145;
        }
    }

    if (sells >= 0) {
        switch (town) {
            case 'Sofia':
            case 'Varna':
            case 'Plovdiv': console.log(commission.toFixed(2)); break;
            default: console.log('error');
        } 
    } else {
        console.log('error');
    }
}
tradeCommissions(["Kaspichan",
    "-50"])



