var obj = document.getElementsByClassName('questions');
for(var i = 0; i< obj.length; i++){
	document.getElementsByClassName('container-header')[0].innerHTML+= "<span></span>";
}
document.getElementsByClassName("container-header")[0].children[0].classList.add('active-page');



function nextPage(obj){
	var max = document.getElementsByClassName("container-header")[0].children.length;
	var index = parseInt(obj.parentElement.classList[2].substring(1));
	if(index<max){
		togglePages(index, index+1);
		console.log('nextPage');
	}
	else{
		lastPage(index);
		console.log('lastPage');
	}
}

function togglePages(curr, next){
	var currentPage = 'q'+ curr;
	var nextPage = 'q'+ next;
	document.getElementsByClassName(currentPage)[0].classList.add('animate-slide-out');
	var progress = document.getElementsByClassName("container-header")[0].children;
	progress[curr-1].classList.remove('active-page');
	setTimeout(function(){
		document.getElementsByClassName(currentPage)[0].classList.remove('animate-slide-out');
		document.getElementsByClassName(currentPage)[0].classList.remove('active-question');
		progress[next-1].classList.add('active-page');
		document.getElementsByClassName(nextPage)[0].classList.add('animate-slide-in');
		setTimeout(function(){
			document.getElementsByClassName(nextPage)[0].classList.add('active-question');
			document.getElementsByClassName(nextPage)[0].classList.remove('animate-slide-in');
		},500)
	},600);
}

function lastPage(curr){
	var currentPage = 'q'+ curr;
	document.getElementsByClassName('container')[0].classList.add('animate-slide-away');
}

