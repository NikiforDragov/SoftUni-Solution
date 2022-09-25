function transportPrice(input) {

    let kmToTravel = Number(input[0]);
    let time = input[1];

    let taxiStartingFee = 0.70;
    let dayPricePerKm = 0.79;
    let nightPricePerKM = 0.90;

    let busPricePerKm = 0.09;

    let trainPricePerKm = 0.06;

    if (kmToTravel < 20 && time === "day") {
        let money = 0.70 + (dayPricePerKm * kmToTravel);
        console.log(money.toFixed(2));
    } else if (kmToTravel < 20 && time === "night") {
        let money = 0.70 + (nightPricePerKM * kmToTravel);
        console.log(money.toFixed(2));
    } else if (kmToTravel >= 20 && kmToTravel < 100) {
        let money = busPricePerKm * kmToTravel;
        console.log(money.toFixed(2));
    } else {
        let money = trainPricePerKm * kmToTravel;
        console.log(money.toFixed(2));
    }
}

transportPrice(['25',
    'day'
])