function greeningPrice(input) {
    let firstPrice = input[0] * 7.61;
    let discount = 0.18 * firstPrice;
    let finalPrice = firstPrice - discount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
greeningPrice(['150'])