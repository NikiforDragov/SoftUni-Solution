function basketballEquipment(input) {

    let trainingMembershipPerYear = Number(input[0]);
    let sneakersPrice = Number(input[0]) - Number(input[0]) * 40 / 100;
    let jearseyPrice = sneakersPrice - sneakersPrice * 20 / 100;
    let basketballPrice = jearseyPrice * 25 / 100;
    let accessoryPrice = basketballPrice * 20 / 100;
    let totalprice = trainingMembershipPerYear + sneakersPrice + jearseyPrice + basketballPrice + accessoryPrice;

    console.log(totalprice);
}

basketballEquipment(["550 "])