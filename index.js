<div class="clock">
    <div class="clock-face">
        <div class="hand hours"></div>
        <div class="hand minutes"></div>
        <div class="hand seconds"></div>
    </div>
</div>
.clock {
    width:20rem;
    height:20rem;
    border-style: solid;
    border-radius:50%;
}
.clock-face {
    width: 100%;
    height: 100%;
    transform: translateY(0px);
}
.hand {
    position: absolute;
    top:50%;
    width:50%;
    height:6px;
    transform-origin: 100%;
    transform: rotate(90deg);
}
.hours {
    background: linear-gradient(to right,  rgba(255,0,0,0) 0%, rgba(255,0,0,0) 30%,  black 30%,  black 100%);
}
.minutes {
    background: linear-gradient(to right,  rgba(255,0,0,0) 0%, rgba(255,0,0,0) 10%,  black 10%,  black 100%);
}
.seconds {
    background: linear-gradient(to right,  rgba(255,0,0,0) 0%, rgba(255,0,0,0) 10%,  black 10%,  black 100%);
    height:3px;
}
const secondsElement = document.querySelector('.seconds');
    const minutesElement = document.querySelector('.minutes');
    const hoursElement = document.querySelector('.hours');
    
    function setRotation(element, degrees) {
        // Set the rotation and add 90 to default from 12am
        element.style.transform = `rotate(${degrees+90}deg)`;
    }

    function updateClockHandsToCurrentTime() {
        // get the current time
        const now = new Date();

        // break it down to hours, minutes and seconds
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();
        
        // calc the rotation of each clock hand in degrees
        const secondsRotationDegrees = (seconds / 60) * 360;
        const minutesRotationDegrees = (minutes / 60) * 360 + (seconds/60)*6;
        const hoursRotationDegrees = (hours / 12) * 360 + (minutes/60)*30;

        setRotation(secondsElement, secondsRotationDegrees);
        setRotation(minutesElement, minutesRotationDegrees);
        setRotation(hoursElement, hoursRotationDegrees);
    }

    // Set the initial clock state, and update it every second
    setInterval(updateClockHandsToCurrentTime, 1000);
    updateClockHandsToCurrentTime();
    

