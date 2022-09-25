function cinema(input) {
    let type = input[0];
    let rows = Number(input[1]);
    let column = Number(input[2]);

    let income = 0
     
    if(type === 'Premiere') {
        income = rows * column * 12.00;
    } else if (type === 'Normal') {
        income = rows * column * 7.50;
    } else {
        income = rows * column * 5.00;
    }
    console.log(`${income.toFixed(2)} leva.`);
}