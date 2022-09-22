function suppliesForSchool(input) {

    let pencilsCount = Number(input[0]);
    let markerCount = Number(input[1]);
    let litersDetergent = Number(input[2]);
    let discount = Number(input[3]) / 100;

    let pencilsPrice = pencilsCount * 5.8;
    let markerPrice = markerCount * 7.2;
    let detergentPrice = litersDetergent * 1.2;

    let money = pencilsPrice + markerPrice + detergentPrice;

    let discountPrice = money - (money * discount);

    console.log(discountPrice);
}
suppliesForSchool(["2 ",
"3 ",
"4 ",
"25 "])