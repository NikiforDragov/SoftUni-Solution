function accountBalance(input) {
    let totalSum = 0;
    let index = 0
    let sumIncrease = input[index]

    while (sumIncrease !== "NoMoreMoney") {
        sumIncrease = Number(input[index]);
        if (sumIncrease < 0) {
            console.log('Invalid operation!');
            break;
        }
        totalSum += sumIncrease;
        console.log(`Increase: ${sumIncrease.toFixed(2)}`);
        index++;
        sumIncrease = input[index];
    }
    console.log(`Total: ${totalSum.toFixed(2)}`);
}
accountBalance(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"])
