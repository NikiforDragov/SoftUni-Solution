function petFood(input) {
    let dogFood = 2.50 * input[0];
    let catFood = 4 * input[1];
    let summ = dogFood + catFood;
    console.log(`${summ} lv.`)
}
petFood(['13 ', '9 '])