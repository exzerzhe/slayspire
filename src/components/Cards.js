/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {List, Typography, CardActionArea, CardMedia, CardContent, Container} from '@material-ui/core'
import {ListItem} from '@material-ui/core'
import '../style.css'
import { withSnackbar} from 'notistack'
import { Card } from '@material-ui/core'
import {CardHeader} from '@material-ui/core'
import {Avatar} from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import GavelIcon from '@material-ui/icons/Gavel'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'


const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    justifyContent: 'center',
}
const ItemsList = {
    backgroundColor: 'rgb(2,3,2)',
background: 'linear-gradient(0deg, rgba(2,3,2,1) 0%, rgba(39,91,78,0.7) 100%)',
border: '1px solid black',
    color:'white',
    borderRadius: 20,
    minWidth:100,
    maxWidth:200    
}
const message = 'У ВАС НЕ ХВАТАЕТ МАНЫ'


class Cards extends React.Component {
    
    componentDidMount(){
        if (this.props.renderCards === false){
        this.props.fetchMoves(this.props.playerName)
        }
    }

    dealCardDamage = (dmg, mana, move, heal, buff, index) => {
        if((this.props.mana - mana) <0){
            this.props.enqueueSnackbar(message,{
                variant: 'error',
                vertical: 'top',
                horizontal: 'left'
            })
            } else {
        this.props.damageDeal(dmg, move, heal, buff)
        this.props.manaReduce(mana)
        this.props.removeCard(move, index)

    }
}


    render(){
        return(
            <Container maxWidth="xl">
                {this.props.fetching? null :
                <List id="ag" className="slide-in-blurred-top" style={flexContainer}>
                    {this.props.data.map((item,index)=>
                    <a href="#" onClick={()=>{this.dealCardDamage(item.damage, item.mana, item.name, item.heal, item.buff, index)}}
                     style={{marginRight:20, textDecoration:'none', color:'black'}}>
                        <div className="Card">
                        <Card style={ItemsList}>
                            <CardHeader 
                            avatar={<Avatar style={{backgroundColor:'#0000b2'}}>{item.mana}</Avatar>}
                            title={item.name}>  
                            </CardHeader>
                            <CardActionArea>
                                <CardMedia
                                  component="img"
                                  alt="cardimg"
                                  height='100'
                                  image={item.avatar}
                                  title="sss"
                                />
                                <CardContent style={{textAlign:'center'}}>
                                        {item.random === true? <Typography variant="body2">Урон 10-40 <GavelIcon style={{fontSize:12, color:'red'}}/></Typography> : <Typography variant="body2">Урон {item.damage} <GavelIcon style={{fontSize:12, color:'red'}}/> </Typography>}
                                        {item.heal !== undefined? <Typography variant="body2">Восстанавливает {item.heal} <FavoriteIcon style={{fontSize:12, color:'green'}}/></Typography>:null}
                                        {item.buff !== undefined? <Typography variant="body2">Урон в этом ходу увеличен на {item.percent}% <ArrowUpwardIcon style={{fontSize:12, color:'yellow'}}/></Typography>: null}
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        </div>
                        </a>)}
                </List>}
                </Container>
        )
    }
}

export default withSnackbar(Cards)
/*
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
                            */