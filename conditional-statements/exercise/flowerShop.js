function flowerShop(input) {

    let magnoliaCount = Number(input[0]);
    let hyacinthCount = Number(input[1]);
    let roseCount = Number(input[2]);
    let cactusCount = Number(input[3]);
    let giftPrice = Number(input[4]);

    let magnoliaPrice = magnoliaCount * 3.25;
    let hyacinthPrice = hyacinthCount * 4.00;
    let rosePrice = roseCount * 3.50;
    let cactusPrice = cactusCount * 8;

    let sumPrice = (magnoliaPrice + hyacinthPrice + rosePrice + cactusPrice) * 0.95;

    let diff = Math.abs(sumPrice - giftPrice);

    if (sumPrice >= giftPrice) {
        console.log(`She is left with ${Math.floor(diff)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(diff)} leva.`);
    }
}

flowerShop(['2',
    '3',
    '5',
    '1',
    '50'
])