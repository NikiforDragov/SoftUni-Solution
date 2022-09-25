function fishLand(input) {

    let mackerelPricePerKg = Number(input[0]);
    let spratPricePerKg = Number(input[1]);
    let bonitoKgs = Number(input[2]);
    let scadKgs = Number(input[3]);
    let clamKgs = Number(input[4]);

    let bonitoPricePerKg = mackerelPricePerKg + mackerelPricePerKg * 0.6;
    let bonitoTotalPrice = bonitoPricePerKg * bonitoKgs;

    let scatPricePerKg = spratPricePerKg + spratPricePerKg * 0.8;
    let scatTotalPrice = scatPricePerKg * scadKgs;

    let clamTotalPrice = clamKgs * 7.5;

    let bill = bonitoTotalPrice + scatTotalPrice + clamTotalPrice;

    console.log(bill.toFixed(2));
}
fishLand(["6.90",
    "4.20",
    "1.5",
    "2.5",
    "1"
])