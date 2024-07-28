const characters = [
    {
        name: 'Character 1',
        image: 'images/1.png',
        actions: ['Movement', 'Attack', 'Defend']
    },
    {
        name: 'Character 2',
        image: 'images/2.jpg',
        actions: ['Movement', 'Attack', 'Defend']
    },
    {
        name: 'Character 3',
        image: 'images/3.jpg',
        actions: ['Movement', 'Attack', 'Defend']
    },
    {
        name: 'Character 4',
        image: 'images/4.jpg',
        actions: ['Movement', 'Attack', 'Defend']
    },
    {
        name: 'Character 5',
        image: 'images/5.jpg',
        actions: ['Movement', 'Attack', 'Defend']
    },
    {
        name: 'Enemy',
        image: 'images/enemy.png',
        actions: ['Movement', 'Attack', 'Defend']
    }
];

let currentTurn = 0;
let currentActionIndex = 0;

const characterImage = document.getElementById('character-image');
const currentAction = document.getElementById('current-action');
const nextTurnButton = document.getElementById('next-turn');

function updateDisplay() {
    const character = characters[currentTurn];
    characterImage.src = character.image;
    currentAction.textContent = character.actions[currentActionIndex];
}

nextTurnButton.addEventListener('click', () => {
    currentActionIndex++;
    if (currentActionIndex >= characters[currentTurn].actions.length) {
        currentActionIndex = 0;
        currentTurn = (currentTurn + 1) % characters.length;
    }
    updateDisplay();
});

// Initial display update
updateDisplay();
