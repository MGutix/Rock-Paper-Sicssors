
function getComputerChoice(){
    let choice = getRandomInt(1,4);

    if (choice == 1){
        return('Rock');
    } else if (choice == 2){
        return('Paper');
    } else if (choice == 3){
        return('Scissors');
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }
  
function playRound(u, m){
    
    u = u.toLowerCase();
    m = m.toLowerCase();
    if (u == m){
        return "Draw"
    } else if (u == 'rock' && m == 'scissors'){
        return `You Win! ${u} beats ${m}!`
    } else if (u == 'paper' && m == 'rock'){
        return `You Win! ${u} beats ${m}!`
    } else if (u == 'scissors' && m == 'paper'){
        return `You Win! ${u} beats ${m}!`
    } else {
        return `You Lose! ${m} beats ${u}!`
    }
}


function game(playerSelection){
    
    let computerSelection = getComputerChoice();;
    
    
    if (playRound(playerSelection, computerSelection).includes('Win')){
        win++;
    } else if (playRound(playerSelection, computerSelection).includes('Lose')){
        lose++;
    }
    h3.textContent = `You picked: ${playerSelection}. The AI picked: ${computerSelection}`;
    
    h5.textContent =`Your Record is ${win} Wins and ${lose} Losses`;
    
}


let win = 0;
let lose = 0;

//Recibe click en alguno de los botones y pasa la seleccion
const rock = document.getElementById('rock');
rock.addEventListener('click', () => {
    if (win == 5){
    h5.textContent = 'You Win!'
    win = 0;
    lose = 0;
} else if (lose == 5){
    h5.textContent = 'You Lose!'
    win = 0;
    lose = 0;
} else {
    game('rock');
}
});

const paper = document.getElementById('paper');
paper.addEventListener('click', () => {
    if (win == 5){
    h5.textContent = 'You Win!'
    win = 0;
    lose = 0;
} else if (lose == 5){
    h5.textContent = 'You Lose!'
    win = 0;
    lose = 0;
} else {
    game('paper');
}
    
});

const scissors = document.getElementById('scissors');
scissors.addEventListener('click', () => {
    if (win == 5){
    h5.textContent = 'You Win!'
    win = 0;
    lose = 0;
} else if (lose == 5){
    h5.textContent = 'You Lose!'
    win = 0;
    lose = 0;
} else {
    game('scissors');
}
});

const div = document.createElement("div");
div.id = "div";
document.body.appendChild(div);
  
const h3 = document.createElement("h3");
h3.id = "h3";
div.appendChild(h3);

const h5 = document.createElement("h5");
h5.id = "h5";
div.appendChild(h5);




