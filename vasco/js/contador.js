const dayel = document.getElementById("days");
const hoursel = document.getElementById("hours");
const minel = document.getElementById("mins");
const secondsel = document.getElementById("seconds");

const promotion = "18 dec 2023";

function countdown(){
    const promotionDate =  new Date(promotion);
    const dataAtual =  new Date();

    const segundosTotais = (promotionDate - dataAtual) / 1000;

    const dias = Math.floor(segundosTotais / 3600 / 24);
    const horas = Math.floor(segundosTotais / 3600)% 24;
    const mins = Math.floor(segundosTotais / 60) % 60;
    const secs = Math.floor(segundosTotais) % 60;

    dayel.innerHTML = dias;
    hoursel.innerHTML = formatTime(horas);
    minel.innerHTML = formatTime(mins);
    secondsel.innerHTML = formatTime(secs);

   
}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown,1000);