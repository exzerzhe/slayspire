export const REMOVE_CARD = 'REMOVE_CARD'

export function removeCard (cardName, index) {
    return dispath => {
       
            document.getElementById('ag').children[index].setAttribute('class',"slide-out-blurred-top")
            setTimeout(()=>{
                document.getElementById('ag').children[index].removeAttribute('class',"slide-out-blurred-top")
                dispath({type: REMOVE_CARD, cardName})
            },1900)
    }
}