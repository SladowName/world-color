const colorsWords = ['синий', 'розовый', 'желтый', 'красный', 'черный', 'зеленый', 'оранжевый']
const colors = ['#2C52BC', '#D138A6', '#F5CB03', '#D7151F', '#2A7013', '#D77014', '#000', '#962422'];

window.onload = () => {
    generateWorld();
}

function generateWorld() {
    const container = document.getElementById('colors');

    for (let i = 0; i < 36; i++) {
        const randomColorWithWord = getRandomColorWithWord();
        const div = createDiv(randomColorWithWord);
        container.append(div);
    }

}

function getRandomColorWithWord() {
    const randomColorWorld = colorsWords[Math.floor(Math.random() * colorsWords.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return {
        randomColor,
        randomColorWorld
    }
}

function createDiv(randomColorWithWord) {
    const div = document.createElement('div');
    div.textContent = randomColorWithWord.randomColorWorld;
    div.style.color = randomColorWithWord.randomColor;
    div.className = 'color';

    return div;
}