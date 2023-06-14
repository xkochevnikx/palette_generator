const hexCharacters = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
];

//todo - переменная счетчик используется в цикле генерации цвета и генерации боксов с цветами.
const maxPalette = 6;

//todo - получаю все элементы
const container = document.querySelector('.containerPalette');
const button = document.querySelector('.button');

//todo - слушатель событий на кнопке
button.addEventListener('click', generate);

//todo - создаю функцию извления случайного элемента из массива что бы в последствии вызвать её 6 раз и создать случайный цвет. принимает она случайное число от 1 до 16 сгенерированное ниже в getColor
function getCharacter(index) {
    return hexCharacters[index];
}

//todo - функция в цикле на каждой итерации создаёт переменную randomColor в которую помешает рандомное целое число до 16ти и к переменной hex на каждой итерации прибавляет результат вызова функции getCharacter с этим числом.
function getCorol() {
    let hex = '#';
    for (let i = 0; i < maxPalette; i++) {
        const randomColor = Math.floor(Math.random() * hexCharacters.length);
        hex += getCharacter(randomColor);
    }
    return hex;
}

//todo - функция генерации боксов, на каждой итерации создаёт строку цвета вывовом getColor и создаёт элемент списка в который помешает див с бэкграундом рандомного цвета и его строкой. вешает слушатель события на этот бокс и добавляет его в корневой контейнер.
function generate() {
    //todo - очищаю содержимое контейнера
    container.innerHTML = '';

    for (let i = 0; i < maxPalette; i++) {
        let random = getCorol();
        const color = document.createElement('li');
        color.classList.add('color');
        color.innerHTML = `<div
                class='rect-box'
                style='background: ${random}'>
                <span class='hex-value'>${random}</span>
            </div>`;

        color.addEventListener('click', () => copyColor(color, random));
        container.appendChild(color);
    }
}
