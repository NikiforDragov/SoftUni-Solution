function fishTank(input) {

    let length = Number(input[0]);
    let wight = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3]) / 100;
    let fishTankVolume = length * wight * height;
    let volumeInLiters = fishTankVolume / 1000;
    let litersNeeded = volumeInLiters * (1 - percentage);

    console.log(litersNeeded);
}
fishTank(["105 ",
    "77 ",
    "89 ",
    "18.5 "])