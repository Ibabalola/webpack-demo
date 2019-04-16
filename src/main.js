import printMe from './print.js';
import './styles.css';

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

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

if(module.hot) {
	module.hot.accept('./print.js', () => {
		console.log("Accepting the updated printMe module!");
		document.body.removeChild(element);
    	element = component(); // Re-render the "component" to update the click handler
     	document.body.appendChild(element);
	});
}