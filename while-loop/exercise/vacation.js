function vacation(input) {
    let index = 0;
    let moneyNeededForVacation = Number(input[index]);
    index++;
    let startingMoney = Number(input[index]);
    index++;

    let command = input[index];
    index++;
    let currentMoney = Number(input[index]);
    index++;

    let dayCounter = 0;
    let spendCounter = 0;

    while (command === 'save' || command === 'spend') {
        dayCounter++;

        switch (command) {
            case 'save':
                startingMoney += currentMoney;
                spendCounter === 0;
                break;
            case 'spend':
                spendCounter++;
                if (spendCounter === 5) {
                    break;
                }
                startingMoney -= currentMoney
                if (startingMoney < 0) {
                    startingMoney = 0;
                }
                break;
        }

        command = input[index];
        index++;
        currentMoney = Number(input[index]);
        index++;

    }
    if (startingMoney >= moneyNeededForVacation) {
        console.log(`You saved the money for ${dayCounter} days.`);
    } else {
        console.log("You can't save the money.");
        console.log(dayCounter);
    }

}
vacation(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"])


