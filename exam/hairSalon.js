function hairSalon(input) {
    let index = 0;
    let target = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let income = 0;

    let isReached = false;

    while (command !== 'closed') {
        let currentService = command;
        let currentServiceType = input[index];
        index++;

        switch (currentService) {
            case 'haircut':
                switch (currentServiceType) {
                    case 'mens': income += 15;
                        break;
                    case 'ladies': income += 20;
                        break;
                    case 'kids': income += 10;
                        break;
                }
                break;
            case 'color':
                switch (currentServiceType) {
                    case 'touch up': income += 20;
                        break;
                    case 'full color': income += 30;
                        break;
                }
                break;
        }
        if (income >= target) {
            isReached = true;
            break;
        }

        command = input[index];
        index++;
    }

    let diff = Math.abs(target - income);

    if (isReached) {
        console.log('You have reached your target for the day!');
    } else {
        console.log(`Target not reached! You need ${diff}lv. more.`)
    }
    console.log(`Earned money: ${income}lv.`);
}
hairSalon(["50",
"color",
"full color",
"haircut",
"ladies"])

