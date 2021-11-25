function init() {
	// insert email address
	var email = document.createElement('a');
	email.innerHTML = 'contact';
	email.href = 'mailto:contact.berneauguillaume@gmail.com';
	document.querySelector('#email').appendChild(email);

	// insert phone number
	var phone = document.createElement('a');
	phone.innerHTML = '+33&nbsp;(0)&nbsp;6&nbsp;58&nbsp;76&nbsp;62&nbsp;97';
	phone.href = 'tel:+33658766297';
	document.querySelector('#phone').appendChild(phone);

	// about section
	document.querySelector('button#info').addEventListener('click', () => {
		document.querySelector('#about').classList.toggle('active');
	});
}

function initSlider() {
	const slide = new Siema({
		selector: '#slider',
		duration: 0,
		perPage: 1,
		startIndex: 0,
		draggable: false,
		loop: true
	});

	document
		.querySelector('button#prev')
		.addEventListener('click', () => slide.prev());

	document
		.querySelector('button#next')
		.addEventListener('click', () => slide.next());

	document.addEventListener('keydown', e => {
		if (e.keyCode === 37) {
			slide.prev();
		} else if (e.keyCode === 39) {
			slide.next();
		}
	});
}

// Init
document.addEventListener('DOMContentLoaded', () => {
	init();
	initSlider();
});
