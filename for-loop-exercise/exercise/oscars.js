function oscars(input) {
    let index = 0;
    let name = input[index];
    index++;
    let academyPoints = Number(input[index]);
    index++;
    let n = Number(input[index]);
    index++

    for (let i = 0; i < n; i++) {
        let currentName = input[index];
        index++;
        let currentPoints = Number(input[index]);
        index++;
        academyPoints += (currentName.length * currentPoints) / 2;
        if (academyPoints > 1250.5) {
            console.log(`Congratulations, ${name} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            break;
        }
    }
    
    if (academyPoints <= 1250.5) {
        let diff = Math.abs(academyPoints - 1250.5)
        console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`)
    }
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])



