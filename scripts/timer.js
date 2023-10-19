const eventDate = new Date().getTime() + 1000 * 60 * 30;// date of the Event we countdown - 30 minutes from refresh

const timer = setInterval(() => {
    const actualTime = new Date().getTime();
    const difference = eventDate - actualTime;

    const minutes = difference % (1000 * 60 * 60) / (1000 * 60);
    const seconds = difference % (1000 * 60) / 1000;

    const minDozens = Math.floor(minutes / 10);
    const minUnity = Math.floor(minutes % 10);
    const secDozens = Math.floor(seconds / 10);
    const secUnity = Math.floor(seconds % 10);

    const hMinDozens = document.getElementById('min-dozens');
    const hMinUnits = document.getElementById('min-unity');
    const hSecDozens = document.getElementById('sec-dozens');
    const hSecUnits = document.getElementById('sec-unity');

    hMinDozens.innerHTML = minDozens;
    hMinUnits.innerHTML = minUnity;
    hSecDozens.innerHTML = secDozens;
    hSecUnits.innerHTML = secUnity;

    if (difference < 0) {
        hMinDozens.innerHTML = 0;
        hMinUnits.innerHTML = 0;
        hSecDozens.innerHTML = 0;
        hSecUnits.innerHTML = 0;
        clearInterval(timer);
    }
}, 200);
