function salary(input) {
    let index = 0;
    let n = Number(input[index]);
    index++
    let salary = Number(input[index]);
    index++

    for (let i = 0; i < n; i++) {
        let page = input[index]
        index++
        switch (page) {
            case 'Facebook':
                salary -= 150;
                break;
            case 'Instagram':
                salary -= 100;
                break;
            case 'Reddit':
                salary -= 50;
                break;
        }
        if (salary <= 0) {
            console.log(`You have lost your salary.`);
            break;
        }
    }
     if(salary > 0) {
        console.log(salary)
    }
}
salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])










