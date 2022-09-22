function excursion(input) {
    let peopleCount = Number(input[0]);
    let nightsCount = Number(input[1]);
    let cardsCount = Number(input[2]);
    let ticketCount = Number(input[3]);

    let nightsForOne = nightsCount * 20;
    let cardsForOne = cardsCount * 1.60;
    let ticketsForOne = ticketCount * 6.00;

    let sumForOne = nightsForOne + cardsForOne + ticketsForOne;

    let sumForAll = sumForOne * peopleCount
    let sumWithDiscount = sumForAll * 1.25;

    console.log(sumWithDiscount.toFixed(2));
}
excursion(["131",
    "9",
    "33",
    "46"])

