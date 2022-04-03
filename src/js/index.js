import "core-js/stable";
import "regenerator-runtime/runtime";

import logger from './logger';

import '../css/index.scss';

logger('it works well!');

import { getRandomGesture, makeGesture, rounds } from './logic.js';


while (rounds.length < 50) {
    makeGesture(getRandomGesture);
}

console.log({rounds});
