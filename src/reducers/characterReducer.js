import {FETCH_CHARACTER_SUCCESS} from '../actions/characterSelect'

const initialState = {
    character: []
}

export function characterReducer (state=initialState, action) {
    switch (action.type){
        case FETCH_CHARACTER_SUCCESS:
            return{...state, character:action.data}
            default:
                return state
    }}