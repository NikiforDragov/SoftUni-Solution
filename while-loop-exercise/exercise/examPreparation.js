function examPreparation(input) {
    let index = 0;

    let negativeGradesCount = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let negativeGradeCounter = 0;
    let problemsCounter = 0;
    let sumOfGrades = 0;
    let lastProblem = ''

    let isEnough = false;

    while (command !== "Enough") {
        lastProblem = command
        let currentGrade = Number(input[index]);
        index++
        problemsCounter++
        sumOfGrades += currentGrade;

        if (currentGrade <= 4) {
            negativeGradeCounter++
            if (negativeGradeCounter === negativeGradesCount) {
                isEnough = true;
                break;
            }
        }

        command = input[index];
        index++;
    }
    let avg = sumOfGrades / problemsCounter;
    if (command !== 'Enough') {
        console.log(`You need a break, ${negativeGradesCount} poor grades.`)
    } else {
        console.log(`Average score: ${avg.toFixed(2)}`);
        console.log(`Number of problems: ${problemsCounter}`);
        console.log(`Last problem: ${lastProblem}`)
    }
}
examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])


