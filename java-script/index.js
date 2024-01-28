console.log('Hello world')

const title = document.querySelector('#title')

title.addEventListener('click',(call)=>{
	if(title.classList.contains('red')){
		title.classList.remove('red')
	}else{
		title.classList.add('red')
	}
})