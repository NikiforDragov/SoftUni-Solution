function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMin = Number(input[3]);

    let examTimeMin = (examHour * 60) + examMin;
    let arriveTimeMin = (arriveHour * 60) + arriveMin;

    let hour = 0;
    let min = 0;
    let diff = Math.abs(arriveTimeMin - examTimeMin);

    if (arriveTimeMin > examTimeMin) {
        console.log('Late');
        if (diff < 60) {
            min = diff % 60;
            console.log(`${min} minutes after the start`);
        } else {
            hour = Math.floor(diff / 60);
            min = diff % 60
            if (min < 10) {
                console.log(`${hour}:0${min} hours after the start`);
            } else {
                console.log(`${hour}:${min} hours after the start`);
            }
        }
    } else if (arriveTimeMin <= examTimeMin && diff <= 30) {
        if (diff !== 0) {
            console.log('On time');
            console.log(`${diff} minutes before the start`);
        } else {
            console.log('On time');
        }
    } else {
        console.log('Early');
        if (diff >= 60) {
            hour = Math.floor(diff / 60);
            min = diff % 60;
            if (min < 10) {
                console.log(`${hour}:0${min} hours before the start`);
            } else {
                console.log(`${hour}:${min} hours before the start`);
            }
        } else {
            min = diff % 60;
            console.log(`${min} minutes before the start`);
        }
    }
}
onTimeForTheExam(["0",
"0",
"0",
"0"])












