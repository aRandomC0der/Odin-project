const buttons = document.querySelectorAll('.buttons');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    let results;
    let results2;
    let playerSelection = e.target.innerText.toLowerCase();
    let computerSelection = computerPlay();
    let score = 0;
    let playerScore = document.querySelector('#player-score').textContent = `Player: ${score}`;
    let computerScore = 0;

    //playround
    function playRound(playerSelection, computerSelection) {
      if (playerSelection == 'rock' && computerSelection == 'rock') {
        return 'Draw! You both used rock!'
      } else if (playerSelection == 'rock' && computerSelection == 'paper'){
        computerScore++;
        return 'You Lose! Paper beats rock!'
      } else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        document.querySelector('#player-score').textContent = `Player: ${score + 1}`;
        return 'You Win! Rock beats scissors!'
      } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        playerScore++;
        return 'You Win! Paper beats rock!'
      } else if (playerSelection == 'paper' && computerSelection == 'paper'){
        return 'Draw! You both used paper!'
      } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        computerScore++;
        return 'You Lose! Scissors beats paper!'
      } else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        computerScore++;
        return 'You Lose! Rock beats scissors!' 
      } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        playerScore++;
        return 'You Win! Scissors beats paper!'
      } else if (playerSelection == 'scissors' && computerSelection == 'scissors'){
        return 'Draw! You both used Scissors'
      }
    }

   

    // checks what the player chose
    if (playerSelection == 'rock') {
      results = `Your opponent used ${computerSelection}!`
      results2 = playRound('rock', computerSelection)
    } else if (playerSelection == 'paper') {
      results = `Your opponent used ${computerSelection}!`
      results2 = playRound('paper', computerSelection)
    } else if (playerSelection == 'scissor') {
      results = `Your opponent used ${computerSelection}!`
      results2 = playRound('scissors', computerSelection)
    }


    console.log(playerScore, computerScore)
    document.querySelector('#results').value += results;
    document.querySelector('#results2').value += results2;
  })
})


// generates computerSelection
function computerPlay() {
  let random = Math.floor(Math.random() * 9)
  if (random < 9 && random > 6) {
    return 'rock'
  } else if (random <= 6 && random > 3) {
    return 'paper'
  } else if (random <= 3) {
    return 'scissors'
  }

}

