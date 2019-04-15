//Слайдер
function slider() {
	const MAX_INDEX = 6;
	const MIN_MAN_INDEX = 1;
	const MAX_MAN_INDEX = 3;
	const MAX_WOMAN_INDEX = 6;
	const NUMBER_OF_SLIDERS = 3;

	const	male = document.querySelector('#male'),
				female = document.querySelector('#female'),
				skinColorElements = document.querySelectorAll('.skin-color'),
				hairStyle = document.querySelectorAll('.hair-style'),
				clothesStyle = document.querySelectorAll('.clothes-style'),
				prev = document.querySelectorAll('.prev'),
				next = document.querySelectorAll('.next'),
				personSkin = document.querySelector('#person-skin'),
				personHair = document.querySelector('#person-hair'),
				personClothes = document.querySelector('#person-clothes');
		const skinColor = [],
					personSkinUrl = [],
					personHairUrl = [],
					personClothesUrl = [];
		let slideIndex = 1,
				personIndex = 1;
		
		for (let i = 0, j = 0; i < MAX_INDEX; i++, j++) {
			personSkinUrl.push(`url(img/skin/skin-${i+1}.png)`);
			personHairUrl.push(`url(img/hair/construct/hair-${i+1}.png)`);
			personClothesUrl.push(`url(img/clothes/construct/clothes-${i+1}.png)`);
			if (skinColorElements.length <= j) j = 0;
			skinColor.push(skinColorElements[j]);
		}

		const slides = [skinColor, hairStyle, clothesStyle];
		const person = [personSkin, personHair, personClothes];
		const personUrl = [personSkinUrl, personHairUrl, personClothesUrl];

		for (let i = 0; i < NUMBER_OF_SLIDERS; i++) {
			person[i].style.backgroundImage = personUrl[i][MIN_MAN_INDEX - 1];
			prev[i].addEventListener('click', plusSlides.bind(null, -1, slides[i], personUrl[i], person[i]));
			next[i].addEventListener('click', plusSlides.bind(null, 1, slides[i], personUrl[i], person[i]));
		}

	/*Функция показа слайдов*/
	function showSlides(n, array) {
		let min, max;

		if (male.checked) {
			max = MAX_MAN_INDEX;
			min = MIN_MAN_INDEX;
		} else {
			max = MAX_WOMAN_INDEX;
			min = MAX_MAN_INDEX + 1;
		}

		if (n > max) {
			slideIndex = min;
		}
		
		if (n < min) {
			slideIndex = max;
		}

		for (let i = 0; i < array.length; i++) {
			array[i].style.display = 'none';
		}
		array[slideIndex - 1].style.display = 'block';
	}
	/*Функция изменения фона у кандидата*/
	function changeLook(n, array, elem) {
		let min, max;

		if (male.checked) {
			max = MAX_MAN_INDEX;
			min = MIN_MAN_INDEX;
		} else {
			max = MAX_WOMAN_INDEX;
			min = MAX_MAN_INDEX + 1;
		}
		if (n > max) {
			personIndex = min;
		}

		if (n < min) {
			personIndex = max;
		}

		elem.style.backgroundImage = array[personIndex - 1];
	}
	/*Функция перелистывания слайдов*/
	function plusSlides(n, arraySlides, arrayBg, elem) {
		changeLook(personIndex += n, arrayBg, elem);
		showSlides(slideIndex += n, arraySlides);
	}
	
	female.addEventListener('change', changeSex);
	male.addEventListener('change', changeSex);
	/*Изменение слайдера при выборе другого пола*/
	function changeSex() {
		let index;
		if (male.checked) {
			index = MIN_MAN_INDEX - 1;
		} else {
			index = MAX_MAN_INDEX;
		}

		for (let i = 0; i < NUMBER_OF_SLIDERS; i++) {
			person[i].style.backgroundImage = personUrl[i][index];
		}

		for (let i = 0; i < hairStyle.length; i++) {
			hairStyle[i].style.display = 'none';
		}
		hairStyle[index].style.display = 'block';
		for (let i = 0; i < clothesStyle.length; i++) {
			clothesStyle[i].style.display = 'none';
		}
		clothesStyle[index].style.display = 'block';
		for (let i = 0; i < skinColor.length; i++) {
			skinColor[i].style.display = 'none';
		}
		skinColor[0].style.display = 'block';
	}
}

export {slider};