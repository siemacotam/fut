import React, { Component } from 'react';
import {cards, playerCards} from './LatestCards'

class Pack extends Component {
    state = { 
        index: '',
     }

    handleButton = () => {
        const index = Math.floor(Math.random()*cards.length)
        this.setState({
            index
        })
    }

    handleSaveButton = () => {
        const name = playerCards.map(item => item.name)
        const name2 = cards[this.state.index].name

        const option = name.filter( item => {if(item === name2){return 1}})
        console.log(option)
        if(option[0] === name2 ) {(
            // dodawanie ilosci kart
            playerCards.map( card => {if(card.name === name2){return card.amount = card.amount + 1} console.log(card.amount) })
            )} else {
            playerCards.push(cards[this.state.index])
        }

        this.setState({
            index: ''
        })

        console.log(playerCards)
    }

    render() { 
        return ( 
            <div>
                {this.state.index !== '' ? null : <button onClick = {this.handleButton}>click me</button>}
                {this.state.index !== '' ? <div className='cardsWrap'><div className='card' key ={cards[this.state.index].name}>
                    <img className='card__player' src={cards[this.state.index].photo} alt="" />
                    <p>{cards[this.state.index].rate}</p>
                    <p>{cards[this.state.index].position}</p>
                    <img src={cards[this.state.index].nationalityLogo} alt="" /> <br />
                    <img src={cards[this.state.index].clubLogo} alt="foto" />
                <p className='card__name'>{cards[this.state.index].name}</p>
                </div></div>: null}
                {this.state.index !== '' ? <button onClick = {this.handleSaveButton}>zapisz</button> : null }
            </div>
         );
    }
}
 
export default Pack;