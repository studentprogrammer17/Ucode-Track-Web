let main = document.getElementById("main-block");

let apiKey = "15aab651bdda454a5072ccf50dadd393";

// Enerhodar coordinates
let lat = '47.499';
let lon = '34.657';

let apiPattern = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourely,alerts&units=metric&appid=${apiKey}`;

let xhr = new XMLHttpRequest(); // дает возможность делать http запросы
xhr.open('GET', apiPattern); // инициализируем
xhr.responseType = 'json'; // ожидаемый тип ответа - json - парсится автоматом
xhr.send(); // отправляем запрос

xhr.onload = function () {
    if (xhr.status != 200) { // Если у нас статус не равен 200, то произошла ошибочка)
        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    }
    else {
        console.log("все хорошо");
        let res = xhr.response;
        let list = res['daily'];

        for(let elem of list){
            let dayBlock = document.createElement('div');
            dayBlock.className = "day-block";
            let dt = new Date(elem['dt'] * 1000);
            let temp = elem['temp']['day'];
            let icon = elem['weather'][0]['icon'];

            let daynum = document.createElement('p');
            daynum.className = "daynum";
            let img = document.createElement('img');
            let temperature = document.createElement('span');
            temperature.className = "temp";
            let iconPattern = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            daynum.innerHTML = `${dt.getDate()}.0${dt.getMonth() + 1}`;
            console.log(elem['dt']);
            img.src = iconPattern;
            temperature.innerHTML = temp + '°';
            dayBlock.appendChild(daynum);
            dayBlock.appendChild(img);
            dayBlock.appendChild(temperature);
            main.appendChild(dayBlock);
        }
    }
}