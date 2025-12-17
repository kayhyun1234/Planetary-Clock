function updateClock() {
    const now = new Date();

    const ms = String(now.getMilliseconds());
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('timeText').textContent = `${h}:${m}:${s}`;

    const dayName = now.toLocaleDateString('en-Us', { weekday: 'short' });
    const monthName = now.toLocaleDateString('en-US', { month: 'short' });
    const day = now.getDate();
    document.getElementById('dateText').textContent = `${dayName} ${monthName} ${day}`;

    const msDeg = (ms/1000) * 360;
    const secDeg = (now.getSeconds() + now.getMilliseconds() / 1000) * 6;
    const minDeg = (now.getMinutes() * 6) + (secDeg / 60);
    const hourDeg = ((now.getHours() % 12) * 30) + (minDeg / 12);

    document.querySelector('.moon-rotator').style.transform = `rotate(${msDeg}deg)`;
    document.querySelector('.second-orbit').style.transform = `rotate(${secDeg}deg)`;
    document.querySelector('.hour-orbit').style.transform = `rotate(${hourDeg}deg)`;
    document.querySelector('.minute-orbit').style.transform = `rotate(${minDeg}deg)`;
    document.querySelector('.second-orbit').style.transform = `rotate(${secDeg}deg)`

    requestAnimationFrame(updateClock);
}

updateClock();