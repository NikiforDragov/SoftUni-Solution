function filmPremiere(input) {
    let film = input[0];
    let package = input[1];
    let ticketsCount = Number(input[2]);

    let totalPrice = 0;

    switch (film) {
        case 'John Wick':
            switch (package) {
                case 'Drink':
                    totalPrice = ticketsCount * 12.00;
                    break;
                case 'Popcorn':
                    totalPrice = ticketsCount * 15.00;
                    break;
                case 'Menu':
                    totalPrice = ticketsCount * 19.00;
                    break;
            }
            break;
        case 'Star Wars':
            switch (package) {
                case 'Drink':
                    totalPrice = ticketsCount * 18.00;
                    break;
                case 'Popcorn':
                    totalPrice = ticketsCount * 25.00;
                    break;
                case 'Menu':
                    totalPrice = ticketsCount * 30.00;
                    break;
            }
            if (ticketsCount >= 4) {
                totalPrice = totalPrice * 0.70;
            }
            break;
        case 'Jumanji':
            switch (package) {
                case 'Drink':
                    totalPrice = ticketsCount * 9.00;
                    break;
                case 'Popcorn':
                    totalPrice = ticketsCount * 11.00;
                    break;
                case 'Menu':
                    totalPrice = ticketsCount * 14.00;
                    break;
            }
            if (ticketsCount === 2) {
                totalPrice = totalPrice * 0.85;
            }
            break;
    }
    console.log(`Your bill is ${totalPrice.toFixed(2)} leva.`);
}
filmPremiere(["Jumanji",
    "Menu",
    "2"])

