export const FETCH_CHARACTER_SUCCESS = 'FETCH_CHARACTER_SUCCESS'

export function fetchCharacter () {
    return dispatch => {
        fetch('./characters.json')
        .then(res=>res.json())
    .then(data => dispatch({type: FETCH_CHARACTER_SUCCESS, data}))
    }
}