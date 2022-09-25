function movieProfit(input) {
    let filmName = input[0];
    let daysCount = Number(input[1]);
    let ticketsCount = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let percentageForCinema = Number(input[4]);

    let ticketIncome = daysCount * ticketsCount * ticketPrice;
    let totalIncome = ticketIncome - (ticketIncome * percentageForCinema / 100);

    console.log(`The profit from the movie ${filmName} is ${totalIncome.toFixed(2)} lv.`);
}
movieProfit(["Python Basics",
"40",
"34785",
"10.45",
"14"])
