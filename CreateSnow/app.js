const box = document.querySelector(".snow_img")

setInterval(snowing, 1);
function snowing() {
    const snow = document.createElement('span')
    snow.classList.add('home')
    
    snow.style.left = `${Math.random() * window.innerWidth}px`
    snow.style.animationDuration = `${Math.random() * 10 + 2}s`
    snow.style.opacity = `${Math.random()}`
    let snower= snow.style.width = `${Math.random() * 10 + 6}px`
    snow.style.height=snower
    

    box.appendChild(snow)

    setTimeout(() => {
        snow.remove()
    }, 5000);
}


function countdown() {
    var currentDate = new Date(); 
    var newYear = new Date(currentDate.getFullYear() + 1, 0, 1);
    var timeLeft = newYear - currentDate;

    var daysLeft = addZero( Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
    var hoursLeft = addZero( Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))); 
    var minutesLeft = addZero( Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
    var secondsLeft = addZero( Math.floor((timeLeft % (1000 * 60)) / 1000));

    document.getElementById("countdown").innerText = daysLeft + " kun: " + hoursLeft + " soat: " + minutesLeft + " minut: " + secondsLeft + " sekund"; // Natijani HTML elementiga joylash

    setTimeout(countdown, 100);
}

countdown();


function addZero (clock){
    if(clock < 10 ){
        return clock = `0${clock}`
    }  
    else{
        return clock
    }
}

x