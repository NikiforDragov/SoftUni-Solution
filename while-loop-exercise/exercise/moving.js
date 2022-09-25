function moving(input) {
    let index = 0;
    let freeSpaceWidth = Number(input[index]);
    index++;
    let freeSpaceLength = Number(input[index]);
    index++;
    let freeSpaceHeight = Number(input[index]);
    index++;

    let freeSpaceInCubic = freeSpaceWidth * freeSpaceLength * freeSpaceHeight;

    let action = input[index];
    index++;

    while (action !== 'Done') {
        let boxCount = Number(action);
        freeSpaceInCubic -= boxCount;

        if (freeSpaceInCubic <= 0) {
            break;
        }

        action = input[index];
        index++;
    }

    if (action === 'Done') {
        console.log(`${freeSpaceInCubic} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${Math.abs(freeSpaceInCubic)} Cubic meters more.`);
    }
}
moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"])

