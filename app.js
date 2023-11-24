const countDownDate = new Date("Jan 1, 2024 12:00:01").getTime();


const countdownfunction = setInterval(function() {

    
    const now = new Date().getTime();
    
    
    const distance = countDownDate - now;
    
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    
    document.querySelector('.days').innerText = days;
    document.querySelector('.hours').innerText = hours;
    document.querySelector('.minutes').innerText = minutes;
    document.querySelector('.seconds').innerText = seconds;
    
   
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("countdown").innerHTML = "HNY";
    }
}, 1000);