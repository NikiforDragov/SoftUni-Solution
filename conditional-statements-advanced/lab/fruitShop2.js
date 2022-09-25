function fruitShop(input) {

    let fruit = input[0];
    let day = input[1];
    let quantity = input[2];

    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            switch (fruit) {
                case 'banana': finalPrice = quantity * 2.50; break;
                case 'apple': finalPrice = quantity * 1.20; break;
                case 'orange': finalPrice = quantity * 0.85; break;
                case 'grapefruit': finalPrice = quantity * 1.45; break;
                case 'kiwi': finalPrice = quantity * 2.70; break;
                case 'pineapple': finalPrice = quantity * 5.50; break;
                case 'grapes': finalPrice = quantity * 3.85; break;
            }
            switch (day) {
                case 'Saturday':
                case 'Sunday':
                    switch (fruit) {
                        case 'banana': finalPrice = quantity * 2.70; break;
                        case 'apple': finalPrice = quantity * 1.25; break;
                        case 'orange': finalPrice = quantity * 0.90; break;
                        case 'grapefruit': finalPrice = quantity * 1.60; break;
                        case 'kiwi': finalPrice = quantity * 3.00; break;
                        case 'pineapple': finalPrice = quantity * 5.60; break;
                        case 'grapes': finalPrice = quantity * 4.20; break;
                    }
            }
    }
}
fruitShop(["apple",
    "Tuesday",
    "2"])
