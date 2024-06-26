// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let p = document.querySelector('#print');
p.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    kaisu += 1;
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let y = document.querySelector('input[name="yoso"]');
  let yoso = y.value;
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  let result;
  if(kaisu < 3){
    if (kotae == yoso){
        result = "正解です。おめでとう！";
        kaisu += 3;
      } else if (kotae > yoso){
        result = "まちがい。答えはもっと大きいですよ";
      } else {
        result = "まちがい。答えはもっと小さいですよ";
    }
  } else if(kaisu == 3){
    if(kotae == yoso){
        result = "正解です。おめでとう！!";
    } else {
        result = "まちがい。残念でした答えは" + kotae + "です。";
    }
  } else {
    result = "答えは" + kotae + "でした。すでにゲームは終わっています";
  }
  //回数
  let sp1 = document.querySelector('span#kaisu');
  sp1.textContent = kaisu;
  //予想
  let sp2 = document.querySelector('span#answer');
  sp2.textContent = yoso;
  //結果
  let p1 = document.querySelector('p#result');
  p1.textContent = result;

  console.log(kaisu + "回目の予想: " + yoso);
  console.log(result);
  // 課題3-1における出力先はコンソール
}


