export const rounds = [];

export const getRoundDetails = (gestures, rules) => {
	let winner = 'draw';

    if (rules[gestures?.player1]?.includes(gestures?.player2)) {
        winner = 'Player 1';
    }

    if (rules[gestures?.player2]?.includes(gestures?.player1)) {
        winner = 'Player 2';
    }

    const details = Object.freeze({
        gestures,
        winner,
    });

    return details;
}

export const makeGesture = (playerGesture, rules = {
    rock: ['scissors'],
    paper: ['rock'],
    scissors: ['paper'],
}) => {
	const index = Math.floor(Math.random() * Object.keys(rules).length + 1);

	const getRandomGesture = Object.keys(rules)[index];

	const gestures = {
		player1: playerGesture,
		player2: getRandomGesture,
	};

	const details = getRoundDetails(gestures, rules);

    rounds.push(details);

	return details;
};

export const rules = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['paper', 'spock'],
    spock: ['rock', 'scissors'],
};

const buttons = document.querySelectorAll('menu button');
const main = document.querySelector('main');

buttons.forEach(button => button.addEventListener('click', () => {
	const playerGesture = button.dataset.gesture;

	const details = makeGesture(playerGesture);

	main.innerHTML = `
		<div>Winner: ${details.winner}</div>
		<div>Player 1: ${rounds?.filter(round => round.winner === 'Player 1')?.length}</div>
		<div>Player 2: ${rounds?.filter(round => round.winner === 'Player 2')?.length}</div>
	`;
}));
