const colorsWords = ['синий', 'розовый', 'желтый', 'красный', 'черный', 'зеленый', 'оранжевый']
const colors = ['blue', 'pink', 'yellow', 'red', 'black', 'green', 'orange', 'purple'];

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