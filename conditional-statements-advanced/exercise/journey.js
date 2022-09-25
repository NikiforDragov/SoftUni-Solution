function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination = 0;
    let vacationType = 0;
    let sumPrice = 0;

    if (budget <= 100) {
        destination = 'Bulgaria'
        switch (season) {
            case 'summer':
                vacationType = 'Camp';
                sumPrice = budget * 0.30;
                break;
            case 'winter':
                vacationType = 'Hotel';
                sumPrice = budget * 0.70;
                break;
        }
    } else if (budget > 100 && budget <= 1000) {
        destination = 'Balkans';
        switch (season) {
            case 'summer':
                vacationType = 'Camp';
                sumPrice = budget * 0.40;
                break;
            case 'winter':
                vacationType = 'Hotel';
                sumPrice = budget * 0.80;
                break;
        }
    } else {
        destination = 'Europe';
        vacationType = 'Hotel';
        sumPrice = budget * 0.90;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${vacationType} - ${sumPrice.toFixed(2)}`);
}
journey(["1500", "summer"])