let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
console.log("緯度：" + data["coord"]["lon"]);
console.log("緯度：" + data["coord"]["lat"]);
console.log("天気：" + data.weather[0]["description"]);
console.log("最低気温：" + data["coord"]["lon"]);
console.log("最高気温：" + data["coord"]["lon"]);
console.log("湿度：" + data["coord"]["lon"]);
console.log("風速：" + data["coord"]["lon"]);
console.log("風向：" + data["coord"]["lon"]);
console.log("都市名：" + data["coord"]["lon"]);

let div1 = document.querySelector('div#result');
let p1 = document.createElement('p');
p1.textContent = '緯度：' + data["coord"]["lon"];
div1.insertAdjacentElement('beforeend', p1);

//let div2 = document.querySelector('div#result');
let p1 = document.createElement('p');
p1.textContent = '緯度：' + data["coord"]["lon"];
div1.insertAdjacentElement('beforeend', p1);

//let div3 = document.querySelector('div#result');
let p1 = document.createElement('p');
p1.textContent = "天気：" + data.weather[0]["description"];
div1.insertAdjacentElement('beforeend', p1);

//let div4 = document.querySelector('div#result');
let p1 = document.createElement('p');
p1.textContent = "最低気温：" + data["coord"]["lon"];
div1.insertAdjacentElement('beforeend', p1);

//let div5 = document.querySelector('div#result');
let p1 = document.createElement('p');
p1.textContent = "最高気温：" + data["coord"]["lon"];
div1.insertAdjacentElement('beforeend', p1);

//let div6 = document.querySelector('div#result');
let p1 = document.createElement('p');
p1.textContent = "湿度：" + data["coord"]["lon"];
div1.insertAdjacentElement('beforeend', p1);

//let div1 = document.querySelector('div#result');
let p1 = document.createElement('p');
p1.textContent = "風速：" + data["coord"]["lon"];
div1.insertAdjacentElement('beforeend', p1);

//let div1 = document.querySelector('div#result');
let p1 = document.createElement('p');
p1.textContent = "風向：" + data["coord"]["lon"];
div1.insertAdjacentElement('beforeend', p1);

//let div1 = document.querySelector('div#result');
let p1 = document.createElement('p');
p1.textContent = "都市名：" + data["coord"]["lon"];
div1.insertAdjacentElement('beforeend', p1);
