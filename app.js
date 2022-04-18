const Body = document.querySelector('body');
const StartForm = document.querySelector('.login-guide');
const LoginButton = document.querySelector('.login');
const LoginForm = document.querySelector('.login-form');

const CloseButton = document.querySelector('.form-title img');
const Condition = document.querySelector('.login-condition');

let clickLoginNum = 0;
let IdInput = '';
let PasswordInput = '';
const password = 'jisang8921!'; 
const Id = document.querySelector('.id');
const Password = document.querySelector('.password');
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
        e.target.src = '/images/checked-box.png';
    }
    else {
        e.target.src = '/images/check-box.png';
    }
})

// 아이디 입력 x + 버튼 클릭 시 경고창 생성 및 input border 색 변경
Id.addEventListener('input', e => {
    IdInput = e.target.value;
    if (e.target.value.length == 1) {
        Id.style.borderColor = 'black';
        document.querySelector('.warning').remove();
    }
})

// 패스워드 입력 시에 해당 패스워드를 변수에 저장
Password.addEventListener('input', e => {
    PasswordInput = e.target.value;
})

Login.addEventListener('click', e => {
    clickLoginNum++;
    const IdWarning = '<p class="warning">아이디를 입력해 주세요.</p>';
    const PasswordWarning = '<p class="warning">아이디 혹은 비밀번호와 일치하지 않습니다.</p>';
    if (IdInput.length == 0 && clickLoginNum == 1) {
        clickLoginNum = 0;
        e.preventDefault();
        Id.style.borderColor = '#f4492e';
        Id.insertAdjacentHTML('afterend', IdWarning);
    }
    else if (IdInput.length == 0) {
        e.preventDefault();
    }
    else if (PasswordInput !== password) {
        e.preventDefault();
        Password.style.borderColor = '#f4492e';
        Password.insertAdjacentHTML('afterend', PasswordWarning);
    }
})