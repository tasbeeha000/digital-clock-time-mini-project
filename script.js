function updateClock(){
    let currentDate= new Date();
console.log(currentDate);

let hour=currentDate.getHours();
let minutes=currentDate.getMinutes();
let seconds=currentDate.getSeconds();


document.getElementById('hours').innerHTML=addLeadingZero(hour)+'<sub class="sub-text "style="">hrs</sub>';

document.getElementById('min').innerHTML= addLeadingZero(minutes)+'<sub class="sub-text ">mins</sub>';

document.getElementById('sec').innerHTML=addLeadingZero(seconds)+'<sub class="sub-text ">sec</sub>';

}

setInterval(updateClock, 1000);

function addLeadingZero(number) {
return String(number).padStart(2, '0');
}
