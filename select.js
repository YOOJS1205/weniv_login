const SelectBox = document.querySelector('.select');
const OptionBox = document.querySelector('.options');

// e.target vs e.currentTarget 정리
SelectBox.addEventListener('click', () => {
    SelectBox.classList.toggle('click');
    OptionBox.classList.toggle('hidden');
})

OptionBox.addEventListener('click', e => {
    SelectBox.innerText = e.target.innerText;
})