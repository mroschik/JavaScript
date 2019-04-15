import {ready} from './ready';
import {slider} from './slider';
/*Нажатие на кнопку 'Создать'*/
function start() {
	const create = document.getElementById('popup-btn');
	create.addEventListener('click', function() {
		const overlay = document.querySelector('.overlay'),
					mainPage = document.querySelector('.main'),
					custom = document.querySelector('.custom');
					
		overlay.style.display = 'none';
		mainPage.style.display = 'none';
		custom.style.display = 'flex';

		for (let i = 0; i < custom.children.length; i++) {
			custom.children[i].style.display = 'block';
		}

		ready();
		slider();
	});
}
start();
