function pets(input) {

    let daysMissing = Number(input[0]);
    let foodLeftInKg = Number(input[1]);
    let foodForDogPerDayInKg = Number(input[2]);
    let foodForCatPerDayInKg = Number(input[3]);
    let foodForTurtlePerDayInGr = Number(input[4]);

    let dogFood = daysMissing * foodForDogPerDayInKg;
    let catFood = daysMissing * foodForCatPerDayInKg;
    let turtleFoodInKg = (daysMissing * foodForTurtlePerDayInGr) / 1000;

    let totalFood = dogFood + catFood + turtleFoodInKg;

    let diff = Math.abs(foodLeftInKg - totalFood);

    if (foodLeftInKg >= totalFood) {
        console.log(`${Math.floor(diff)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
    }
}
pets(['2',
    '10',
    '1',
    '1',
    '1200'
])

pets(['5',
    '10',
    '2.1',
    '0.8',
    '321'
])