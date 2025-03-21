const EMAIL_PATTERN = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const email_alert = document.querySelector('.email_alert');
const password_alert = document.querySelector('.password_alert');
const auth_button = document.querySelector('.auth_button');
const auth_btn_link = document.querySelector('.auth_button a');

let inputStatus;

function emailChecker(e) {
	if (e.target.value === '' && e.target.type === 'email') {
		e.target.classList.add('inputAlert');
		email_alert.classList.add('visible_alert');
		email_alert.textContent = '이메일을 입력해주세요.';
		inputStatus = false;
	} else if (!EMAIL_PATTERN.test(e.target.value)) {
		email_alert.classList.add('visible_alert');
		email_alert.textContent = '잘못된 이메일 형식입니다.';
		inputStatus = false;
	} else {
		e.target.classList.remove('inputAlert');
		email_alert.classList.remove('visible_alert');
		inputStatus = true;
	}
}

function passwordChecker(e) {
	if (e.target.value === '' && e.target.type === 'password') {
		e.target.classList.add('inputAlert');
		password_alert.classList.add('visible_alert');
		password_alert.textContent = '비밀번호를 입력해주세요.';
		inputStatus = false;
	} else if (e.target.value.length < 8) {
		e.target.classList.add('inputAlert');
		password_alert.classList.add('visible_alert');
		password_alert.textContent = '비밀번호를 8자 이상 입력해주세요.';
		inputStatus = false;
	} else {
		e.target.classList.remove('inputAlert');
		password_alert.classList.remove('visible_alert');
		inputStatus = true;
	}
}

function authButtonActivate(e) {
	if (!inputStatus) {
		e.preventDefault();
		auth_button.disabled = true;
	}
	return;
}

email.addEventListener('focusout', (e) => emailChecker(e));
password.addEventListener('focusout', (e) => passwordChecker(e));
auth_btn_link.addEventListener('click', (e) => authButtonActivate(e));
