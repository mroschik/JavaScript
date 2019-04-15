import {elections} from './elections';
/* Валидация формы (нажатие на кнопку 'Готово') */
function ready() {
	const ready = document.querySelector('#ready'),
				bio = document.querySelector('#bio'),
				name = document.querySelector('#name'),
				
				mainCardsItems = document.getElementsByClassName('main-cards-item'),
				age = document.querySelector('#age'),
				customInfo = document.querySelector('.custom-info'),
				errorName = document.createElement('div'),
				errorBio = document.createElement('div'),
				errorAge = document.createElement('div');
	const textFields = [name, bio, age],
				errors = [errorName, errorBio, errorAge],
				errorPadding = `8px`,
				errorColor = `red`;

	const newCard = mainCardsItems[1].cloneNode(true);
				newCard.setAttribute('id', 'new-candidate');

			for (let i = 0; i < textFields.length; i++) {
				textFields[i].parentNode.insertBefore(errors[i], textFields[i].nextSibling);
				errors[i].style.color = errorColor;
				errors[i].style.fontSize = errorPadding;
			}
	
	name.addEventListener('focus', function() {
		errorName.innerHTML = ``;
	});

	age.addEventListener('keypress', function() {
		setTimeout(() => {
			var res = /[^0-9]/g.exec(this.value);
			this.value = this.value.replace(res, '');
		}, 0);
	}); 

	age.addEventListener('change', testAge); 

	age.addEventListener('focus', function() {
		errorAge.innerHTML = ``;
	});

	bio.addEventListener('focus', function() {
		errorBio.innerHTML = ``;
	});

	ready.addEventListener('click', function() {
		if (name.value == `` || age.value == `` || bio.value == `` || bio.value.length < 10) {
			customInfo.style.paddingTop = 0;
			if (name.value == ``) {
				errorName.innerHTML = `* Введите имя кандидата`;
			} else {
				errorName.innerHTML = ``;
			}
			if (age.value == ``) {
				errorAge.innerHTML = `* Введите возраст кандидата`;
			}

			if (bio.value == `` || bio.value.length < 10) {
				errorBio.innerHTML = `* Поле должно содержать не менее 10 символов`;
			} else {
				errorBio.innerHTML = ``;
			}
		} else {
			customInfo.style.paddingTop = errorPadding;
			showCandidates();
		}
		customInfo.style.paddingTop = errorPadding;
	});
	//Функция отрисовки кандидатов
	function showCandidates() {
		const mainPage = document.querySelector('.main'),
					custom = document.querySelector('.custom'),
					mainCards = document.querySelector('.main-cards');
		mainPage.style.display = `block`;
		custom.style.display = `none`;
		mainCards.insertBefore(newCard, mainCardsItems[1]);
		newCard.style.display = `block`;

		const candidateName = document.querySelector('#new-candidate .name'),
			candidateAge = document.querySelector('#new-candidate .age'),
			candidateSex = document.querySelector('#new-candidate .sex'),
			candidateViews = document.querySelector('#new-candidate .views'),
			candidateBio = document.querySelector('#new-candidate .bio');

		candidateName.innerHTML = name.value;

		insertInscription(candidateAge, age, testAge);

		if (male.checked) {
			candidateSex.innerHTML = `Мужской`;
		} else {
			candidateSex.innerHTML = `Женский`;
		}
		candidateViews.innerHTML = select.value;
		candidateBio.innerHTML = bio.value;

		insertPhoto();
		zeroResults();
		elections();
	}
	//Функция проверки возраста
	function testAge() {
		const customInfo = document.querySelector('.custom-info'),
					radio = document.querySelector('.radio');
		let ageValue = Math.abs(parseInt(age.value));

		if (ageValue > 100) {
			errorAge.innerHTML = `Введите корректный возраст`;
			ageValue = ``;
		} else if (ageValue >= 0 && ageValue < 35) {
			errorAge.innerHTML = `Президентом РФ можно стать не раньше 35 лет`;
			ageValue = ``;
		}
		customInfo.insertBefore(errorAge, radio);
		age.value = ageValue;

		return ageValue;
	}
}
//Функция склонения слова "Год"
function insertInscription(div, age, func) {
	let a = func(),
		lastNum = a % 10;
	if (func()) {
		if (lastNum == 1) {
			div.innerHTML = `${age.value} год`;
		} else if (lastNum > 1 && lastNum < 5) {
			div.innerHTML = `${age.value} года`;
		} else {
			div.innerHTML = `${age.value} лет`;
		}
	}
}
//Функция вставки изображения кандидата
function insertPhoto() {
	const person = document.querySelector('.person'),
		photo = document.querySelector('#new-candidate .photo'),
		newPerson = person.cloneNode(true);
	photo.appendChild(newPerson);
	photo.classList.remove('photo-2');
}
//Функция обнуления результатов
function zeroResults() {
	const mainCardsItems = document.getElementsByClassName('main-cards-item'),
				resultCount = document.getElementsByClassName('result-count'),
				progressBar = document.getElementsByClassName('progress-bar');
	
	mainCardsItems[0].classList.remove('main-cards-item-active');
	for (let i = 0; i < resultCount.length; i++) {
		resultCount[i].innerHTML = `0%`;
	}

	for (let i = 0; i < progressBar.length; i++) {
		progressBar[i].style.height = 0;
	}
}

export {ready};