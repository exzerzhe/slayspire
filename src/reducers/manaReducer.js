import { MANA_REDUCE } from "../actions/manaReduce"
import { DEAL_DAMAGE } from "../actions/enemyActions"
import { NEW_GAME } from "../actions/newGame"


const initialState = {
    mana: 10,
    turn: 1,
}

export function manaReducer (state=initialState, action) {
    switch (action.type){
        case MANA_REDUCE:
            return{...state, mana:state.mana-action.mana}
            case DEAL_DAMAGE:
                return{...state, mana: initialState.mana, turn:state.turn + 1}
                case NEW_GAME:
                    return{...initialState}
            default:
                return state
}
}