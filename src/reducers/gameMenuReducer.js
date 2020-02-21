import { GAME_MENU } from "../actions/GameMenu"


const initialState = {
    gameBegin: false
}

export function gameMenuReducer (state=initialState, action) {
    switch (action.type){
        case GAME_MENU:
            return{...state, gameBegin: true}
            default:
                return state
}
}