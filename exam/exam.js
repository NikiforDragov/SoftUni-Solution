function exam(input) {
    let index = 0;
    let studentsCount = Number(input[index]);
    index++;

    let groupOneCounter = 0 // >= 5.00
    let groupTwoCounter = 0 // 4 - 4.99
    let groupThreeCounter = 0 // 3 - 3.99
    let groupForCounter = 0 // < 3
    let gradeSum = 0

    for (let i = 0; i < studentsCount; i++) {
        let currentGrade = Number(input[index])
        index++;

        gradeSum += currentGrade;

        if (currentGrade >= 5.00) {
            groupOneCounter++;
        } else if (currentGrade >= 4 && currentGrade <= 4.99) {
            groupTwoCounter++;
        } else if (currentGrade >= 3 && currentGrade <= 3.99) {
            groupThreeCounter++;
        } else {
            groupForCounter++
        }
    }

    let groupOnePercentage = groupOneCounter / studentsCount * 100;
    let groupTwoPercentage = groupTwoCounter / studentsCount * 100;
    let groupThreePercentage = groupThreeCounter / studentsCount * 100;
    let groupForPercentage = groupForCounter / studentsCount * 100;

    let avg = gradeSum / studentsCount;

    console.log(`Top students: ${groupOnePercentage.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${groupTwoPercentage.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${groupThreePercentage.toFixed(2)}%`);
    console.log(`Fail: ${groupForPercentage.toFixed(2)}%`);
    console.log(`Average: ${avg.toFixed(2)}`);
}
exam(["6",
    "2",
    "3",
    "4",
    "5",
    "6",
    "2.2"])

