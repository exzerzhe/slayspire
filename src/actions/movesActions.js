export const FETCH_MOVES_SUCCESS = 'FETCH_MOVES_SUCCESS';

export function fetchMoves (playerName) {
    if (playerName === 'ДЕВОЧКА НА ТАБЛЕТКАХ') {
    return dispatch => {
        fetch('./devochkaMoves.json')
        .then(res=>res.json())
    .then(data => setTimeout(()=>{
        dispatch({type: FETCH_MOVES_SUCCESS, data})
    },3000)
        )
    }}
    if (playerName === 'КАЛИК') {
        return dispatch => {
            fetch('./kalikMoves.json')
            .then(res=>res.json())
        .then(data => setTimeout(()=>{
            dispatch({type: FETCH_MOVES_SUCCESS, data})
        },3000))
        }}
        if (playerName === 'КОШКА') {
            return dispatch => {
                fetch('./koshkaMoves.json')
                .then(res=>res.json())
            .then(data => setTimeout(()=>{
                dispatch({type: FETCH_MOVES_SUCCESS, data})
            },3000))
            }}
}