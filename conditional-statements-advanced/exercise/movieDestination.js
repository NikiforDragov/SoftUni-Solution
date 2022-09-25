function movieDestination(input) {
    let filmBudget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let dayCount = input[3];

    let finalPrice = 0

    switch (season) {
        case 'Winter':
            switch (destination) {
                case 'Dubai': 
                finalPrice = (dayCount * 45000) * 0.70;
                break;
                case 'Sofia': 
                finalPrice = (dayCount * 17000) * 1.25;
                break;
                case 'London': 
                finalPrice = dayCount * 24000;
                break;
            }
            break;
        case 'Summer':
            switch (destination) {
                case 'Dubai': 
                finalPrice = (dayCount * 40000) * 0.70;
                break;
                case 'Sofia': 
                finalPrice = (dayCount * 12500) * 1.25;
                break;
                case 'London': 
                finalPrice = dayCount * 20250;
                break;
            }
            break;
    }
      let diff = Math.abs(filmBudget - finalPrice);
      if(filmBudget >= finalPrice) {
        console.log(`The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`);
      } else {
        console.log(`The director needs ${diff.toFixed(2)} leva more!`);
      }
}
movieDestination(["1000000",
"Dubai",
"Summer",
"5"])

