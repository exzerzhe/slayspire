import React from 'react'
import { Container} from '@material-ui/core'
import LinearProgress from '@material-ui/core/LinearProgress'

const normalise = value => (value - 0) * 100 / (10-0)


export default class Player extends React.Component {

    
    render(){
        
        return(
            <div>
                <div style={{color:'white', textAlign:'center', marginBottom:10}}>
                {this.props.playerName}
            </div>
            <Container className="text-focus-in" style={{height: window.innerHeight-500,
            maxWidth: window.innerHeight-500,
  backgroundColor:'#f3f3f3', 
  borderRadius:200, 
  textAlign:'center', 
  backgroundImage: "url(" + this.props.avatar + ')',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
  border: '1px solid black',
  backgroundPosition: 'center',}}>
            </Container>
            <Container style={{color:'white', textAlign:'center'}}>
                HP: {this.props.playerHp}<br></br>
                <LinearProgress variant='determinate' color="secondary" style={{height:10, border:'1px solid black'}} value={this.props.playerHp}></LinearProgress>
                Mana: {this.props.mana}
                <LinearProgress variant='determinate' style={{height:10, border:'1px solid black'}} value={normalise(this.props.mana)}></LinearProgress>
            </Container>
            </div>
        )
        } 
}