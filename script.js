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


function game(){
    let win = 0;
    let lose = 0;
    let computerSelection;
    let playerSelection;
    
    
    while (win < 5 && lose < 5){
        computerSelection = getComputerChoice();
        playerSelection = prompt('Pick your weapon!');
        console.log(`You picked: ${playerSelection}`);
        console.log(`The AI picked: ${computerSelection}`);

        console.log(playRound(playerSelection, computerSelection))
        if (playRound(playerSelection, computerSelection).includes('Win')){
            win++;
        } else if (playRound(playerSelection, computerSelection).includes('Lose')){
            lose++;
        }

        console.log(`Your Record is ${win} Wins and ${lose} Losses`);
    }

    console.log('Game Over')
}

game();

