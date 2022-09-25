function worldSwimmingRecord(input) {

    let recordInSec = Number(input[0]);
    let distanceInM = Number(input[1]);
    let timeForOneMInSec = Number(input[2]);

    let timeForDistanceToSwim = distanceInM * timeForOneMInSec;
    let slowingCount = Math.floor(distanceInM / 15);
    let slowingTime = slowingCount * 12.5;

    let sumTime = timeForDistanceToSwim + slowingTime;
    let diffWithRecord = Math.abs(sumTime - recordInSec);

    if (sumTime < recordInSec) {
        console.log(`Yes, he succeeded! The new world record is ${sumTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${diffWithRecord.toFixed(2)} seconds slower.`);
    }
}
worldSwimmingRecord(["55555.67",
"3017",
"5.03"])




