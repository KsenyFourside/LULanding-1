
const player1 = {
    name: 'Scorpion',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['gun', 'sword'],
    attack() {
        console.log(`${this.name} Fight...`)
    }
};

const player2 = {
    name: 'Sonya',
    hp: 72,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['revolver'],
    attack(){
        console.log(`${this.name} Fight...`)
    }
};

const arenasEl = document.querySelector('div.arenas');

function createPlayer(playerName, player){
    const containerEl = document.createElement('div');
    containerEl.className = playerName;
    arenasEl.appendChild(containerEl);

    const progressBarEl = document.createElement('div');
    progressBarEl.className = 'progressbar';
    containerEl.appendChild(progressBarEl)

    const lifeEl = document.createElement('div');
    lifeEl.className = 'life';
    lifeEl.style.width = `${player.hp}%`;

    progressBarEl.appendChild(lifeEl);

    const nameEl = document.createElement('div');
    nameEl.className = 'name';
    nameEl.innerHTML = player.name;
    progressBarEl.appendChild(nameEl);


    const characterEl = document.createElement('div');
    characterEl.className = 'character';
    containerEl.appendChild(characterEl);

    const imgEl = document.createElement('img');
    imgEl.src = player.img;
    characterEl.appendChild(imgEl);


}

createPlayer('player1', player1);
createPlayer('player2', player2)