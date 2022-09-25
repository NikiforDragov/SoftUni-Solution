function coins(input) {
    let moneyLeftInLv = Number(input[0]);
    let currentMoney = Math.floor(moneyLeftInLv * 100);

    let coinsCounter = 0

    while (currentMoney > 0) {
        coinsCounter++

        if (currentMoney >= 200) {
            currentMoney -= 200;
        } else if (currentMoney >= 100) {
            currentMoney -= 100;
        } else if (currentMoney >= 50) {
            currentMoney -= 50;
        } else if (currentMoney >= 20) {
            currentMoney -= 20;
        } else if (currentMoney >= 10) {
            currentMoney -= 10;
        } else if (currentMoney >= 5) {
            currentMoney -= 5;
        } else if (currentMoney >= 2) {
            currentMoney -= 2;
        } else {
            currentMoney -= 1;
        }

    }
    console.log(coinsCounter)
}
coins(["0.56"])