

let lastPlayedWarningMinute = -1;
let lastPlayedShortMinute = -1;

let warning = new Audio('./bell-warning.wav');
let short = new Audio('./bell-short.wav');

warning.muted = true;
short.muted = true;

function updateTime() {
    const now = new Date();
    const aestTime = now.toLocaleTimeString('en-AU', { timeZone: 'Australia/Sydney', hour12: true });
    const aestDate = now.toLocaleDateString('en-AU', { timeZone: 'Australia/Sydney', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('time').innerHTML = aestTime;
    document.getElementById('date').innerHTML = aestDate;

    const urlParams = new URLSearchParams(window.location.search);
    const pti = urlParams.get('pti');
    if(pti === 'true'){
        // Play bell on 5-minute intervals
        const minutes = now.getMinutes();

        console.log(minutes);
        if ((minutes % 10 === 4 || minutes % 10  === 9 ) && minutes !== lastPlayedWarningMinute ) {
            warning.currentTime = 0;
            warning.play();
            lastPlayedWarningMinute = minutes;
        }
        if ((minutes % 10  === 5 ||  minutes % 10  === 0) && minutes !== lastPlayedShortMinute ) {
            short.currentTime = 0;
            short.play();
            lastPlayedShortMinute = minutes;
        }
    }
}

function toggleDarkMode() {

    warning.muted = false;
    short.muted = false;


    document.body.classList.toggle('dark-mode');
}



document.body.addEventListener('click', toggleDarkMode);
setInterval(updateTime, 1000);
updateTime();





