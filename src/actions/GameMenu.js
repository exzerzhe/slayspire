export const GAME_MENU = 'GAME_MENU'

export function gameMenu (playerName, avatar) {
    return dispath => {
        dispath({type: GAME_MENU, playerName, avatar})
    }
}