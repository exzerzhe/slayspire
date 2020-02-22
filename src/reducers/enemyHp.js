import { DAMAGE_DEAL, DAMAGE_DEAL_PREPARE } from "../actions/damageDeal"
import { NEW_GAME } from "../actions/newGame"
import { FETCHING_ENEMY, FETCH_ENEMY_SUCCESS } from "../actions/fetchEnemy"
import { ENEMY_TURN } from "../actions/enemyActions"

const initialState = {
    hp: 1,
    fetching: false,
    enemyName: '',
    playerMove: '',
    moveFetching: false,
    enemyAvatar: '',
    renderMultiplier: false
}
var damageMultiplied
var damage
var renderPercent
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
        case DAMAGE_DEAL:{
            
            if (action.buff !== undefined){
                damageMultiplied = action.buff
            } else {
                damage = action.dmg
            }
            if (damageMultiplied > 0){
            damage = action.dmg + (action.dmg * damageMultiplied)
            renderPercent = true
            } else {
                damage = action.dmg
                renderPercent = false
            }
            return{...state, hp:state.hp - damage, moveFetching:false, renderMultiplier: renderPercent}
        }
        case ENEMY_TURN: {
            damageMultiplied = 0
            damage = 0
            renderPercent = false
            return{...state, renderMultiplier: false}
        }
            
            case NEW_GAME:
                return{...state, hp: initialState.hp}
            
            default:
                return state
}
}