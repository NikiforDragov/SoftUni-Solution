function graduation(input) {
    let name = input[0];
    let grades = 1
    let index = 0;
    let sum = 0;
    let excluded = 0;

    while (grades <= 12) {
        index++
        let yearGrade = Number(input[index]);
        if (yearGrade >= 4) {
            sum += yearGrade;
            grades++;
        } else {
            excluded++
            break;
        }
    }
    let avgGrade = sum / 12;

    if (excluded >= 1) {
        console.log(`${name} has been excluded at ${grades} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }
}
graduation(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"])


