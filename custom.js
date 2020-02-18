var text= document.getElementById('heading');
var input = 100;
var rangeSlider = document.getElementById("rs-range-line");
var rangeBullet = document.getElementById("rs-bullet");

rangeSlider.addEventListener("input", showSliderValue, false);

function showSliderValue() {
	rangeBullet.innerHTML = rangeSlider.value;
	var bulletPosition = (rangeSlider.value /rangeSlider.max);
	var input=bulletPosition * 578;
	rangeBullet.style.left = input + "px";
	console.log(bulletPosition* 578);
	var shadow= '';
	for (var i = 0;i<=input;i++) {
		shadow +=(shadow? ',':'')+ i*1+'px '+i*1+'px 0 #adadad';
	}
	text.style.textShadow = shadow;
}
