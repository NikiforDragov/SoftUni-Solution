function traveling(input) {
    let index = 0;
    let destination = input[index];
    index++;
    let moneyNeeded = Number(input[index]);
    index++

    while (destination !== 'End') {
        let isEnough = false;
        while (!isEnough) {
            let moneySaved = Number(input[index]);
            moneyNeeded -= moneySaved;
            if (moneyNeeded <= 0) {
                isEnough = true;
                console.log(`Going to ${destination}!`);
            }
            moneySaved = Number(input[index]);
            index++;
        }
        destination = input[index];
        index++;
        moneyNeeded = Number(input[index]);
        index++;
    }
}
traveling(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"])


