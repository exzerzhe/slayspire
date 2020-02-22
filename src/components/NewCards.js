/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Container, Typography, ListItem} from '@material-ui/core'
import { List } from '@material-ui/core'
import '../style.css'
import {koshkaMoves} from '../koshkaMoves'
import {devochkaMoves} from '../devochkaMoves'
import {kalikMoves} from '../kalikMoves'

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

export default class NewCards extends React.Component {
    componentDidMount(){
        this.props.fetchNewMoves(this.props.playerName)
    }
    addCard = (dmg, mana, name, heal, buff, percent) => {
        if (this.props.playerName === 'КОШКА'){
            koshkaMoves.push({
            name: name,
            heal: heal,
            damage: dmg,
            mana: mana,
            buff: buff,
            percent: percent
            })
            console.log(koshkaMoves)
        }
        if (this.props.playerName === 'ДЕВОЧКА НА ТАБЛЕТКАХ'){
            devochkaMoves.push({
            name: name,
            heal:heal,
            damage: dmg,
            mana: mana,
            buff: buff,
            percent: percent
            })
        }
        if (this.props.playerName === 'КАЛИК'){
            kalikMoves.push({
            name: name,
            heal: heal,
            damage: dmg,
            mana: mana,
            buff: buff,
            percent: percent
            })
        }
        
    }
    render() {
        return(
            <div style={{marginTop: 200}}>
                <Typography variant="h2" style={{color:'white', marginBottom: 30}}>Выберете вашу награду</Typography>
            <List style={flexContainer}>
                {this.props.newData.map((item)=>
                <a href="#" onClick={()=>{this.addCard(item.damage, item.mana, item.name, item.heal, item.buff, item.percent); 
                this.props.fetchEnemy();
                this.props.newGame();
                this.props.fetchMoves(this.props.playerName)}} 
                style={{marginRight:15, textDecoration:'none', color:'black'}}>
                    <ListItem style={ItemsList}>
                        <div className="Card" style={{padding:5}}>
                        <Typography variant='h5' style={{textAlign:'center', color:'gray'}}>{item.name}</Typography><br></br>
                        <Typography variant="button">НАНОСИТ</Typography>
                        <Typography variant='button' style={{border:'1px solid black', borderRadius:50, padding:5, backgroundColor:'red', color:'white', marginLeft:5, marginRight:5}}>{item.damage}</Typography>
                        {this.props.renderMultiplier? <Typography variant='button' style={{color:'red', marginRight:5}}>+50%</Typography>: null}
                <Typography variant="button">УРОНА</Typography><br></br>
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
            </List>
        </div>
        )
    }
}