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

function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'rock' && computerSelection == 'rock') {
    return 'Draw! You both used rock!'
  } else if (playerSelection == 'rock' && computerSelection == 'paper'){
    return 'You Lose! Paper beats rock!'
  } else if (playerSelection == 'rock' && computerSelection == 'scissors'){
    return 'You Win! Rock beats scissors!'
  } else if (playerSelection == 'paper' && computerSelection == 'rock'){
    return 'You Win! Paper beats rock!'
  } else if (playerSelection == 'paper' && computerSelection == 'paper'){
    return 'Draw! You both used paper!'
  } else if (playerSelection == 'paper' && computerSelection == 'scissors'){
    return 'You Lose! Scissors beats paper!'
  } else if (playerSelection == 'scissors' && computerSelection == 'rock'){
    return 'You Lose! Rock beats scissors!' 
  } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
    return 'You Win! Scissors beats paper!'
  } else if (playerSelection == 'scissors' && computerSelection == 'scissors'){
    return 'Draw! You both used Scissors'
  }
}


function game() {
  let playerSelection = prompt('rock, paper, or scissors?');
  let computerSelection = computerPlay();

if (playerSelection == 'rock') {
  console.log(`Your opponent used ${computerSelection}!`)
  return console.log(playRound('rock', computerSelection))
} else if (playerSelection == 'paper') {
  console.log(`Your opponent used ${computerSelection}!`)
  return console.log(playRound('paper', computerSelection))
} else if (playerSelection == 'scissors') {
  console.log(`Your opponent used ${computerSelection}!`)
  return console.log(playRound('scissors', computerSelection))
}
}

game()

