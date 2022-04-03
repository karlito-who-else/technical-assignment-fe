// export const rules = {
//     rock: ['scissors'],
//     paper: ['rock'],
//     scissors: ['paper'],
// };

export const rules = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['paper', 'spock'],
    spock: ['rock', 'scissors'],
};

export const rounds = [];

export const getRoundDetails = (player1Gesture, player2Gesture) => {
    let winner = 'draw';

    if (rules[player1Gesture].includes(player2Gesture)) {
        winner = 'Player 1';
    }

    if (rules[player2Gesture].includes(player1Gesture)) {
        winner = 'Player 2';
    }

    const details = Object.freeze({
        player1Gesture,
        player2Gesture,
        winner,
    });

    return details;
}

export const getRandomGesture = Object.keys(rules)[Math.floor(Math.random() * 5)];

export const makeGesture = () => {
    const details = getRoundDetails(getRandomGesture, getRandomGesture);

    rounds.push(details);
};

