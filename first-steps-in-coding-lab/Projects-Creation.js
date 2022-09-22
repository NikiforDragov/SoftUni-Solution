function projectCreation(input) {
    let architectName = input[0];
    let projectCount = input[1];
    let projectTime = 3 * projectCount;
    console.log(`The architect ${architectName} will need ${projectTime} hours to complete ${projectCount} project/s.`);
}
projectCreation(['George', '1'])