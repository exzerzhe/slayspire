export const DAMAGE_DEAL = 'DAMAGE_DEAL'
export const DAMAGE_DEAL_PREPARE = 'DAMAGE_DEAL_PREPARE'


export function damageDeal (dmg, move) {
    return dispath => {
        dispath({type: DAMAGE_DEAL_PREPARE, move})
        setTimeout(()=>{
            dispath({type: DAMAGE_DEAL, dmg})
        },2000)
    }
}

