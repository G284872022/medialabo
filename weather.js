/*let data = {
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
};*/

////////// 課題3-2 ここからプログラムを書こう
/*console.log("緯度：" + data["coord"]["lon"]);
console.log("緯度：" + data["coord"]["lat"]);
console.log("天気：" + data.weather[0]["description"]);
console.log("最低気温：" + data["main"]["temp_min"]);
console.log("最高気温：" + data["main"]["temp_max"]);
console.log("湿度：" + data["main"]["humidity"]);
console.log("風速：" + data["wind"]["speed"]);
console.log("風向：" + data["wind"]["deg"]);
console.log("都市名：" + data["name"]);

let div1 = document.querySelector('div#result');
let p1 = document.createElement('p');
p1.textContent = '緯度：' + data["coord"]["lon"];
div1.insertAdjacentElement('beforeend', p1);

//let div2 = document.querySelector('div#result');
let p2 = document.createElement('p');
p2.textContent = '緯度：' + data["coord"]["lat"];
div1.insertAdjacentElement('beforeend', p2);

//let div3 = document.querySelector('div#result');
let p3 = document.createElement('p');
p3.textContent = "天気：" + data.weather[0]["description"];
div1.insertAdjacentElement('beforeend', p3);

//let div4 = document.querySelector('div#result');
let p4 = document.createElement('p');
p4.textContent = "最低気温：" + data["main"]["temp_min"];
div1.insertAdjacentElement('beforeend', p4);

//let div5 = document.querySelector('div#result');
let p5 = document.createElement('p');
p5.textContent = "最高気温：" + data["main"]["temp_max"];
div1.insertAdjacentElement('beforeend', p5);

//let div6 = document.querySelector('div#result');
let p6 = document.createElement('p');
p6.textContent = "湿度：" + data["main"]["humidity"];
div1.insertAdjacentElement('beforeend', p6);

//let div1 = document.querySelector('div#result');
let p7 = document.createElement('p');
p7.textContent = "風速：" + data["wind"]["speed"];
div1.insertAdjacentElement('beforeend', p7);

//let div1 = document.querySelector('div#result');
let p8 = document.createElement('p');
p8.textContent = "風向：" + data["wind"]["deg"];
div1.insertAdjacentElement('beforeend', p8);

//let div1 = document.querySelector('div#result');
let p9 = document.createElement('p');
p9.textContent = "都市名：" + data["name"];
div1.insertAdjacentElement('beforeend', p9);*/

//検索機能
let p = document.querySelector('#print');
p.addEventListener('click', sendRequest);

function Showid() {
	let x = document.querySelector('select[name="id"]');
  let id = x.value;
	return id;
}

//通信処理
function sendRequest() {
  Wid = Showid()
	let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + Wid + '.json';

	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}

// 通信が成功した時の処理
function showResult(resp) {
	let data = resp.data;

	if (typeof data === 'string') {
		data = JSON.parse(data);
	}
  console.log('通信成功');
  let pw = document.createElement('p');
  pw.textContent = "都市名：" + data["name"];
  div1.insertAdjacentElement('beforeend', pw);
}

// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}
