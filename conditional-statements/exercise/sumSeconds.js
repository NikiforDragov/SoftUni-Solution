function sumSeconds(input) {

    let firstTimeInSec = Number(input[0]);
    let secondTimeInSec = Number(input[1]);
    let thirdTimeInSec = Number(input[2]);

    let sumTimeInSec = firstTimeInSec + secondTimeInSec + thirdTimeInSec;

    let timeInMin = Math.floor(sumTimeInSec / 60);
    let timeInSec = sumTimeInSec % 60;
    if (timeInSec < 10) {
        console.log(`${timeInMin}:0${timeInSec}`);
    } else {
        console.log(`${timeInMin}:${timeInSec}`);
    }
}
sumSeconds(["14", "12",
    "10"])



