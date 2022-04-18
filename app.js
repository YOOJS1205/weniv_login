const Body = document.querySelector('body');
const StartForm = document.querySelector('.login-guide');
const LoginButton = document.querySelector('.login');
const LoginForm = document.querySelector('.login-form');

const CloseButton = document.querySelector('.form-title img');
const Condition = document.querySelector('.login-condition');

var idValue = '';
const Id = document.querySelector('.id');
const Login = document.querySelector('.content-login');

// 클릭 시 모달창 로그인폼 열기
LoginButton.addEventListener('click', () => {
    LoginForm.classList.remove('hidden');
    Body.classList.add('dark');
})

// 클릭 시 모달창 로그인폼 닫기
CloseButton.addEventListener('click', () => {
    LoginForm.classList.add('hidden');
    Body.classList.remove('dark');
})

// 클릭 시 체크 이미지 푸른색으로 변경
Condition.addEventListener('click', e => {
    if (e.target.src === 'http://127.0.0.1:5500/images/check-box.png') {
        e.target.setAttribute('src', 'images/checked-box.png');
    }
    else {
        e.target.setAttribute('src', '/images/check-box.png');
    }
})

// 아이디 입력 x + 버튼 클릭 시 경고창 생성 및 input border 색 변경
Id.addEventListener('change', e => {
    idValue = e.target.value;
})
Login.addEventListener('click', e => {
    const Warning = '<p class="warning">아이디를 입력해 주세요.</p>';
    if (idValue === '') {
        e.preventDefault();
        Id.style.borderColor = '#f4492e';
        Id.insertAdjacentHTML('afterend', Warning);
    }
})