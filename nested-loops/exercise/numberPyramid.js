function numberPyramid(input) {
    let num = Number(input[0]);

    let current = 1;
    let isBigger = false;
    let print = "";

    for (let y = 1; y <= num; y++) {
        for (let x = 1; x <= y; x++) {
            if (current > num) {
                isBigger = true;
                break;
            }
            print += current + " ";
            current++
        }
      console.log(print);
      print = ""
      if(isBigger) {
        break;
      }
    }
}
numberPyramid(["15"])