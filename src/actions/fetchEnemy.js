export const FETCH_ENEMY_SUCCESS = 'FETCH_ENEMY_SUCCESS'
export const FETCHING_ENEMY = 'FETCHING_ENEMY'

export function fetchEnemy () {
    return dispatch => {
        dispatch({type: FETCHING_ENEMY})
        setTimeout(()=>{
            fetch('./enemyList.json')
        .then(res=>res.json())
    .then(data => dispatch({type: FETCH_ENEMY_SUCCESS, data}))
        },3000)
    }
}