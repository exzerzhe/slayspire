import React from 'react'
import {Container, Typography} from '@material-ui/core'
import {Button} from '@material-ui/core'
import '../style.css'

const quotes = [
    'Он был великим бойцом...', 'Пусть земля будет ему пухом...', 'Спасибо тебе за все...'
]
export default class GameEnded extends React.Component {

    getQuote = () => {
        let index = Math.floor(Math.random() * quotes.length)
        return quotes[index]
    }


    render(){
        return(
            <div>
            <Container style={{textAlign:'center', marginTop: 20, marginBottom: 20}}>
                <Button onClick={()=>window.location.reload()} variant='contained'>НАЧАТЬ НОВУЮ ИГРУ</Button>
            </Container>
            <Container>
                <Typography variant="h2" style={{color:'white', textAlign:'center'}}> Боец "{this.props.playerName}" был повержен врагом "{this.props.enemyName}"</Typography>
            </Container>
            <Container style={{textAlign:'center'}}>
            <div className='tracking-in-contract-bck' style={{textAlign:'center', color:'white', fontSize: 25, marginTop: 20}} id="quotes">{this.getQuote()}</div>
            </Container>
            <Container maxWidth="sm" style={{height:300,
            width: 300,
            marginTop: 80,
  borderRadius:400, 
  textAlign:'center', 
  backgroundImage: "url(" + this.props.avatar + ')',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
  backgroundPosition: 'center',
  paddingTop: 100}}>
      <Typography variant="h2" style={{color:'white'}}>
                    F
                </Typography>
            </Container>
            </div>
        )
    }
}