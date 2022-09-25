function areaOfFigures(input) {
    let shape = input[0]

    if (shape === "square") {
        let side = Number(input[1]);
        let area = side * side;
        console.log(area.toFixed(3));
    } else if (shape === "rectangle") {
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        let area = sideA * sideB;
        console.log(area.toFixed(3));
    } else if (shape === "circle") {
        let r = Number(input[1]);
        let area = Math.PI * (r * r);
        console.log(area.toFixed(3));
    } else if (shape === "triangle") {
        let side = Number(input[1]);
        let height = Number(input[2]);
        let area = side * height / 2;
        console.log(area.toFixed(3));
    }
}

areaOfFigures(["triangle",
"4.5",
"20"])


