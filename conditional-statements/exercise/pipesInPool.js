function pipesInPool(input) {

    let poolVolume = Number(input[0]);
    let firstPipeVolume = Number(input[1]);
    let secondPipeVolume = Number(input[2]);
    let workerMissingTime = Number(input[3]);

    let firstPipeDone = workerMissingTime * firstPipeVolume;
    let secondPipeDone = workerMissingTime * secondPipeVolume;
    let bothPipesDone = firstPipeDone + secondPipeDone;

    let bothPipesPercentage = (bothPipesDone * 100) / poolVolume;
    let firstPipePercentage = (firstPipeDone * 100) / bothPipesDone; 
    let secondPipePercentage = (secondPipeDone * 100) / bothPipesDone;

    if (bothPipesPercentage <= 100) {
        console.log(`The pool is ${bothPipesPercentage.toFixed(2)}% full. Pipe 1: ${firstPipePercentage.toFixed(2)}%. Pipe 2: ${secondPipePercentage.toFixed(2)}%.`);
    } else {
        let waterOverloaded = bothPipesDone - poolVolume;
        console.log(`For ${workerMissingTime} hours the pool overflows with ${waterOverloaded.toFixed(2)} liters.`)
    }
}
pipesInPool(['100',
    '100',
    '100',
    '2.5'
])



//процент от цяло = част х 100 / цялото