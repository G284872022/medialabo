
//検索機能
let p = document.querySelector('#print');
p.addEventListener('click', sendRequest);

function Showid() {
	let x = document.querySelector('select[name="id"]');
  let id = x.value;
	return id;
}

function Showinfo() {
  let y = document.querySelector('select[name="weather"]');
  let info = y.value;
	return info;
}

//通信処理
function sendRequest() {
  Wid = Showid();
  Wr = Showinfo();
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

  //検索結果の表示（天候）
  let pW = document.createElement('p');
  if(Wr == "coord.lon") {
    pW.textContent = "緯度：" + data.coord.lon;
    div1.insertAdjacentElement('beforeend', pW);
  } else if(Wr == "coord.lat") {
    pW.textContent = "経度：" + data.coord.lon;
    div1.insertAdjacentElement('beforeend', pW);
  } else if(Wr == "weather.description") {
    pW.textContent = "天気：" + data.weather.description;
    div1.insertAdjacentElement('beforeend', pW);
  } else if(Wr == "main.temp_min") {
    pW.textContent = "最低気温：" + data.main.temp_min;
    div1.insertAdjacentElement('beforeend', pW);
  } else if(Wr == "main.temp_max") {
    pW.textContent = "最高気温：" + data.main.temp_max;
    div1.insertAdjacentElement('beforeend', pW);
  } else if(Wr == "main.humidity") {
    pW.textContent = "湿度：" + data.main.humidity;
    div1.insertAdjacentElement('beforeend', pW);
  } else if(Wr == "wind.speed") {
    pW.textContent = "風速：" + data.wind.speed;
    div1.insertAdjacentElement('beforeend', pW);
  } else if(Wr == "wind.deg") {
    pW.textContent = "風向き：" + data.wind.deg;
    div1.insertAdjacentElement('beforeend', pW);
  } 

}


// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}
