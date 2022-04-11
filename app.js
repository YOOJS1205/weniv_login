const Body = document.querySelector('body');
const StartForm = document.querySelector('.login-guide');
const LoginButton = document.querySelector('.login');
const LoginForm = document.querySelector('.login-form');
const CloseButton = document.querySelector('.form-title img');

LoginButton.addEventListener('click', () => {
    LoginForm.classList.remove('hidden');
    Body.classList.add('dark');
})

CloseButton.addEventListener('click', () => {
    LoginForm.classList.add('hidden');
    Body.classList.remove('dark');
})