function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = input[2];
    let finalPrice = 0


    if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') {
        switch (fruit) {
            case 'banana': finalPrice = quantity * 2.50; break;
            case 'apple': finalPrice = quantity * 1.20; break;
            case 'orange': finalPrice = quantity * 0.85; break;
            case 'grapefruit': finalPrice = quantity * 1.45; break;
            case 'kiwi': finalPrice = quantity * 2.70; break;
            case 'pineapple': finalPrice = quantity * 5.50; break;
            case 'grapes': finalPrice = quantity * 3.85; break;
        }
    } else if (day === 'Saturday' || day === 'Sunday') {
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
    if (finalPrice > 0) {
        console.log(finalPrice.toFixed(2));
    } else {
        console.log('error');
    }
}

fruitShop(["tomato",
"Tuesday",
"2"])


