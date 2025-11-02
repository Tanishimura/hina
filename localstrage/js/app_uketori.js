//遷移先のページ
//localStorageからデータを出す
// ■■■■■■■■■■■■■■■■■■■■
var data = localStorage.getItem('data');
var data2 = localStorage.getItem('data2');
// ■■■■■■■■■■■■■■■■■■■■

suuji = document.getElementById("suuji");
suuji.innerHTML = data + "," + data2;