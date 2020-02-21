import { combineReducers } from "redux";
import { cardsReducer } from './cardsReducer'
import { enemyHp } from './enemyHp'
import { manaReducer } from './manaReducer'
import { enemyTurn } from './enemyTurn';
import { gameMenuReducer } from './gameMenuReducer'
import { characterReducer } from './characterReducer'





export const rootReducer = combineReducers({
    cardsReducer: cardsReducer,
    enemyHp: enemyHp,
    manaReducer: manaReducer,
    enemyTurn: enemyTurn,
    gameMenuReducer: gameMenuReducer,
    characterReducer: characterReducer
    
})