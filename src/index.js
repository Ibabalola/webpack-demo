import printMe from './print.js';

function component() {
	let element = document.createElement('div');
	let btn = document.createElement('button');

	let arr = ['Hello', 'Webpack'];
	element.innerHTML = arr.join(' ');

	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;

	element.appendChild(btn);

	return element;
}

document.body.appendChild(component());