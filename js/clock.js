
// 변수를 정의

const clock = document.querySelector("h2#clock");



//현재 시간을 나타내는 function 정의

function displayTime() {
    let date = new Date();
    let hour = date.getHours().toString().padStart(2, '0');
    let minute = date.getMinutes().toString().padStart(2, '0');
    let second = date.getSeconds().toString().padStart(2, '0');

    let time =  `${hour}:${minute}:${second}`;

    clock.innerHTML = time;

}

displayTime();
setInterval(displayTime, 1000);





