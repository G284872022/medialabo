
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
  let info = y.id;
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

  //検索結果の表示（天候）
  let wr = Showinfo();
  let rs = document.querySelectorAll('input[name="weather"]');
	for (let r of rs) {
		if (r.checked) {		// r が選択されていたら
      if (wr == coord.lon){
        let pW = document.createElement('p');
        pW.textContent =  wr + data["name"];
        div1.insertAdjacentElement('beforeend', pC);
      }
		}
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