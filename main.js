
const urlParams =  new URLSearchParams(window.location.search);

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

    const pti = urlParams.get('pti');
    if(pti === 'true'){
        // Play bell on 5-minute intervals
        const minutes = now.getMinutes();

        const warningMinutes = [5,11,17,23,29,35,41,47,53,59];
        const shortMinutes = [0,6,12,18,24,30,36,42,48,54];

        console.log(minutes);
        if (warningMinutes.includes(minutes) && minutes !== lastPlayedWarningMinute ) {
            warning.currentTime = 0;
            warning.play();
            lastPlayedWarningMinute = minutes;
        }
        if (shortMinutes.includes(minutes) && minutes !== lastPlayedShortMinute ) {
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

const exam = urlParams.get('exam') === 'true';
if(exam){
    document.getElementById('exam-details').style.display = 'block';
    document.title = 'OFG Exam Clock';
}

document.body.addEventListener('click', toggleDarkMode);
setInterval(updateTime, 1000);
updateTime();





