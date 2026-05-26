function updateTime() {
    const now = new Date();
    const aestTime = now.toLocaleTimeString('en-AU', { timeZone: 'Australia/Sydney', hour12: true });
    const aestDate = now.toLocaleDateString('en-AU', { timeZone: 'Australia/Sydney', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('time').innerHTML = aestTime;
    document.getElementById('date').innerHTML = aestDate;

}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}


document.body.addEventListener('click', toggleDarkMode);
setInterval(updateTime, 1000);
updateTime();
