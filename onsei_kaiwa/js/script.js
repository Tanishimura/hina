// HTML要素を取得
let btn1 = document.getElementById("btn1");
let contena = document.getElementById("contena");
let contena_ai = document.getElementById("contena_ai");

// HTML要素にイベントを設置
btn1.addEventListener("click", function(){
	// contena.innerHTML = "contenaのinnerHTMLが更新されました。";
	// recognition.start();
});

setInterval(rec_start, 1000);
function rec_start(){
	recognition.start();
}