function sleepyTomCat(input) {

    let restDaysCount = Number(input[0]);
    let daysInYear = 365;
    let workDaysCount = daysInYear - restDaysCount;
    let playTimeNormInMin = 30000;

    let timeToPlayForYearInMin = (workDaysCount * 63) + (restDaysCount * 127);
    let diffWithPlayTimeNormInMin = playTimeNormInMin - timeToPlayForYearInMin;

    let hours = 0;
    let mins = 0;

    if (timeToPlayForYearInMin <= playTimeNormInMin) {
        hours = Math.abs(diffWithPlayTimeNormInMin / 60);
        mins = diffWithPlayTimeNormInMin % 60;
        console.log('Tom sleeps well');
        console.log(`${Math.floor(hours)} hours and ${mins} minutes less for play`);
    } else {
        hours = Math.abs(diffWithPlayTimeNormInMin / 60);
        mins = Math.abs(diffWithPlayTimeNormInMin % 60);
        console.log('Tom will run away');
        console.log(`${Math.floor(hours)} hours and ${mins} minutes more for play`);
    }
}
sleepyTomCat(['20'])