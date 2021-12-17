const form = document.querySelector('.select');
const locate = document.querySelector('.locate');
const btn = document.querySelector('.btn');
const screen = document.querySelector('.screen')
    

function getWeather(town) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${town}&lang=fr&appid=3b654112ffbe95656eb2859213523848`)
    .then(res => 
        res.json()
    )
    .then(res => {
        return res
    })
    .catch( err => console.log(err))
}

function checkCategory(str){
    if (str === 'Clear') {
        const screen = document.querySelector('.screen')
        let para = document.createElement("p");
        para.textContent = "Clear";
        let image = document.createElement("img");
        image.src = "image/sun.svg"
        screen.appendChild(para)
        screen.appendChild(image)
        return'Img clear'
    } if (str === 'Snow') {
        const screen = document.querySelector('.screen')
        let para = document.createElement("p");
        para.textContent = "Snow";
        let image = document.createElement("img");
        image.src = "image/snow.svg"
        screen.appendChild(para)
        screen.appendChild(image)
        return'Img snow';
    } if (str === 'Clouds') {
        const screen = document.querySelector('.screen')
        let para = document.createElement("p");
        para.textContent = "Clouds";
        let image = document.createElement("img");
        image.src = "image/clouds.svg"
        screen.appendChild(para)
        screen.appendChild(image)
        return'Img clouds';
    } if (str === 'Cloudy') {
        const screen = document.querySelector('.screen')
        let para = document.createElement("p");
        para.textContent = "Cloudy";
        let image = document.createElement("img");
        image.src = "image/cloudy.svg"
        screen.appendChild(para)
        screen.appendChild(image)
        return'Img cloudy';
    } if (str === 'Rain') {
        const screen = document.querySelector('.screen')
        let para = document.createElement("p");
        para.textContent = "rain";
        let image = document.createElement("img");
        image.src = "image/rain.svg"
        screen.appendChild(para)
        screen.appendChild(image)
        return'Img rain';
    }
}

function displayDay(méteo){
    const screen = document.querySelector('.screen')
    let para = document.createElement("p");
    para.textContent = "Clear";
    let image = document.createElement("img");
    image.src = "image/sun.svg"
    screen.appendChild(para)
    screen.appendChild(image) 
}
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('submit', (event) => {
        event.preventDefault();
        let town = document.getElementsByClassName('locate').town.value;
        getWeather(town).then(res => {
          console.log(checkCategory(res.weather[0].main))
          //displayDay()
        })
    })
})