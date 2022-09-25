function paintingEggs(input) {
    let eggSize = input[0];
    let eggColor = input[1];
    let saleCount = Number(input[2]);

    let price = 0;

    switch (eggSize) {
        case 'Large':
            switch (eggColor) {
                case 'Red':
                    price = saleCount * 16;
                    break;
                case 'Green':
                    price = saleCount * 12;
                    break;
                case 'Yellow':
                    price = saleCount * 9;
                    break;
            }
            break;
        case 'Medium':
            switch (eggColor) {
                case 'Red':
                    price = saleCount * 13;
                    break;
                case 'Green':
                    price = saleCount * 9;
                    break;
                case 'Yellow':
                    price = saleCount * 7;
                    break;
            }
            break;
        case 'Small':
            switch (eggColor) {
                case 'Red':
                    price = saleCount * 9;
                    break;
                case 'Green':
                    price = saleCount * 8;
                    break;
                case 'Yellow':
                    price = saleCount * 5;
                    break;
            }
            break;
    }
    let finalPrice = price * 0.65;
    console.log(`${finalPrice.toFixed(2)} leva.`);
}

paintingEggs(["Small",
    "Yellow",
    "3"])


