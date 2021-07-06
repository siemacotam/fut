import React, { Component } from 'react';
import {cards, playerCards} from './LatestCards'
import '../styles/Pack.css'

export let exp = 0

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
        exp += 5

        const option = name.filter( item => {if(item === name2){return 1}})
        console.log(option)
        if(option[0] === name2 ) {(
            // dodawanie ilosci kart
            playerCards.map( card => {if(card.name === name2){return card.amount = card.amount + 1} })
            )} else {
            playerCards.push(cards[this.state.index])
        }

        this.setState({
            index: ''
        })
    }

    render() { 
        return ( 
            <div>
                {this.state.index !== '' ? null : <button className='pack__button' onClick = {this.handleButton}>click me</button>}
                {this.state.index !== '' ? <div className='cardsWrap'><div className={ cards[this.state.index].type + ' card'} key ={cards[this.state.index].name}>
                    <img className='card__player' src={cards[this.state.index].photo} alt="" />
                    <p>{cards[this.state.index].rate}</p>
                    <p>{cards[this.state.index].position}</p>
                    <img src={cards[this.state.index].nationalityLogo} alt="" /> <br />
                    <img src={cards[this.state.index].clubLogo} alt="foto" />
                <p className='card__name'>{cards[this.state.index].name}</p>
                </div></div>:
                
                <div className='cardsWrap'><div className='card card--big'>
                </div></div>

                 }
                {this.state.index !== '' ? <button className='pack__button' onClick = {this.handleSaveButton}>zapisz</button> : null }
            </div>
         );
    }
}
 
export default Pack;