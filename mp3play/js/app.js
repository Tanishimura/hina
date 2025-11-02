
// ■オーディオオブジェクトを準備
// ※パスは読み込み元のindex.htmlから見たもの↓
var music = new Audio('sound/pasuteruhausu.mp3');
music.play();  // 再生
music.pause();  // 一時停止
music.currentTime = 0;	// 再生時間を頭にする

// ■再生するための下準備
let playing = 0;	// 再生中かどうか判定するフラグ
let play_btn = document.getElementById('play_btn');	// 再生ボタン要素取得

// ■再生ボタンを押したときの挙動
play_btn.addEventListener('click', function(){
	if(playing==0){
		music.play();
		playing = 1;
		// console.log(playing);
	}else{
		music.pause();
		playing = 0;
		// console.log(playing);
	}
});