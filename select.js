const SelectBox = document.querySelector('.select');
const OptionBox = document.querySelector('.options');

// e.target vs e.currentTarget 정리
SelectBox.addEventListener('click', (e) => {
    if (e.currentTarget.childNodes[1].src == 'http://127.0.0.1:5500/images/icon-Triangle-down.png') {
        e.currentTarget.childNodes[1].src = 'http://127.0.0.1:5500/images/icon-Triangle-up.png';
    }
    else {
        e.currentTarget.childNodes[1].src = 'http://127.0.0.1:5500/images/icon-Triangle-down.png'
    }
    OptionBox.classList.toggle('hidden');
})

OptionBox.addEventListener('click', e => {
    SelectBox.innerText = e.target.innerText;
})