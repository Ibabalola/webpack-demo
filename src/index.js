import './assets/styling/style.css';
import Icon from './assets/images/icon.png';
import Data from './assets/data/data.xml';

function component() {
	let element = document.createElement('div');

	let arr = ['Hello', 'Webpack'];

	// add information garnered from data
	let notes = Data.note;

	console.log(notes);
	Object.values(notes).forEach(value => {
  		arr.push(value[0]);
	})

	element.innerHTML = arr.join(' ');
	element.classList.add('hello');

	// add the image to our existing div
	let myIcon = new Image();
	myIcon.src = Icon;

	element.appendChild(myIcon); 

	return element;
}

document.body.appendChild(component());