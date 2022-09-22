function balls(input) {
    let ballsCount = Number(input[0]);

    let index = 1;
    let ballColor = input[index];
    index++;

    let points = 0;

    let redCounter = 0;
    let orangeCounter = 0;
    let yellowCounter = 0;
    let whiteCounter = 0;
    let blackCounter = 0;
    let otherCounter = 0;

    for (let i = 1; i <= ballsCount; i++) {
        switch (ballColor) {
            case 'red':
                points += 5;
                redCounter++;
                break;
            case 'orange':
                points += 10;
                orangeCounter++;
                break;
            case 'yellow':
                points += 15;
                yellowCounter++;
                break;
            case 'white':
                points += 20;
                whiteCounter++;
                break;
            case 'black':
                points = Math.floor(points / 2);
                blackCounter++;
                break;
            default: otherCounter++;
        }
        ballColor = input[index];
        index++;
    }
    console.log(`Total points: ${points}`);
    console.log(`Red balls: ${redCounter}`);
    console.log(`Orange balls: ${orangeCounter}`);
    console.log(`Yellow balls: ${yellowCounter}`);
    console.log(`White balls: ${whiteCounter}`);
    console.log(`Other colors picked: ${otherCounter}`);
    console.log(`Divides from black balls: ${blackCounter}`);
}
balls(['10',
'white',
'white',
'ee',
'red',
'orange',
'red',
'black',
'black',
'black',
'black'])

