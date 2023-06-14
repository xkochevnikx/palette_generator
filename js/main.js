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
const container = document.querySelector('.container');
const button = document.querySelector('.button');

//todo - слушатель событий на кнопке
button.addEventListener('click', generate);

function generate() {
    //todo - очищаю содержимое контейнера
    container.innerHTML = '';

    //todo - создаю функцию извления случайного элемента из массива что бы в последствии вызвать её 6 раз и создать случайный цвет. принимает она случайное число от 1 до 16 сгенерированное ниже в getColor
    function getCharacter(index) {
        return hexCharacters[index];
    }

    //todo - функция в цикле на каждой итерации создаёт переменную randomColor в которую помешает рандомное целое число до 16ти и к переменной hex на каждой итерации прибавляет результат вызова функции getCharacter с этим числом.

    function getCorol() {
        let hex = '#';
        for (let i = 0; i < maxPalette; i++) {
            const randomColor = Math.floor(
                Math.random() * hexCharacters.length
            );
            hex += getCharacter(randomColor);
        }
        return hex;
    }
    console.log(getCorol());

    // for (let i = 0; i < maxPalette; i++) {
    //     let random = Math.floor(Math.random() * 16);
    //     // random = `#${random.padStart(6, '0')}`;
    //     console.log(random);
    // }
}
