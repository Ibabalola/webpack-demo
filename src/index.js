function component() {
	let element = document.createElement('div');

	element.innerHTML = ['webpack', ''].join(' ');

	return element;
}

document.body.appendChild(component());