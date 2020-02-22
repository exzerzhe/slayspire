import { ENEMY_TURN, DEAL_DAMAGE } from "../actions/enemyActions"
import { NEW_GAME } from "../actions/newGame"
import { GAME_MENU } from "../actions/GameMenu"
import { DAMAGE_DEAL } from "../actions/damageDeal"



const initialState = {
    move: [],
    damage: '',
    enemyPhrase: false,
    playerHp: 100,
    playerName: '',
    renderButton: true,
    avatar: ''
}

export function enemyTurn (state=initialState, action) {
    switch (action.type){
        case ENEMY_TURN:
            {
                let moveIndex = Math.floor(Math.random() * action.data.length)
                let choosenMove = action.data[moveIndex]
                let damageCalc = choosenMove.damage
            return{...state, enemyPhrase:true, move:choosenMove, damage: damageCalc, renderButton:false}
            }
            case DEAL_DAMAGE: 
                
            return{...state, playerHp: state.playerHp - state.damage, enemyPhrase:false, renderButton:true}
            
            case NEW_GAME:
                return{...initialState, playerHp:state.playerHp, playerName: state.playerName, avatar:state.avatar }
                case GAME_MENU:
                    return{...initialState, playerName: action.playerName, avatar:action.avatar}
                    case DAMAGE_DEAL:{
                        if (action.heal !== undefined){
                            var heal = action.heal
                            if (state.playerHp === 100){
                                heal = 0
                            }
                        } else heal = 0

                        return{...state, playerHp: state.playerHp + heal }
                    }
            default:
                return state
}
}