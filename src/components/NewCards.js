/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Container, Typography, ListItem, CardActionArea, CardMedia, CardContent} from '@material-ui/core'
import { List } from '@material-ui/core'
import '../style.css'
import {koshkaMoves} from '../koshkaMoves'
import {devochkaMoves} from '../devochkaMoves'
import {kalikMoves} from '../kalikMoves'
import { Card } from '@material-ui/core'
import {CardHeader} from '@material-ui/core'
import {Avatar} from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import GavelIcon from '@material-ui/icons/Gavel'

const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    justifyContent: 'center',
}
const ItemsList = {
    backgroundColor: 'rgb(2,3,2)',
background: 'linear-gradient(0deg, rgba(2,3,2,1) 0%, rgba(39,91,78,0.7) 100%)',
border: '1px solid gray',
    color:'white',
    borderRadius: 20,
    maxWidth:250
}


export default class NewCards extends React.Component {
    componentDidMount(){
        this.props.fetchNewMoves(this.props.playerName)
    }
    addCard = (dmg, mana, name, heal, buff, percent, avatar) => {
        if (this.props.playerName === 'КОШКА'){
            koshkaMoves.push({
            name: name,
            heal: heal,
            damage: dmg,
            mana: mana,
            buff: buff,
            percent: percent,
            avatar: avatar
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
            percent: percent,
            avatar: avatar
            })
        }
        if (this.props.playerName === 'КАЛИК'){
            kalikMoves.push({
            name: name,
            heal: heal,
            damage: dmg,
            mana: mana,
            buff: buff,
            percent: percent,
            avatar: avatar
            })
        }
        
    }
    render() {
        return(
            <Container maxWidth="md" style={{marginTop:70}}>
                <Typography variant="h2" style={{color:'white', marginBottom: 30}}>Выберете вашу награду</Typography>
                <List style={flexContainer}>
                    {this.props.newData.map((item)=>
                    <a href="#" style={{marginRight:20, textDecoration:'none', color:'black'}}
                     onClick={()=>{this.addCard(item.damage, item.mana, item.name, item.heal, item.buff, item.percent, item.avatar); 
                        this.props.fetchEnemy();
                        this.props.newGame();
                        this.props.fetchMoves(this.props.playerName)}}>
                        <div className="Card">
                        <Card style={ItemsList}>
                            <CardHeader style={{textAlign:'left'}}
                            avatar={<Avatar style={{backgroundColor:'#0000b2'}}>{item.mana}</Avatar>}
                            title={item.name}>  
                            </CardHeader>
                            <CardActionArea>
                                <CardMedia
                                  component="img"
                                  alt="cardimg"
                                  height="150"
                                  image={item.avatar}
                                  title="sss"
                                />
                                <CardContent style={{textAlign:'center'}}>
                                        {item.random === true? <Typography variant="body2">Урон 10-40 <GavelIcon style={{fontSize:12, color:'red'}}/></Typography> : <Typography variant="body2">Урон {item.damage} <GavelIcon style={{fontSize:12, color:'red'}}/> </Typography>}
                                        {item.heal !== undefined? <Typography variant="body2">Восстанавливает {item.heal} <FavoriteIcon style={{fontSize:12, color:'green'}}/></Typography>:null}
                                        {item.buff !== undefined? <Typography variant="body2">Урон в этом ходу увеличен на {item.percent}% <ArrowUpwardIcon style={{fontSize:12, color:'yellow'}}/> </Typography>: null}
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        </div>
                        </a>)}
                </List>           
        </Container>
        )
    }
}

/*
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
*/