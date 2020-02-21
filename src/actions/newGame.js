export const NEW_GAME = 'NEW_GAME'

export function newGame () {
    return dispath => {
        dispath({type: NEW_GAME})
    }
}
