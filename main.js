function updateTime() {
    const now = new Date();
    const aestTime = now.toLocaleString('en-AU', { timeZone: 'Australia/Sydney' });
    document.getElementById('timer').innerHTML = aestTime;
}

setInterval(updateTime, 1000);
updateTime();
