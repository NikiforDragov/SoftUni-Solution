function movieDay(input) {
    let photosTime = Number(input[0]);
    let scenesCount = Number(input[1]);
    let sceneLength = Number(input[2]);

    let preparationTime = photosTime * 0.15;
    let movieTime = scenesCount * sceneLength;
    let totalTime = movieTime + preparationTime;

    let diff = Math.abs(photosTime - totalTime);

    if (photosTime >= totalTime) {
        console.log(`You managed to finish the movie on time! You have ${Math.round(diff)} minutes left!`)
    } else {
        console.log(`Time is up! To complete the movie you need ${Math.round(diff)} minutes.`)
    }
}
movieDay(["120",
    "10",
    "11"])
