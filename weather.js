

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

function Showinfo() {
  let y = document.querySelector('select[name="info"]');
  let info = y.value
	return info;
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
  
  //検索結果の削除
  let divd = document.querySelectorAll('div#result > p');
  for (let element of divd) {
    element.remove();
  }

  //検索結果の表示（都市名）
  let div1 = document.querySelector('div#result');
  let pC = document.createElement('p');
  pC.textContent = "都市名：" + data["name"];
  div1.insertAdjacentElement('beforeend', pC);

  let pW = document.createElement('p');
  pW.textContent = "都市名：" + data["name"];
}

// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}