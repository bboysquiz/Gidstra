let buttonHeader = document.querySelector('#button-popup-header');
let buttonFooter = document.querySelector('#button-popup-footer');
let close = document.querySelector('#close');
let overlay = document.querySelector('.popup-overlay');
let container = document.querySelector('.popup__container');


buttonHeader.onclick = function(event) {
	show();
}
buttonFooter.onclick = function(event) {
	show();
}

let popup = document.querySelector('.popup');
popup.onclick = function(event) {
    if(event.target.className == overlay.className || event.target.id == close.id){
    	hide();
    }
}



function show(){
	let popup = document.querySelector('.popup');
    popup.style.display = "flex";
    let overlay = document.querySelector('.popup-overlay');
    overlay.style.display = "flex";
    let container = document.querySelector('.popup__container');
    container.style.display = "flex";
}
function hide(){
	let popup = document.querySelector('.popup');
    popup.style.display = "none";
    let overlay = document.querySelector('.popup-overlay');
    overlay.style.display = "none";
    let container = document.querySelector('.popup__container');
    container.style.display = "none";
}