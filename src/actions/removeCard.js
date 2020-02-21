export const REMOVE_CARD = 'REMOVE_CARD'

export function removeCard (cardName) {
    return dispath => {
        dispath({type: REMOVE_CARD, cardName})
    }
}