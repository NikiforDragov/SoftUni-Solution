function tennisRanklist(input) {
    let index = 0;
    let tournamentCount = Number(input[index]);
    index++;

    let startingPoint = Number(input[index]);
    index++;

    let currentPoints = 0;
    let winCounter = 0;

    for (let i = 0; i < tournamentCount; i++) {
        let result = input[index];
        index++;

        switch (result) {
            case 'W':
                currentPoints += 2000;
                winCounter++;
                break;
            case 'F':
                currentPoints += 1200;
                break;
            case 'SF':
                currentPoints += 720;
                break;
        }
    }
    let finalPoints = startingPoint + currentPoints;
    let avgPoints = currentPoints / tournamentCount;
    let winPercentage = winCounter / tournamentCount * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    console.log(`${winPercentage.toFixed(2)}%`);
}
tennisRanklist(["4",
    "750",
    "SF",
    "W",
    "SF",
    "W"])

