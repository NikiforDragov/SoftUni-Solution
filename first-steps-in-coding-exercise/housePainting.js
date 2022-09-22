function housePainting(input) {

    let houseHeight = Number(input[0]);
    let sideWallLength = Number(input[1]);
    let triangleRoofHeight = Number(input[2]);

    let sideWallArea = houseHeight * sideWallLength;
    let sideWallBothWindow = (1.5 * 1.5) * 2;
    let bothSideWalls = 2 * sideWallArea - sideWallBothWindow;

    let backWall = houseHeight * houseHeight;
    let doorway = 1.2 * 2;
    let frontAndBackWall = backWall * 2 - doorway;

    let wallArea = bothSideWalls + frontAndBackWall;
    let greenPaintNeeded = wallArea / 3.4;
    console.log(greenPaintNeeded.toFixed(2))

    let roofRectanglesArea = 2 * (houseHeight * sideWallLength);
    let roofTrianglesArea = 2 * (houseHeight * triangleRoofHeight / 2);

    let roofArea = roofRectanglesArea + roofTrianglesArea;
    let redPaintNeeded = roofArea / 4.3;
    console.log(redPaintNeeded.toFixed(2));
}
housePainting(["6",
    "10",
    "5.2"
])