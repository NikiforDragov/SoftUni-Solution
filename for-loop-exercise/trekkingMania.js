function trekkingMania(input) {
    let index = 0;
    let groupCount = Number(input[index]);
    index++;

    let musalaCounter = 0;
    let monblanCounter = 0;
    let kilimandzharoCounter = 0;
    let k2Counter = 0;
    let everestCounter = 0;


    for (let i = 0; i < groupCount; i++) {
        let peopleCount = Number(input[index]);
        index++;
        if (peopleCount <= 5) {
            musalaCounter += peopleCount;
        } else if (peopleCount >= 6 && peopleCount <= 12) {
            monblanCounter += peopleCount;
        } else if (peopleCount >= 13 && peopleCount <= 25) {
            kilimandzharoCounter += peopleCount;
        } else if (peopleCount >= 26 && peopleCount <= 40) {
            k2Counter += peopleCount;
        } else {
            everestCounter += peopleCount;
        }
    }
    let sumPeople = musalaCounter + monblanCounter + kilimandzharoCounter + k2Counter + everestCounter;

    let musalaPercentage = musalaCounter / sumPeople * 100;
    let monblanPercentage = monblanCounter / sumPeople * 100;
    let kilimandzharoPercentage = kilimandzharoCounter / sumPeople * 100;
    let k2Percentage = k2Counter / sumPeople * 100;
    let everestPercentage = everestCounter / sumPeople * 100;

    console.log(`${musalaPercentage.toFixed(2)}%`);
    console.log(`${monblanPercentage.toFixed(2)}%`);
    console.log(`${kilimandzharoPercentage.toFixed(2)}%`);
    console.log(`${k2Percentage.toFixed(2)}%`);
    console.log(`${everestPercentage.toFixed(2)}%`);
}
trekkingMania(["5",
    "25",
    "41",
    "31",
    "250",
    "6"])

