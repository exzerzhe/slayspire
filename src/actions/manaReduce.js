export const MANA_REDUCE = 'MANA_REDUCE'

export function manaReduce (mana) {
    return dispath => {
        dispath({type: MANA_REDUCE, mana})
    }
}