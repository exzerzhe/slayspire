import { DAMAGE_DEAL, DAMAGE_DEAL_PREPARE } from "../actions/damageDeal"
import { NEW_GAME } from "../actions/newGame"
import { FETCHING_ENEMY, FETCH_ENEMY_SUCCESS } from "../actions/fetchEnemy"

const initialState = {
    hp: 1,
    fetching: false,
    enemyName: '',
    playerMove: '',
    moveFetching: false,
    enemyAvatar: ''
}

export function enemyHp (state=initialState, action) {
    switch (action.type){
        case FETCHING_ENEMY:
            return{...state, fetching: true}
            case FETCH_ENEMY_SUCCESS:
                {
                    let index = Math.floor(Math.random() * action.data.length)
                    let choosenEnemy = action.data[index]
                return{...state, enemyName: choosenEnemy.name, hp: choosenEnemy.hp, enemyAvatar:choosenEnemy.avatar, fetching:false}
            }
            case DAMAGE_DEAL_PREPARE:
                return{...state, playerMove: action.move, moveFetching: true }
        case DAMAGE_DEAL:
            return{...state, hp:state.hp - action.dmg, moveFetching:false}
            case NEW_GAME:
                return{...state, hp: initialState.hp}
            
            default:
                return state
}
}