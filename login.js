const EMAIL_PATTERN = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const emailAlert = document.querySelector('.email_alert');
const passwordAlert = document.querySelector('.password_alert');
const authButton = document.querySelector('.auth_button');
const authBtnLink = document.querySelector('.auth_button a');
const passwordVisible = document.querySelector('.visible_on');
const passwordInvisible = document.querySelector('.visible_off');

let emailInputStatus = false;
let pwInputStatus = false;

function emailChecker(e) {
	if (e.target.value === '' && e.target.type === 'email') {
		showAlert(e.target, emailAlert, '이메일을 입력해주세요.');
		emailInputStatus = false;
	} else if (!EMAIL_PATTERN.test(e.target.value)) {
		showAlert(e.target, emailAlert, '잘못된 이메일 형식입니다.');
		emailInputStatus = false;
	} else {
		hideAlert(e.target, emailAlert);
		emailInputStatus = true;
	}
	updateAuthButton();
}

function passwordChecker(e) {
	if (e.target.value === '' && e.target.type === 'password') {
		showAlert(e.target, passwordAlert, '비밀번호를 입력해주세요.');
		pwInputStatus = false;
	} else if (e.target.value.length < 8) {
		showAlert(e.target, passwordAlert, '비밀번호를 8자 이상 입력해주세요.');
		pwInputStatus = false;
	} else {
		hideAlert(e.target, passwordAlert);
		pwInputStatus = true;
	}
	updateAuthButton();
}

function showAlert(inputField, element, message) {
	inputField.classList.add('inputAlert');
	element.classList.add('visible_alert');
	element.textContent = message;
}

function hideAlert(inputField, element) {
	inputField.classList.remove('inputAlert');
	element.classList.remove('visible_alert');
}

function updateAuthButton() {
	authButton.classList.toggle('btn_active', emailInputStatus && pwInputStatus);
}

function authButtonActivate(e) {
	if (!emailInputStatus || !pwInputStatus) {
		e.preventDefault();
	}
}

function visibleBtnHandler(e) {}

email.addEventListener('focusout', (e) => emailChecker(e));
password.addEventListener('focusout', (e) => passwordChecker(e));
authBtnLink.addEventListener('click', (e) => authButtonActivate(e));
