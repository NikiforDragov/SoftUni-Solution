function oldBooks(input) {
    let searchedBookName = input[0];

    let index = 1;
    let currentBookName = input[index];
    let booksChecked = 0;

    while (currentBookName !== 'No More Books') {

        if (currentBookName === searchedBookName) {
            break;
        }
        booksChecked++

        index++;
        currentBookName = input[index];
    }

    if (currentBookName === searchedBookName) {
        console.log(`You checked ${booksChecked} books and found it.`);
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${booksChecked} books.`);
    }
}
oldBooks(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"])


