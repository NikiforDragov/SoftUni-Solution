function harvest(input) {

    let grapeFieldArea = Number(input[0]);
    let grapeFromSquareM = Number(input[1]);
    let wineLitersNeeded = Number(input[2]);
    let workersCount = Number(input[3]);

    let grapeProduction = grapeFieldArea * grapeFromSquareM;
    let wine = (grapeProduction * 0.40) / 2.5;

    let diff = Math.abs(wine - wineLitersNeeded);

    if (wine >= wineLitersNeeded) {
        let wineForWorkers = diff / workersCount;
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(diff)} liters left -> ${Math.ceil(wineForWorkers)} liters per person.`);
    } else {
        console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`);
    }
}
harvest(['1020',
    '1.5',
    '425',
    '4'
])