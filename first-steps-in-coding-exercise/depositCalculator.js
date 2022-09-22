function depositCalculator(input) {

    let depositVolume = Number(input[0]);
    let monthDeposit = Number(input[1]);
    let yearDepositPercentage = Number(input[2]);

    let yearDepositInterest = depositVolume * (yearDepositPercentage / 100);
    let monthDepositInterest = yearDepositInterest / 12;
    let totalDepositInterest = depositVolume + monthDeposit * monthDepositInterest;
    
    console.log(totalDepositInterest);
}
depositCalculator(["2350",
"6 ",
"7 "])
    
