/*Проведение выборов*/
function elections() {
	const CHEAT_PERCENT = 25,
				MAX_PERCENT = 100,
				MIN_PERCENT = 1,
				NIMBER_OF_CANDIDATES = 3,
				percentage = [];
	const voting = document.querySelector('#voting'),
				crime = document.querySelector('#crime'),
				resultCount = document.getElementsByClassName('result-count'),
				progressBar = document.getElementsByClassName('progress-bar');
	
	voting.addEventListener('click', toVote);

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	//Провести честное голосование (добавляет рандомные значения)
	function toVote() {
		let resultSum = 0;
		do {
			let part = getRandomInt(MIN_PERCENT, MAX_PERCENT);
			percentage[0] = getRandomInt(MIN_PERCENT, MAX_PERCENT - 1);
			percentage[1] = Math.floor((MAX_PERCENT - percentage[0]) * part / 100);
			percentage[2] = Math.floor(MAX_PERCENT - percentage[0] - percentage[1]);
			resultSum = percentage[0] + percentage[1] + percentage[2];
		}
		while (resultSum !== MAX_PERCENT);
		
		for (let i = 0; i < NIMBER_OF_CANDIDATES; i++) {
			resultCount[i].innerHTML = `${percentage[i]}%`;
			progressBar[i].style.height = `${percentage[i]}%`;
		}
		
		chooseWinner();
		voting.removeEventListener('click', toVote);
		crime.addEventListener('click', intervene);
	}

	//Функция определения победителя (обводится в синюю рамку)
	function chooseWinner() {
		const mainCardsItems = document.getElementsByClassName('main-cards-item');
		for (let i = 0; i < mainCardsItems.length; i++) {
			mainCardsItems[i].classList.remove('main-cards-item-active');
		}
		let maxValue = Math.max.apply(null, percentage);
		for (let i = 0; i < NIMBER_OF_CANDIDATES; i++) {
			if (maxValue == percentage[i]) {
				mainCardsItems[i].classList.add('main-cards-item-active');
			}
		}
	}

	// Вмешаться в выборы (добавляет кандидату 25%)
	function intervene() {
		if (percentage[1] >= (MAX_PERCENT - CHEAT_PERCENT)) {
			percentage[1] = MAX_PERCENT;
			percentage[0] = percentage[2] = 0;
		} else {
			percentage[1] += CHEAT_PERCENT;

			let shareNum1 = Math.round(percentage[0] / (percentage[0] + percentage[2]) * MAX_PERCENT);
			let shareNum3 = Math.round(percentage[2] / (percentage[0] + percentage[2]) * MAX_PERCENT);

			percentage[0] -= Math.round(CHEAT_PERCENT * (shareNum1 / MAX_PERCENT));
			percentage[2] -= Math.round(CHEAT_PERCENT * (shareNum3 / MAX_PERCENT));

			chooseWinner()
		}

		for (let i = 0; i < NIMBER_OF_CANDIDATES; i++) {
			resultCount[i].innerHTML = `${percentage[i]}%`;
			progressBar[i].style.height = `${percentage[i]}%`;
		}
		crime.removeEventListener('click', intervene);
	}

	// Сбросить результаты
	const reset = document.querySelector('#reset');
	reset.addEventListener('click', resetCand);

	function resetCand() {
		const mainCardsItems = document.querySelectorAll('.main-cards-item'),
			mainPage = document.querySelector('.main'),
			custom = document.querySelector('.custom'),
			newCard = document.querySelector('#new-candidate');

		for (let i = 0; i < mainCardsItems.length; i++) {
			mainCardsItems[i].classList.remove('main-cards-item-active');
		}

		mainPage.style.display = `none`;
		custom.style.display = `flex`;
		newCard.style.display = `none`;
		const photoCandidate = document.querySelector('#new-candidate .photo');

		while (photoCandidate.lastChild) {
			photoCandidate.removeChild(photoCandidate.lastChild);
		}
		voting.addEventListener('click', toVote);
		crime.addEventListener('click', intervene);
	}
}

export {elections};
