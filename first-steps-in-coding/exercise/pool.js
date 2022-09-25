function poolDay(input) {

    let peopleCount = Number(input[0]);
    let entranceFee = peopleCount * Number(input[1]);
    let seatPrice = Math.ceil((peopleCount * 75 / 100)) * Number(input[2]);
    let umbrellaPrice = Math.ceil((peopleCount * 50 / 100)) * Number(input[3]);
    let totalPrice = entranceFee + seatPrice + umbrellaPrice;
    let fixedTotalPrice = totalPrice.toFixed(2);
    console.log(`${fixedTotalPrice} lv. `);
}
poolDay((["50",
    "6",
    "8",
    "4"])
)
