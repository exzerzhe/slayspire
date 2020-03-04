export const ENEMY_TURN = 'ENEMY_TURN'
export const DEAL_DAMAGE = 'DEAL_DAMAGE'

export function enemyTurn () {
    return dispatch => {
        fetch('./enemyMoves.json')
        .then(res=>res.json())
    .then(data => dispatch({type: ENEMY_TURN, data}))
    setTimeout(()=>{
        dispatch({
            type: DEAL_DAMAGE
        })
    },4000)
    }
}