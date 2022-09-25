function tradeCommissions(input) {
    let town = input[0];
    let saleVolume = Number(input[1]);
    let commission = 0;

    if(town === "Sofia") {
        if(saleVolume >= 0 && saleVolume <= 500) {
            commission = saleVolume * 0.05;
        } else if(saleVolume > 500 && saleVolume <= 1000) {
            commission = saleVolume * 0.07;
        } else if(saleVolume > 1000 && saleVolume <= 10000) {
            commission = saleVolume * 0.08;
        } else if(saleVolume > 10000) {
            commission = saleVolume * 0.12
        } 
    } else if(town === "Varna") {
        if(saleVolume >= 0 && saleVolume <= 500){
            commission = saleVolume * 0.045;
        } else if(saleVolume > 500 && saleVolume <= 1000) {
            commission = saleVolume * 0.075;
        } else if(saleVolume > 1000 && saleVolume <= 10000) {
            commission = saleVolume * 0.10;
        } else if(saleVolume > 10000) {
            commission = saleVolume * 0.13
        }
    } else if(town === "Plovdiv") {
        if(saleVolume >=0 && saleVolume <= 500) {
            commission = saleVolume * 0.055;
        } else if(saleVolume > 500 && saleVolume <= 1000) {
            commission = saleVolume * 0.08;
        } else if(saleVolume > 1000 && saleVolume <= 10000) {
            commission = saleVolume * 0.12;
        } else if(saleVolume > 10000) {
            commission = saleVolume * 0.145
        }
    }
    
    if(town !== "Sofia" && town !== "Varna" && town !== "Plovdiv" || saleVolume < 0) {
        console.log('error')
    } else {
        console.log(commission.toFixed(2));
    }
    
}
tradeCommissions(["Varna",
"350824"])
