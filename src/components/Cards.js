/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {List, Typography} from '@material-ui/core'
import {ListItem} from '@material-ui/core'
import '../style.css'


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


class Cards extends React.Component {
    
    componentDidMount(){
        this.props.fetchMoves(this.props.playerName)
    }

    dealCardDamage = (dmg, mana, move) => {
        if((this.props.mana - mana) <0){
            alert('no mana') 
        } else {
        this.props.damageDeal(dmg, move)
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
                    <a href="#" onClick={()=>{this.dealCardDamage(item.damage, item.mana, item.name)}} style={{marginRight:15, textDecoration:'none', color:'black'}}>
                        <ListItem style={ItemsList}>
                            <div className="Card" style={{padding:5}}>
                            <Typography variant='h5' style={{textAlign:'center', color:'gray'}}>{item.name}</Typography><br></br>
                            <Typography variant="button">НАНОСИТ</Typography>
                            <Typography variant='button' style={{border:'1px solid black', borderRadius:50, padding:5, backgroundColor:'red', color:'white', marginLeft:5, marginRight:5}}>{item.damage}</Typography>
                            <Typography variant="button">УРОНА</Typography><br></br>
                            <Typography variant="button">СТОИТ</Typography>
                            <Typography variant='button' style={{border:'1px solid black', borderRadius:50, padding:5, backgroundColor:'blue', color:'white', marginLeft:5, marginRight:5}}>{item.mana}</Typography>
                            <Typography variant="button">МАНЫ</Typography>
                            </div>
                            </ListItem>
                        </a>)}
                </List>}
            </div>
        )} else {return(null)}
    }
}

export default Cards