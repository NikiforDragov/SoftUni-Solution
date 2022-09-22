function oscarsCeremony(input) {

    let loungeRent = Number(input[0]);

    let statuesPrice = loungeRent - (loungeRent * 0.3);
    let cateringPrice = statuesPrice - (statuesPrice * 0.15);
    let soundPrice = cateringPrice - (cateringPrice * 0.5);

    let sum = loungeRent + statuesPrice + cateringPrice + soundPrice;

    console.log(sum.toFixed(2));
}
oscarsCeremony((["5555"]));