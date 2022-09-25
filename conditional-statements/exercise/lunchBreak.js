function lunchBreak(input) {

    let filmName = input[0];
    let episodeLength = Number(input[1]);
    let lunchBrakeLength = Number(input[2]);

    let timeForEating = lunchBrakeLength / 8;
    let timeToRest = lunchBrakeLength / 4;
    let sumTime = timeForEating + timeToRest;
    let timeLeft = lunchBrakeLength - sumTime;

    let diff = Math.abs(timeLeft - episodeLength);

    if (timeLeft >= episodeLength) {
        console.log(`You have enough time to watch ${filmName} and left with ${Math.ceil(diff)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${filmName}, you need ${Math.ceil(diff)} more minutes.`);
    }
}
lunchBreak(["Game of Thrones",
    "60",
    "96"])




