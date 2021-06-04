console.log("hello world");


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}

function duckCompliment(){
	alert("WATCH IT BUD");
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);
document.querySelector("img").addEventListener("mouseover", duckCompliment)
