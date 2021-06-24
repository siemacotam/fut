import React, { Component } from 'react';
import '../styles/UserPanel.css'
import {playerCards} from '../pages/LatestCards'
import {exp} from '../pages/Pack'


class UserPanel extends Component {

    cardsAmount = 0

    state = { 
        amount: 0,
        cash: 0,
        experience: 0,
     }

    interval = () => { setInterval(()=>this.setState({
        amount: this.cardsAmount,
        experience: exp
    }), 10)}
    componentDidMount(){this.interval()}

    render() { 
        const playerCardsSummary = playerCards.length
        // suma powtórek !!!!
        // const playerDuoCards = playerCards.map(item => item.amount).reduce((a, b) => a + b)
        this.cardsAmount = playerCardsSummary

        return ( 
            <nav className='userNav'>
                <li>LVL <br /><span>1</span></li>
                <li> {this.state.experience} / 100</li>
                <li><span>{this.state.cash}</span> $</li>
                <li>karty <span>{playerCards.length > 0 ? this.state.amount : 0}</span></li>
            </nav>
         );
    }
}
 
export default UserPanel;