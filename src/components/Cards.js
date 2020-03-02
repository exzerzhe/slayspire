/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {List, Typography} from '@material-ui/core'
import {ListItem} from '@material-ui/core'
import '../style.css'
import { withSnackbar} from 'notistack'


const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    justifyContent: 'center',
}
const ItemsList = {
    backgroundColor: 'rgb(34,193,195)',
    background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(3,2,3,0.8438725832129726) 97%)',
    border:'1px solid black',
    borderRadius:15,
    padding:5,
    ':hover': {
        color:'black'
    }
}
const message = 'У ВАС НЕ ХВАТАЕТ МАНЫ'


class Cards extends React.Component {
    
    componentDidMount(){
        if (this.props.renderCards === false){
        this.props.fetchMoves(this.props.playerName)
        }
    }

    dealCardDamage = (dmg, mana, move, heal, buff) => {
        if((this.props.mana - mana) <0){
            console.log(this.props.mana)
            this.props.enqueueSnackbar(message,{
                variant: 'error',
                vertical: 'top',
                horizontal: 'left'
            })
            } else {
        this.props.damageDeal(dmg, move, heal, buff)
        this.props.manaReduce(mana)
        this.props.removeCard(move)
    }
}

    render(){
        if (this.props.renderCards === true) {
        return(
            <div>
                {this.props.fetching? null :
                <List style={flexContainer}>
                    {this.props.data.map((item)=>
                    <a href="#" onClick={()=>{this.dealCardDamage(item.damage, item.mana, item.name, item.heal, item.buff)}} style={{marginRight:15, textDecoration:'none', color:'black'}}>
                        <ListItem style={ItemsList}>
                            <div className="Card" style={{padding:5}}>
                            <Typography variant='h5' style={{textAlign:'center', color:'gray'}}>{item.name}</Typography><br></br>
                            {item.damage <= 0? null :
                            <div>
                            <Typography variant="button">НАНОСИТ</Typography>
                            <Typography variant='button' style={{border:'1px solid black', borderRadius:50, padding:5, backgroundColor:'red', color:'white', marginLeft:5, marginRight:5}}>
                               {item.random === true? <text>10 - 40</text> : <text>{item.damage}</text>}
                                </Typography>
                            {this.props.renderMultiplier? <Typography variant='button' style={{color:'red', marginRight:5}}>+50%</Typography>: null}
                            <Typography variant="button">УРОНА</Typography><br></br>
                            </div>}
                            <Typography variant="button">СТОИТ</Typography>
                            <Typography variant='button' style={{border:'1px solid black', borderRadius:50, padding:5, backgroundColor:'blue', color:'white', marginLeft:5, marginRight:5}}>{item.mana}</Typography>
                            <Typography variant="button">МАНЫ</Typography><br></br>
                            {item.heal !== undefined?
                            <div>
                            <Typography variant="button">ВОССТАНАВЛИВАЕТ</Typography>
                             <Typography variant='button' style={{border:'1px solid black', borderRadius:50, padding:5, backgroundColor:'green', color:'white', marginLeft:5, marginRight:5}}>{item.heal}</Typography>
                             <Typography variant="button">ЗДОРОВЬЯ</Typography></div> : null}
                            {item.buff !== undefined? 
                            <div>
                            <Typography variant="button">УРОН В ЭТОМ ХОДУ УВЕЛИЧЕН НА</Typography>
                             <Typography variant='button' style={{border:'1px solid black', borderRadius:50, padding:5, backgroundColor:'gray', color:'white', marginLeft:5, marginRight:5}}>{item.percent}</Typography>
                             <Typography variant="button">%</Typography></div> : null}
                             </div>
                            </ListItem>
                        </a>)}
                </List>}
            </div>
        )} else {return(null)}
    }
}

export default withSnackbar(Cards)