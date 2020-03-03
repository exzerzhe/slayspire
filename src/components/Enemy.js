import React from 'react'
import { Container, LinearProgress } from '@material-ui/core'

const normalise = value => (value - 0) * 100 / (100-0)


export default class Player extends React.Component {
    
    componentDidMount(){
        this.props.fetchEnemy()
    }
    
    render(){
        if (this.props.fetching === false) {
        return(
            <div>
                <div style={{color:'white', textAlign:'center', marginBottom:10}}>{this.props.enemyName}</div>
            <Container className="text-focus-in" style={{height:window.innerHeight-500, 
            maxWidth: window.innerHeight-500,
  backgroundImage: "url(" + this.props.enemyAvatar + ')',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
  border: '1px solid black',
  backgroundPosition: 'center', textAlign:'center', borderRadius:200, paddingTop:'40%'}}>
                {this.props.hp <= 0? <div style={{color:'red'}}>МЕРТВ</div> : null}
                </Container>
                <Container style={{textAlign:'center', color:'white'}}>
                {this.props.hp <=0 ? null :
                <div>HP:{this.props.hp}
                <LinearProgress color="secondary" style={{height:10, border:'1px solid black'}} variant="determinate" value={normalise(this.props.hp)}></LinearProgress></div>}
                </Container>
                </div>
        )
                } else return (null)
    }
}