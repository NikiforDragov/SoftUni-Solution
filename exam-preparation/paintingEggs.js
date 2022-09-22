function paintingEggs(input) {
    let eggSize = input[0];
    let eggColor = input[1];
    let eggCount = Number(input[2]);

    let price = 0;

    switch (eggSize) {
        case 'Large':
            switch (eggColor) {
                case 'Red':
                    price = eggCount * 16;
                    break;
                case 'Green':
                    price = eggCount * 12;
                    break;
                case 'Yellow':
                    price = eggCount * 9;
                    break;
            }
            break;
        case 'Medium':
            switch (eggColor) {
                case 'Red':
                    price = eggCount * 13;
                    break;
                case 'Green':
                    price = eggCount * 9;
                    break;
                case 'Yellow':
                    price = eggCount * 7;
                    break;
            }
            break;
        case 'Small':
            switch (eggColor) {
                case 'Red':
                    price = eggCount * 9;
                    break;
                case 'Green':
                    price = eggCount * 8;
                    break;
                case 'Yellow':
                    price = eggCount * 5;
                    break;
            }
            break;
    }
    let finalPrice = price * 0.65;
    console.log(`${finalPrice.toFixed(2)} leva.`);
}
paintingEggs(["Medium",
    "Green",
    "5"])

