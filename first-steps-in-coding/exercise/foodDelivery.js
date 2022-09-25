function foodDelivery(input) {
    let chickenMenuPrice = Number(input[0]) * 10.35;
    let fishMenuPrice = Number(input[1]) * 12.4;
    let vegetarianMenuPrice = Number(input[2]) * 8.15;
    let allMenuPrice = chickenMenuPrice + fishMenuPrice + vegetarianMenuPrice;
    let dessertPrice = allMenuPrice * 20 / 100;
    let deliveryPrice = 2.5;
    let sum = allMenuPrice + dessertPrice + deliveryPrice;
    console.log(sum);
}
foodDelivery(["9 ",
    "2 ",
    "6 "])