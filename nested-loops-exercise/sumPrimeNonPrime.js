function sumPrimeNonPrime(input) {
    let index = 0;

    let command = input[index];
    index++;

    let sumPrimeNumber = 0;
    let sumNonPrimeNumber = 0;

    while (command !== 'stop') {
        let currentNumber = Number(command);

        if (currentNumber < 0) {
            console.log('Number is negative.');
            command = input[index];
            index++;
            continue;
        }
        if (currentNumber === 1) {
            sumPrimeNumber += currentNumber;
            command = input[index];
            index++;
            continue;
        }

        let isPrime = true;
        for (let i = 2; i < currentNumber; i++) {
            if (currentNumber % i === 0) {
                sumNonPrimeNumber += currentNumber;
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            sumPrimeNumber += currentNumber;
        }
        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrimeNumber}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNumber}`);

}
sumPrimeNonPrime(["30",
    "83",
    "33",
    "-1",
    "20",
    "stop"])

