function seriesCalculator(input) {
    let filmName = input[0];
    let seasonsCount = Number(input[1]);
    let episodesCount = Number(input[2]);
    let rawEpisodeTime = Number(input[3]);

    let episodeTimeTotal = rawEpisodeTime * 1.20;
    let bonusTime = seasonsCount * 10;

    let timeNeeded = episodeTimeTotal * episodesCount * seasonsCount + bonusTime;

    console.log(`Total time needed to watch the ${filmName} series is ${Math.floor(timeNeeded)} minutes.`);
}
seriesCalculator(["Riverdale",
"3",
"21",
"45"])


