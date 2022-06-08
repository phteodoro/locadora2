function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
        if(timer == 0){
            // duration = 0
            location.replace("Login.html")
            alert("Sua sessão expirou!")
        }
    }, 1000);
}
function cronometro() {
    var duration = 60 * 25; // Converter para segundos
    display = document.querySelector('#timer'); // selecionando o timer
        startTimer(duration, display); // iniciando o timer
    
};