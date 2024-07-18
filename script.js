const burger = document.querySelector('.burger__icon')
const burgerMenu = document.querySelector('.burger__menu')
let isOpen = false
function burgerOpen() {
	if (isOpen== false) {
		burgerMenu.style.display ='block'
		isOpen = true
	}else{
		burgerMenu.style.display ='none'
		isOpen = false
	}
}
