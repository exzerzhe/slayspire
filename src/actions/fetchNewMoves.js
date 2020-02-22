import {koshkaNewCards} from '../koshkaNewCards'
import {kalikNewCards} from '../kalikNewCards'
import {devochkaNewCards} from '../devochkaNewCards'
export const FETCH_NEW_MOVES_SUCCESS = 'FETCH_MOVES_SUCCESS';

export function fetchNewMoves (playerName) {
    if (playerName === 'ДЕВОЧКА НА ТАБЛЕТКАХ')  {
        return dispatch => {
            let data = devochkaNewCards
            
            dispatch({type: FETCH_NEW_MOVES_SUCCESS, data})
       
        }}
    if (playerName === 'КАЛИК')  {
        return dispatch => {
            let data = kalikNewCards
            
            dispatch({type: FETCH_NEW_MOVES_SUCCESS, data})
       
        }}
        if (playerName === 'КОШКА') {
            return dispatch => {
                let data = koshkaNewCards
                
                dispatch({type: FETCH_NEW_MOVES_SUCCESS, data})
           
            }}
}