function repainting(input) {
    //⦁	Предпазен найлон - 1.50 лв. за кв. метър
    //⦁	Боя - 14.50 лв. за литър
    //⦁	Разредител за боя - 5.00 лв. за литър

    let nylonPrice = (Number(input[0]) + 2) * 1.5;
    let paint = Number(input[1]);
    let bonusPaint = Number(input[1]) / 10;
    let paintPrice = (paint + bonusPaint) * 14.5;
    let diluent = Number(input[2]) * 5;
    let bagPrice = 0.4;
    let supplyPrice = nylonPrice + paintPrice + diluent + bagPrice;
    let workerSalary = (supplyPrice * 30 / 100) * Number(input[3]);
    let sumPrice = supplyPrice + workerSalary;
    console.log(sumPrice);
}
repainting(["5 ",
    "10 ",
    "10 ",
    "1 "])
