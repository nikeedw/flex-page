const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelectorAll('.btnLogin-popup');
const iconClose = document.querySelectorAll('.icon-close');

registerLink.addEventListener('click', () => {
	wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
	wrapper.classList.remove('active');
});

btnPopup.forEach(button => {
	button.addEventListener('click', () => {
		wrapper.classList.toggle('active-popup');
		const modalWindows = document.querySelectorAll('.popup');
		let i = 0;
		modalWindows[i].classList.remove('open');
	})
});

iconClose.forEach((element) => {
  element.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
  });
});

const inputMail = document.querySelectorAll('.input-mail');
const labelMail = document.querySelectorAll('.label-mail');

inputMail.forEach((element, index) => {
	element.addEventListener('input', () => {
		if (element.value !== '') {
			labelMail[index].style.top = '-5px';
		} else {
			labelMail[index].style.top = '';
		}
	});
});

inputMail.forEach((element, index) => {
	element.addEventListener('input', () => {
		if (element.value !== '' && element.validity.valid === false) {
			labelMail[index].style.color = 'red';
		} else {
			labelMail[index].style.color = ''; // Вернуть стандартный цвет текста
		}
	});
});

inputMail.forEach((element, index) => {
	element.addEventListener('resize', () => {
		if (element.value !== '' && element.validity.valid === false) {
			labelMail[index].style.color = 'red';
		} else {
			labelMail[index].style.color = ''; // Вернуть стандартный цвет текста
		}
	});
});


