

const APP_KEY = "a056d929d0ce4d80aad54904442ffa0a";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APP_KEY}&units=metric
`;

    console.log(url);
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;

    })

}

function onGeoError() {}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);