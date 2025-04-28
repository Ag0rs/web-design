const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');
const closeMenu = document.getElementById('closeMenu');

menuToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    sideMenu.classList.toggle('open');
});

closeMenu.addEventListener('click', function () {
    sideMenu.classList.remove('open');
});

window.addEventListener('click', function (e) {
    if (!e.target.closest('#sideMenu') && !e.target.closest('#menuToggle')) {
        sideMenu.classList.remove('open');
    }
});

let timerId;
const dateButton = document.querySelector('.btn.info');
const dateOutput = document.getElementById('dateOutput');

function updateDateTime() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const formattedDateTime = `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
    dateOutput.textContent = `Сьогодні: ${formattedDateTime}`;
}

function showDate() {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
        dateOutput.textContent = '';
        dateButton.textContent = 'Показати дату та час';
    } else {
        updateDateTime();
        timerId = setInterval(updateDateTime, 1000);
        dateButton.textContent = 'Приховати дату та час';
    }
}

const box = document.getElementById('colorBox');

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

box.addEventListener('click', () => {
    box.style.backgroundColor = getRandomColor();
});

const textBlock = document.getElementById('textBlock');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
    textBlock.classList.toggle('expanded');
    toggleBtn.textContent = textBlock.classList.contains('expanded') ? 'Сховати' : 'Показати більше';
});

let count = 0;
const btn = document.getElementById('counterBtn');
const display = document.getElementById('countDisplay');

btn.addEventListener('click', () => {
    count++;
    display.textContent = `Кліків: ${count}`;
});

function calculateSum() {
    const a = parseFloat(document.getElementById('num1').value);
    const b = parseFloat(document.getElementById('num2').value);
    const sum = a + b;

    document.getElementById('result').textContent = isNaN(sum) ? 'Некоректні дані' : sum;
}