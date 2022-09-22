function uniquePinCodes(input) {
    let maxForA = Number(input[0]);
    let maxForB = Number(input[1]);
    let maxForC = Number(input[2]);

    for (let a = 2; a <= maxForA; a++) {
        for (let b = 2; b <= maxForB; b++) {
            for (let c = 2; c <= maxForC; c++) {
                if (a % 2 === 0 && b === 2 && c % 2 === 0) {
                    console.log(`${a} ${b} ${c}`)
                } else if (a % 2 === 0 && b === 3 && c % 2 === 0) {
                    console.log(`${a} ${b} ${c}`)
                } else if (a % 2 === 0 && b === 5 & c % 2 === 0) {
                    console.log(`${a} ${b} ${c}`)
                } else if (a % 2 === 0 && b === 7 && c % 2 === 0) {
                    console.log(`${a} ${b} ${c}`)
                }
            }
        }
    }
}
uniquePinCodes(["8",
    "2",
    "8"])

