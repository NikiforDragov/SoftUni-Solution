function cake(input) {
    let cakeLength = Number(input[0]);
    let cakeWidth = Number(input[1]);
    let piecesCount = cakeLength * cakeWidth;

    let index = 2;

    let command = input[index];
    index++;

    while (command !== 'STOP') {
        let piecesToEat = Number(command);
        piecesCount -= piecesToEat;

        if (piecesCount <= 0) {
            break;
        }

        command = input[index];
        index++;
    }

    if (command === 'STOP') {
        console.log(`${piecesCount} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${Math.abs(piecesCount)} pieces more.`);
    }
}
cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"])

