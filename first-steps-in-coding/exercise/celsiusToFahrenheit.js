function celsiusToFahrenheit(input) {
    //degrees Celsius times 9 divided by 5 plus 32
    let celsius = Number(input[0]);
    let fahrenheit = (celsius * 9) / 5 + 32;

    console.log(fahrenheit.toFixed(2));
}
celsiusToFahrenheit(["0"])