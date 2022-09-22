function sumOfTwoNumbers(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let magic = Number(input[2]);

    let combinationCounter = 0;
    let isFound = false;

    for (let firstNumber = start; firstNumber <= end; firstNumber++) {
        for (let secondNumber = start; secondNumber <= end; secondNumber++) {
            combinationCounter++
            let res = firstNumber + secondNumber;
            if (res === magic) {
                console.log(`Combination N:${combinationCounter} (${firstNumber} + ${secondNumber} = ${magic})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${combinationCounter} combinations - neither equals ${magic}`);
    }
}
sumOfTwoNumbers(["23",
    "24",
    "20"])

