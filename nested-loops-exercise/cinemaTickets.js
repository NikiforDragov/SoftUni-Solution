function cinemaTickets(input) {
    let index = 0;

    let command = input[index];
    index++;
    let capacity = Number(input[index]);
    index++;

    let totalTicket = 0;
    let studentTicketCount = 0;
    let standardTicketCount = 0;
    let kidTicketCount = 0;
    let filmCount = 0;

    while (command !== 'Finish') {
        let filmName = command;
        filmCount++;
        let currentCapacity = Number(capacity);

        let currentCommand = input[index];
        index++;

        let soldTicket = 0

        while (currentCommand !== 'End') {
            let ticketType = currentCommand;
            soldTicket++;

            switch (ticketType) {
                case 'student': studentTicketCount++; break;
                case 'standard': standardTicketCount++; break;
                case 'kid': kidTicketCount++; break;
            }
            if (soldTicket === currentCapacity) {
                break;
            }
            currentCommand = input[index];
            index++;
        }
        totalTicket += soldTicket;
        let percentage = soldTicket / currentCapacity * 100;
        console.log(`${filmName} - ${percentage.toFixed(2)}% full.`);

        command = input[index];
        index++;
        capacity = input[index];;
        index++;
    }
    let studentTicketPercentage = studentTicketCount / totalTicket * 100;
    let standardTicketPercentage = standardTicketCount / totalTicket * 100;
    let kidTicketPercentage = kidTicketCount / totalTicket * 100;

    console.log(`Total tickets: ${totalTicket}`);
    console.log(`${studentTicketPercentage.toFixed(2)}% student tickets.`);
    console.log(`${standardTicketPercentage.toFixed(2)}% standard tickets.`);
    console.log(`${kidTicketPercentage.toFixed(2)}% kids tickets.`);

}
cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])
