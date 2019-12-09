function computerPlay() {
	let sign = Math.floor(Math.random() * 3);
	switch (sign) {
		case 0:
			return 'scissors';
			break;
		case 1: 
			return 'rock';
			break
		default:
			return 'paper';
		}
}


function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toUpperCase();
	computerSelection = computerSelection.toUpperCase();
	if (playerSelection === computerSelection) {
		console.log('draw')
		return 2;
	} else {
		switch(playerSelection) {
			case 'SCISSORS':
				switch(computerSelection) {
					case 'ROCK':
						console.log('You Lose! Rocks beats Scissors');
						return 0;
						break;
					default:
						console.log('You Win! Scissors beats Paper');
						return 1;
				}
				break;
			case 'PAPER':
				switch(computerSelection) {
                        case 'ROCK':
							 console.log('You Win! Paper beats Rock');
							 return 1;
							 break;
                		default:
							console.log('You Lose! Scissors beats Paper');
							return 0;
				}
				break;

			case 'ROCK':
				switch(computerSelection) {
					case 'PAPER':
						console.log('You Lose! Paper beats Rock');
						return 0;
						break;
                    default:
						console.log('You Win! Scissors beats Paper');
						return 1;

				}
				break;
			default: 
				console.log('invalid input');
		}
	}
}

function game(num) {
	let compScore = 0;
	let playerScore = 0;
	while(playerScore<num && compScore <num) {
		let player = prompt('choose');
		let comp = computerPlay();
		console.log(`you choose ${player}`);
		console.log(`comp chooses ${comp}`);
		let outcome = playRound(player, comp);
		if (outcome == 1) {
			playerScore++
			console.log('player score', playerScore);
			console.log('comp score', compScore);
		} else if (outcome === 0) {
			compScore++
			console.log('comp score', compScore);
			console.log('player score', playerScore);
		} else {
			console.log('comp score', compScore);
			console.log('player score', playerScore);
		}
	}
}

game(3);
