import {FETCH_MOVES_SUCCESS} from '../actions/movesActions'
import { REMOVE_CARD } from '../actions/removeCard'
import { ENEMY_TURN } from '../actions/enemyActions'

const initialState = {
    data: [],
    renderCards: false,
}

export function cardsReducer (state=initialState, action) {
    switch (action.type){
        case FETCH_MOVES_SUCCESS:
            {
                let jsondata = action.data
                let moves = []
                for (let i = 0; i <= 4; i++){
                    let indexmove = Math.floor(Math.random() * jsondata.length)
                    let move = jsondata[indexmove]
                    moves.push(move)
                 jsondata = jsondata.filter((item, index)=>index !== indexmove)
                }
            return{...state, data: moves, renderCards: true}
            }
            case ENEMY_TURN: {
                return{...state, renderCards:false}
            }
            case REMOVE_CARD:{
                let currentData = state.data
               let finalData = currentData.filter((item)=>item.name !== action.cardName)
                return{...state, data:finalData}
            }
            default:
                return state
}
}