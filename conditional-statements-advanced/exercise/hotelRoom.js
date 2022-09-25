function hotelRoom(input) {

    let month = input[0];
    let nightsCount = Number(input[1]);

    let apartmentPrice = 0;
    let studioPrice = 0;

    switch (month) {
        case 'May':
        case 'October':
            studioPrice = nightsCount * 50.00;
            apartmentPrice = nightsCount * 65.00;
            if (nightsCount > 7 && nightsCount <= 14) {
                studioPrice = studioPrice * 0.95;
            } else if (nightsCount > 14) {
                studioPrice = studioPrice * 0.70;
            }
            break;
        case 'June':
        case 'September':
            studioPrice = nightsCount * 75.20;
            apartmentPrice = nightsCount * 68.70;
            if (nightsCount > 14) {
                studioPrice = studioPrice * 0.80;
            }
            break;
        case 'July':
        case 'August':
            studioPrice = nightsCount * 76.00;
            apartmentPrice = nightsCount * 77.00;
            break;
    }
    if (nightsCount > 14) {
        apartmentPrice = apartmentPrice * 0.90;
    }
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);

}
hotelRoom(["August",
"20"])


