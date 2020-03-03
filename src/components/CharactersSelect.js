/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Container, List, ListItem, Typography} from '@material-ui/core'


const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    justifyContent: 'center',
}


export default class CharactersSelect extends React.Component {
    componentDidMount(){
        this.props.fetchCharacter()
    }
    playerNameChoosen = (playerName, avatar) => {
this.props.gameMenu(playerName, avatar)
    }
    render(){
        return(
         <Container style={{textAlign:'center', marginTop:200}}>
             <Typography className="tracking-in-contract-bck" variant='h4' style={{color:'white', marginBottom:100}}>Выберите своего бойца</Typography>
             <List style={flexContainer}>
                 {this.props.character.map((item)=>
                 <div style={{marginRight:30}}>
                     <Container>
                      <Typography variant="h5" style={{color:'black',textShadow:'0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00'}}>{item.name}</Typography>
                      </Container>
                 <a href="#" onClick={()=>{this.playerNameChoosen(item.name, item.avatar)}} style={{textDecoration:'none',}}>
                     <ListItem style={{
    border:'1px solid white',
    backgroundColor: '#f3f3f3',
    borderRadius:15,
    fontSize: 17,
    padding:20,
    height: 200,
    width: 350,
    backgroundImage: "url(" + item.avatar + ')',
    backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
  backgroundPosition: 'center',
    }}>
                         <Container style={{textAlign:'center', paddingTop:'50%'}}>
                             <Typography variant="p" style={{color:'white', textShadow:'-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5)'}}>{item.description}</Typography><br></br>
                         </Container>
                    </ListItem>
                </a></div>)}
             </List>
        </Container>
        )
    }
}
