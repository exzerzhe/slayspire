import {koshkaMoves} from '../koshkaMoves'
import {kalikMoves} from '../kalikMoves'
import {devochkaMoves} from '../devochkaMoves'
export const FETCH_MOVES_SUCCESS = 'FETCH_MOVES_SUCCESS';



export function fetchMoves (playerName) {
    if (playerName === 'ДЕВОЧКА НА ТАБЛЕТКАХ') {
        return dispatch => {
            let data = devochkaMoves
            setTimeout(()=>{
            dispatch({type: FETCH_MOVES_SUCCESS, data})
        },3000)
        setTimeout(()=>{
            document.getElementById('ag').setAttribute('class',"slide-in-blurred-top")
        },3500)
        }}
    if (playerName === 'КАЛИК') {
        return dispatch => {
            let data = kalikMoves
            setTimeout(()=>{
            dispatch({type: FETCH_MOVES_SUCCESS, data})
        },3000)
        setTimeout(()=>{
            document.getElementById('ag').setAttribute('class',"slide-in-blurred-top")
        },3500)
        }}
        if (playerName === 'КОШКА') {
            return dispatch => {
                let data = koshkaMoves
                setTimeout(()=>{
                dispatch({type: FETCH_MOVES_SUCCESS, data})
            },3000)
            setTimeout(()=>{
                document.getElementById('ag').setAttribute('class',"slide-in-blurred-top")
            },3500)
            }}
}