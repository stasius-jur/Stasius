// document.querySelector('body > div > div:nth-child(1) > div.card-body.text-center > button')

window.addEventListener('DOMContentLoaded', function() {
	document.querySelector('#hello-world-button').addEventListener('click', function() {
		alert('Hello World!');
	});
});


// --------------------------- //

let input_case = document.getElementById('input-case');

document.querySelector('#div-case-buttons > button:nth-child(1)').addEventListener('click', function() {
	input_case.value = input_case.value.toUpperCase();
});

function toLowerCase() {
	input_case.value = input_case.value.toLowerCase();
}

document.querySelector('#div-case-buttons > button:nth-child(2)').addEventListener('click', toLowerCase);

function UpperCaseFirst(value) {
	return value.charAt(0).toUpperCase() + value.slice(1);
}

document.querySelector('#div-case-buttons > button:nth-child(3)').addEventListener('click', function() {
	input_case.value = UpperCaseFirst(input_case.value);
});

let button_case = document.querySelector('#div-case-buttons > button:nth-child(4)');

if (button_case) {
	button_case.addEventListener('click', function() {
		input_case.value = input_case.value.charAt(0).toLowerCase() + input_case.value.slice(1);
	});
}

// --------------------------- //

function validateEmail(email) {
	let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
	let re = /^\+3706[0-9]{7}$/;

	return re.test(String(phone).toLowerCase());
}

function errorAdd(element) {
	element.classList.add('border');
	element.classList.add('border-danger');

	element.nextSibling.nextSibling.style.display = 'block';
}

function errorRemove(element) {
	element.classList.remove('border');
	element.classList.remove('border-danger');

	element.nextSibling.nextSibling.style.display = 'none';
}

const form = document.getElementsByTagName('form')[0];

let email  = form.querySelector('input[type="email"]');
let number = form.querySelector('input[type="text"]');

form.addEventListener('submit', function(event) {
	// let email = this.querySelector('input[type="email"]');

	if (validateEmail(email.value) == false) {
		errorAdd(email);

		event.preventDefault();
	} else {
		errorRemove(email);
	}

	// let number = this.querySelector('input[type="text"]');

	if (validatePhone(number.value) == false) {
		errorAdd(number);

		event.preventDefault();
	} else {
		errorRemove(number);
	}
});

// --------------------------- //


let img = document.getElementById('image-over');

img.addEventListener('mouseover', function() {
	img.src = 'https://i.imgur.com/PLDVxza.jpg';
});

img.addEventListener('mouseout', function() {
	img.src = 'https://i.imgur.com/0DElr0H.jpg';
});

// --------------------------- //

const blockquote = document.querySelector('blockquote');

// blockquote.addEventListener('click', function() {
// 	console.log(this.innerText);
// })

let links = document.querySelectorAll('#actions-cursors > a');

const allowed_cursors = ['copy', 'text', 'pointer', 'help'];

for (let element of links) {
	element.addEventListener('click', function(event) {
		event.preventDefault();

		if (allowed_cursors.includes(this.textContent)){
			blockquote.style.cursor = this.textContent;
		}
	});
}


function removeColors() {
	for (let _class of blockquote.classList) {
		if (_class.startsWith('text-')) {
			blockquote.classList.remove(_class);
		}
	}
}

links = document.querySelectorAll('#actions-colors > a');

// const allowed_colors = [];

for (let element of links) {
	element.addEventListener('click', function(event) {
		event.preventDefault();

		removeColors();

		blockquote.classList.add(this.getAttribute('data-color-class'));

		console.log(blockquote.getAttribute('class'));
	});
}

function removeBorders() {
	blockquote.className = blockquote.className.replace(/\bborder.*?\b/g, '');
	blockquote.className = blockquote.className.replace(/\bborder-.*?\b/g, '');
}

// links = document.getElementById('actions-borders').getElementsByTagName('a');

// // const allowed_borders = [];

// for (let element of links) {
// 	element.addEventListener('click', function(event) {
// 		event.preventDefault();

// 		removeBorders();

// 		blockquote.classList.add('border');
// 		blockquote.classList.add('border-' + this.getAttribute('data-border-class'));

// 		// console.log(blockquote.getAttribute('class'));
// 	});
// }

// jQuery('#actions-borders > a').click(function(event) {
// 	event.preventDefault();

// 	removeBorders();

// 	jQuery(blockquote).addClass(`border border-${this.getAttribute('data-border-class')}`);

// })

document.getElementById('reset-all').addEventListener('click', function(event) {
	blockquote.style.cursor = 'default';

	removeColors();
	removeBorders();
})

$('#exampleModal').on('show.bs.modal', function() {
	console.log('modal shown')
}).modal('show')
