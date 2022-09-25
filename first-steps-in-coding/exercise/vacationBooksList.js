function vacationBooksList(input) {

    let pagesCount = Number(input[0]);
    let pagesReadPerHour = Number(input[1]);
    let daysToReadBook = Number(input[2]);

    let timeToReadBook = pagesCount / pagesReadPerHour;
    let timeToReadPerDay = timeToReadBook / daysToReadBook;

    console.log(timeToReadPerDay);
}

vacationBooksList(["432 ",
"15 ",
"4 "])