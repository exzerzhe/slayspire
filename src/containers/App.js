import React from 'react';
import {Component} from 'react'
import Cards from '../components/Cards'
import { connect } from 'react-redux'
import { fetchMoves } from '../actions/movesActions';
import { Grid, Container, Typography } from '@material-ui/core';
import Background from '../images/background.jpg'
import Player from '../components/Player';
import { damageDeal } from '../actions/damageDeal';
import Enemy from '../components/Enemy'
import { manaReduce } from '../actions/manaReduce'
import { enemyTurn } from '../actions/enemyActions'
import {Button} from '@material-ui/core'
import {newGame} from '../actions/newGame'
import {fetchEnemy} from '../actions/fetchEnemy'
import { gameMenu } from '../actions/GameMenu';
import CharactersSelect from '../components/CharactersSelect';
import { fetchCharacter } from '../actions/characterSelect';
import { removeCard } from '../actions/removeCard';
import GameEnded from '../components/GameEnded';
import NewCards from '../components/NewCards';
import { fetchNewMoves } from '../actions/fetchNewMoves';
import '../style.css'




const AppStyle ={
  backgroundImage: "url(" + Background + ")",
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
  backgroundPosition: 'center',
  overflow: 'hidden',
  height: window.innerHeight
}
const PhrasesPlayer = [
  'Отведай мое лучшее движение', 'Получай', 'Посмотрим, как тебе понравится это', 'Вжух!'
]
const PhrasesEnemy = [
  'Познай мой гнев!', 'Я сведу тебя с ума', 'И это все на что ты способен?', 'Так тебе от меня не избавиться!'
]

class App extends Component {
  render(){
    let randomPlayerPhrase = Math.floor(Math.random() * PhrasesPlayer.length)
    let playerSay = PhrasesPlayer[randomPlayerPhrase]
    let randomEnemyPhrase = Math.floor(Math.random() * PhrasesEnemy.length)
    let enemySay = PhrasesEnemy[randomEnemyPhrase]
    const 
    {
    data, 
    fetchMovesAction, 
    damageDealAction, 
    hp,
    mana,
    manaReduceAction, 
    enemyTurnAction, 
    move,
    enemyPhrase,
    playerHp,
    turn,
    renderButton,
    newGameAction,
    enemyName,
    fetchEnemyAction,
    fetching,
    gameBegin,
    gameMenuAction,
    character,
    fetchCharacterAction,
    playerName,
    playerMove,
    moveFetching,
    avatar,
    removeCardAction,
    renderCards,
    enemyAvatar,
    renderMultiplier,
    fetchNewMovesAction,
    newData
  } = this.props
  if (playerHp <=0) {
    return(
      <Container maxWidth='xl' style={AppStyle}>
      <GameEnded avatar={avatar} playerName={playerName} enemyName={enemyName}/>
      </Container>
    )
  }
 if (gameBegin === true){
    return(
      <Container maxWidth='xl' style={AppStyle}>
          <Container maxWidth='xl' style={{height:window.innerHeight - 670, textAlign:'center', paddingTop:10}}>
            {hp > 0?
            <div>
            {fetching? <div className="tracking-in-contract-bck" style={{color:'white', marginBottom:20, fontSize:20}}>Ищу врага</div> : 
            <div>
              <Typography variant="h5" style={{color:'white'}}> Turn: {turn}</Typography>
            {renderButton?
            <Button variant='contained' onClick={()=>{enemyTurnAction();fetchMovesAction(playerName);document.getElementById('ag').setAttribute('class',"slide-out-blurred-top")}}>End turn</Button> : null}
            </div> }
            </div> :
            <div>
            <div className="tracking-in-contract-bck" style={{color:'white', fontSize: 30, marginBottom: 30}}>{enemyName} был повержен</div>
            <NewCards fetchNewMoves={fetchNewMovesAction} playerName={playerName} newData={newData} newGame={newGameAction} fetchEnemy={fetchEnemyAction} fetchMoves={fetchMovesAction}/>
            <Button variant="contained" style={{marginTop:70}} onClick={()=>{fetchEnemyAction();newGameAction();fetchMovesAction(playerName)}}>Не хочу я ваших карт</Button>
            </div> }
            </Container>
            <Container maxWidth="xl">
          <Grid container spacing={1}>
            <Grid item xs={3}>
              {hp >0?
            <Container>
              <Player mana={mana} enemyTurn={enemyTurnAction} playerHp={playerHp} hp={hp} playerName={playerName} avatar={avatar}/>
            </Container> : null}
            </Grid>
            <Grid item xs={3}>
              <Container style={{textAlign:'left', height:140, paddingTop:'25%'}}>
                {moveFetching? 
                <Typography className="text-focus-in" variant="h5" style={{color:'white'}}>
                {playerSay}:
                <br></br>
                <Typography className="text-focus-in" variant="h4" style={{color:'red', textShadow:'#FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px'}}>
                {playerMove}
                </Typography>
                </Typography> : null}
              </Container>
              </Grid>
              <Grid item xs={3}>
                <Container style={{textAlign:'right', height:140, paddingTop:'25%'}}>
                {enemyPhrase ?
                <Typography className="text-focus-in" variant="h5" style={{color:'white'}}>
                {enemySay}
                <br></br>
                <Typography className="text-focus-in" variant="h4" style={{color:'red', textShadow:'0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18'}}>
                {move.name}
                </Typography>
                <Typography>
                  Урон: {move.damage}
                </Typography>
                </Typography> : null}
                </Container>
              </Grid>
            <Grid item xs={3}>
              {hp > 0?
              <Container>
                <Enemy hp={hp} move={move} enemyPhrase={enemyPhrase} enemyName={enemyName} fetchEnemy={fetchEnemyAction} fetching={fetching} enemyAvatar={enemyAvatar}/>
              </Container>: null}
            </Grid>
            </Grid>
            </Container>
            <Container maxWidth='xl' style={{marginTop:50}}>
              
              <div>
              {hp <= 0? null :
          <Cards data={data} fetchMoves={fetchMovesAction} damageDeal={damageDealAction} manaReduce={manaReduceAction} mana={mana} playerName={playerName} renderButton={renderButton} renderCards={renderCards} removeCard={removeCardAction} hp={hp} fetching={fetching} renderMultiplier={renderMultiplier}/>}
          </div>
          </Container>
      </Container>
    )} else 
    return (
      <Container maxWidth='xl' style={AppStyle}>
        <CharactersSelect gameMenu={gameMenuAction} character={character} fetchCharacter={fetchCharacterAction}/>
      </Container>
    )
  }
}

