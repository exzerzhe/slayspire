import {FETCH_NEW_MOVES_SUCCESS} from '../actions/fetchNewMoves'

const initialState = {
    newData: [],
}

export function newCardsReducer(state=initialState, action) {
    switch (action.type){
        case FETCH_NEW_MOVES_SUCCESS:
            {
                let jsondata = action.data
                let moves = []
                for (let i = 0; i <= 2; i++){
                    let indexmove = Math.floor(Math.random() * jsondata.length)
                    let move = jsondata[indexmove]
                    moves.push(move)
                 jsondata = jsondata.filter((item)=>item.name !== move.name)
                }
            return{...state, newData: moves}
        }
            default:
                return state
    }
}