
//検索機能
let p = document.querySelector('#print');
p.addEventListener('click', sendRequest);

function Showid() {
	let x = document.querySelector('select[name="id"]');
  let id = x.value;
	return id;
}

function Showinfo() {
  let y = document.querySelector('select#weather');
  let info = y.value;
	return info;
}

//通信処理
function sendRequest() {
  Wid = Showid();
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
  Wr = Showinfo();
  let pW = document.createElement('p');
  console.log(wr);
  if(Wr == 'coord.lon') {
    pW.textContent = "緯度：" + data.coord.lon;
    console.log(data.coord.lon);
    div1.insertAdjacentElement('beforeend', pW);
  } /*else if(wr == coord.lat) {
    pW.textContent = "緯度：" + data["name"];
    console.log(緯度);
  } else if(wr == coord.lon) {
    pW.textContent = "緯度：" + data["name"];
    console.log(緯度);
  } else if(wr == coord.lon) {
    pW.textContent = "緯度：" + data["name"];
    console.log(緯度);
  } else if(wr == coord.lon) {
    pW.textContent = "緯度：" + data["name"];
    console.log(緯度);
  } else if(wr == coord.lon) {
    pW.textContent = "緯度：" + data["name"];
    console.log(緯度);
  }*/

}


// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}

/*
<div>
      <input type="checkbox" name="weather" id="coord.lon" value="coord.lon">
      <label for="lon">緯度</label>
    </div>
    <div>
      <input type="checkbox" name="weather" id="coord.lat" value="coord.lat">
      <label for="lat">経度</label>
    </div>
    <div>
      <input type="checkbox" name="weather" id="weather.description" value="weather.description">
      <label for="lat">天気</label>
    </div>
    <div>
      <input type="checkbox" name="weather" id="main.temp_min" value="main.temp_min">
      <label for="lon">最低気温</label>
    </div>
    <div>
      <input type="checkbox" name="weather" id="main.temp_min" value="main.temp_min">
      <label for="lat">最高気温</label>
    </div>
    <div>
      <input type="checkbox" name="weather" id="main.humidity" value="main.humidity">
      <label for="lat">湿度</label>
    </div>
    <div>
      <input type="checkbox" name="weather" id="wind.speed" value="wind.speed">
      <label for="lat">風速</label>
    </div>
    <div>
      <input type="checkbox" name="weather" id="wind.deg" value="wind.deg">
      <label for="lat">風向</label>
    </div>
*/ 