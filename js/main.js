console.log('Palette');
const maxPalette = 5;
//todo - получаю все элементы
const container = document.querySelector('.container');
const button = document.querySelector('.button');

button.addEventListener('click', generate);

function generate() {
    container.innerHTML = '';

    for (let i = 0; i < maxPalette; i++) {
        let random = Math.floor(Math.random() * 16);
        // random = `#${random.padStart(6, '0')}`;
        console.log(random);
    }
}
