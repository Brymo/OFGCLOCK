function updateTime() {
    const now = new Date();
    const aestTime = now.toLocaleString('en-AU', { timeZone: 'Australia/Sydney', hour12: false });
    const aestDate = now.toLocaleDateString('en-AU', { timeZone: 'Australia/Sydney' });
    document.getElementById('time').innerHTML = aestTime;
    document.getElementById('date').innerHTML = aestDate;
}

setInterval(updateTime, 1000);
updateTime();