const mapStateToProps = store => {
  return {
    data: store.cardsReducer.data,
    hp: store.enemyHp.hp,
    mana: store.manaReducer.mana,
    playerHp: store.enemyTurn.playerHp,
    move: store.enemyTurn.move,
    enemyPhrase: store.enemyTurn.enemyPhrase,
    turn: store.manaReducer.turn,
    renderButton: store.enemyTurn.renderButton,
    fetching: store.enemyHp.fetching,
    enemyName: store.enemyHp.enemyName,
    gameBegin: store.gameMenuReducer.gameBegin,
    character: store.characterReducer.character,
    playerName: store.enemyTurn.playerName,
    playerMove: store.enemyHp.playerMove,
    moveFetching: store.enemyHp.moveFetching,
    avatar: store.enemyTurn.avatar,
    renderCards: store.cardsReducer.renderCards,
    enemyAvatar: store.enemyHp.enemyAvatar,
    renderMultiplier: store.enemyHp.renderMultiplier,
    newData:store.newCardsReducer.newData
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchMovesAction:(playerName)=>dispatch(fetchMoves(playerName)),
    damageDealAction:(dmg, move, heal, buff)=>dispatch(damageDeal(dmg, move, heal, buff)),
    manaReduceAction:(mana)=>dispatch(manaReduce(mana)),
    enemyTurnAction:()=>dispatch(enemyTurn()),
    newGameAction:()=>dispatch(newGame()),
    fetchEnemyAction:()=>dispatch(fetchEnemy()),
    gameMenuAction:(playerName, avatar)=>dispatch(gameMenu(playerName, avatar)),
    fetchCharacterAction:()=>dispatch(fetchCharacter()),
    removeCardAction:(cardName, index)=>dispatch(removeCard(cardName, index)),
    fetchNewMovesAction:(playerName)=>dispatch(fetchNewMoves(playerName))
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)