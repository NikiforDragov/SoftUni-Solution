function trainTheTrainers(input) {
    let index = 0;

    let peopleCount = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let presentationCounter = 0;
    let totalAvg = 0;

    while (command !== 'Finish') {
        let presentationName = command;
        presentationCounter++;

        let currentGradeSum = 0;

        for (let i = 0; i < peopleCount; i++) {
            let grade = Number(input[index]);
            index++;
            currentGradeSum += grade;
        }
        let currentAvgGrade = currentGradeSum / peopleCount;
        totalAvg += currentAvgGrade;
        console.log(`${presentationName} - ${currentAvgGrade.toFixed(2)}.`);

        command = input[index];
        index++;
    }
    let totalPercentage = totalAvg / presentationCounter;
    console.log(`Student's final assessment is ${totalPercentage.toFixed(2)}.`);
}
trainTheTrainers(["2",
    "Objects and Classes",
    "5.77",
    "4.23",
    "Dictionaries",
    "4.62",
    "5.02",
    "RegEx",
    "2.88",
    "3.42",
    "Finish"])



