const paneles = document.querySelectorAll('.panel');

paneles.forEach((panel)=>{
	panel.addEventListener("click",()=>{
		removeActiveClasses()
		panel.classList.add("active");
	})
});

function removeActiveClasses(){
	paneles.forEach((panel)=>{
		panel.classList.remove("active");
	})
}

/*
function random(min,max)
{
	return Math.floor(Math.random() * (max - min)) + min;
}

function choice(){
	removeActiveClasses();
	paneles[random(0,paneles.length)].classList.add("active")
}

setInterval(choice,3000);
*/