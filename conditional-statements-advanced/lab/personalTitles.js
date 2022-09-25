function personalTitles(input) {

    let years = Number(input[0]);
    let gender = input[1];

    if (gender === 'f') {
        if (years < 16) {
            console.log('Miss');
        }
        if (years >= 16) {
            console.log('Ms.');
        }
    }

    if (gender === 'm') {
        if (years < 16) {
            console.log('Master');
        }
        if (years >= 16) {
            console.log('Mr.');
        }
    }
}
personalTitles(["12", "f"])
