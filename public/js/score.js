function animateText(obj, maxValue){

	delayedLoop(obj, maxValue);
	
}
var k = 0;
function delayedLoop(obj, maxVal){
	setTimeout(function(){
		var out = "";
		//out+= k;
	
		if(k<10){
			out+= "00";
			out+= k;
		}
		else if(k<100){
			out+= "0";
			out+= k;
		}
		else{
			out+=k;
		}
		obj.getElementsByTagName('span')[0].innerHTML = out;
		k+=3
		if(k <= maxVal){
			delayedLoop(obj, maxVal);
		}
		else{
			obj.getElementsByTagName('span')[0].innerHTML = maxVal;
			return;
		}
	},1);

}

function showScores(value){
	document.getElementsByClassName('display-score')[0].classList.add('reveal-score');
	setTimeout(function(){
		animateText(document.getElementsByClassName('display-score')[0], value);
	},1000)
}