const hour=document.querySelector('.hrs');
const minute=document.querySelector('.min');
const second=document.querySelector('.sec');

let sound = new Audio("assets/audio/tick.wav");


setInterval(runClock,1000);

function runClock(){
    const time=new Date();
    const sec=time.getSeconds()/60;
    const min=(sec+time.getMinutes())/60;
    const hrs=(min+time.getHours())/12;
    hour.style.setProperty('--rotation',hrs*360);
    minute.style.setProperty('--rotation',min*360);
    second.style.setProperty('--rotation',sec*360);

    sound.play()
    sound.loop = true;

}

runClock();


// Autoplay the audio
window.onloadedmetadata = function() {
    sound.play();
    sound.loop = true;
};

