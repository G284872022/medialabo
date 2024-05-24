//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let h2 = document.querySelector('h2#ex42');
let p1 = document.createElement('p');
p1.textContent = '写真表と緯度経度のページです'; 
p1.style.textEmphasis='sesame green';
h2.insertAdjacentElement('afterend',p1);

// 練習4-3 写真表作成プログラム
let div = document.querySelector('div#phototable');
let photo = document.createElement('img');
photo.setAttribute('src','taro.png')
let p2 = document.createElement('p');
p2.insertAdjacentElement('beforeend',photo);
div.insertAdjacentElement('beforeend',p2);
let photo2 = document.createElement('img');
photo2.setAttribute('src','jiro.png')
let p3 = document.createElement('p');
p3.insertAdjacentElement('beforeend',photo2);
div.insertAdjacentElement('beforeend',p3);
let photo3 = document.createElement('img');
photo3.setAttribute('src','hanako.png')
let p4 = document.createElement('p');
p4.insertAdjacentElement('beforeend',photo3);
div.insertAdjacentElement('beforeend',p4);
// 練s習4-4 箇条書き削除プログラム
let li = document.querySelectorAll('ul#location > li');
for (let element of li) {
    element.remove();
}


// 練習4-5 箇条書き追加プログラム
let ul = document.querySelector('ul#location');
let sap = document.createElement('li');
for(const {name, lat, lng} of Object.keys(data[0])) {
	sap.textContent = name+' ... '+'緯度:'+lat+', 経度:'+lng;
}
ul.insertAdjacentElement('beforeend',sap); 
/*let sen = document.createElement('li');
for(let {name, lat, lng} of data[1]) {
	sen.textContent = name+' ... '+'緯度:'+lat+', 経度:'+lng;
}
ul.insertAdjacentElement('beforeend',sen); 
let sin = document.createElement('li');
for(let {name, lat, lng} of data[2]) {
	sin.textContent = name+' ... '+'緯度:'+lat+', 経度:'+lng;
}
ul.insertAdjacentElement('beforeend',sin); 
let nag = document.createElement('li');
for(let {name, lat, lng} of data[3]) {
	nag.textContent = name+' ... '+'緯度:'+lat+', 経度:'+lng;
}
ul.insertAdjacentElement('beforeend',nag);
let ohs = document.createElement('li');
for(let {name, lat, lng} of data[4]) {
	ohs.textContent = name+' ... '+'緯度:'+lat+', 経度:'+lng;
}
ul.insertAdjacentElement('beforeend',ohs); 
let hir = document.createElement('li');
for(let {name, lat, lng} of data[5]) {
	hir.textContent = name+' ... '+'緯度:'+lat+', 経度:'+lng;
}
ul.insertAdjacentElement('beforeend',hir); 
let koh = document.createElement('li');
for(let {name, lat, lng} of data[6]) {
	koh.textContent = name+' ... '+'緯度:'+lat+', 経度:'+lng;
}
ul.insertAdjacentElement('beforeend',koh); 
let fuk = document.createElement('li');
for(let {name, lat, lng} of data[7]) {
	fuk.textContent = name+' ... '+'緯度:'+lat+', 経度:'+lng;
}
ul.insertAdjacentElement('beforeend',fuk); 
let kag = document.createElement('li');
for(let {name, lat, lng} of data[8]) {
	kag.textContent = name+' ... '+'緯度:'+lat+', 経度:'+lng;
}
ul.insertAdjacentElement('beforeend',kag);  
let oki = document.createElement('li');
for(let {name, lat, lng} of data[9]) {
	oki.textContent = name+' ... '+'緯度:'+lat+', 経度:'+lng;
}
ul.insertAdjacentElement('beforeend',oki); */