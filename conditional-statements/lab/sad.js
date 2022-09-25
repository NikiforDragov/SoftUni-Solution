function areaCalculation(input) {
  let shape = input[0];
  let area = 0;
  if (shape === "square") {
    let side = Number(input[1]);
    area = side * side;
  } else if (shape === "rectangle") {
    let sideA = Number(input[1]);
    let sideB = Number(input[2]);
    area = sideA * sideB;
  }
  console.log(area);
}
areaCalculation(["square", "5"])