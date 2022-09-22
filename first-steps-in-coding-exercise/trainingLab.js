function trainingLab(input) {

    let w = Number(input[0]) * 100; //дължина в метри
    let h = Number(input[1]) * 100 - 100; //широчина в метри
    // workplaceW = 120cm;
    // workplaceH = 70cm;
    // corridor = 100cm

    let workplaceCountInW = (w - w % 120) / 120;
    let workplaceCountInH = (h - h % 70) / 70;

    let workplaceInLab = (workplaceCountInW * workplaceCountInH) - 3;

    console.log(workplaceInLab);
}
trainingLab(["8.4",
    "5.2"
])