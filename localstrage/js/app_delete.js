let del_2 = document.getElementById('del_2');
let del_all = document.getElementById('del_all');
let data = localStorage.getItem('data');
let data2 = localStorage.getItem('data2');
let suuji = document.getElementById("suuji");
reflash();

//■遷移先のページ

// ▼キーを指定して削除(1)
del_1.addEventListener("click", function(){
// ■■■■■■■■■■■■■■■■■■■■
	localStorage.removeItem('data');
	reflash();
// ■■■■■■■■■■■■■■■■■■■■
});
// キーを指定して削除(2)
del_2.addEventListener("click", function(){
	localStorage.removeItem('data2');
	reflash();
});

// ▼全てを削除
// 初期化
del_all.addEventListener("click", function(){
// ■■■■■■■■■■■■■■■■■■■■
	localStorage.clear();
	reflash();
// ■■■■■■■■■■■■■■■■■■■■
}); 

//localStorageからデータを出して表示する関数
function reflash(){
	data = localStorage.getItem('data');
	data2 = localStorage.getItem('data2');
	suuji.innerHTML = data + "," + data2;
}
