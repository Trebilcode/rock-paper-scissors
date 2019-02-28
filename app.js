let playerScore = 0;
let computerScore = 0;
const playerScore_class = document.querySelector('.user-score');
const computerScore_class = document.querySelector('.computer-score')
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const gameMessage_div = document.querySelector('.game-message');
const gameMessage = document.createElement('p');


function playRound () {
    rock.addEventListener('click' , function(){
        const computerChoice = getComputerChoice();
        const userChoice = 'r';
        switch (computerChoice + userChoice) {
            case 'rr':
            draw()
            break;
            case 'pr':
            lose();
            break;
            case 'sr':
            win();
            break;
            
        }
        fiveRoundWinner();
     });
     
     paper.addEventListener('click' , function(){
         const computerChoice = getComputerChoice();
         const userChoice = 'p';
         switch (computerChoice + userChoice) {
            case 'rp':
            win();
            break;
            case 'pp':
            draw();
            break;
            case 'sp':
            lose();
            break;
            
        }
        fiveRoundWinner();
     });
     
     scissors.addEventListener('click' , function(){
         const computerChoice = getComputerChoice();
         const userChoice = 's';
         switch (computerChoice + userChoice) {
            case 'rs':
            lose();
            break;
            case 'ps':
            win();
            break;
            case 'ss':
            draw();
            break;
            
        }
        fiveRoundWinner();
     });
}

function draw () {
    gameMessage.textContent = 'It\'s a draw'
    gameMessage_div.appendChild(gameMessage);
}

function win () {
    playerScore++;
    playerScore_class.innerHTML = `${playerScore}:`;
    gameMessage.textContent = 'Congratulations, YOU WIN!';
    gameMessage_div.appendChild(gameMessage);

} 

function lose () {
    computerScore++;
    computerScore_class.innerHTML = computerScore;
    gameMessage.textContent = 'I\'m sorry, you lost';
    gameMessage_div.appendChild(gameMessage);
}

function getComputerChoice () {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = choices [randomNumber];
    return computerChoice;

}

function fiveRoundWinner () {
    if(playerScore === 5 ) {
        gameMessage.textContent = 'Congratulations, you\'ve won the game!';
        gameMessage_div.appendChild(gameMessage);
        computerScore_class = '0';
        playerScore_class = '0' + ':';
    }else if (computerScore === 5){
        gameMessage.textContent = 'Computer has won the game, try again.';
        gameMessage_div.appendChild(gameMessage);
        computerScore_class.textContent = '0';
        playerScore_class.textContent = '0' + ':';
    }
}

playRound();
