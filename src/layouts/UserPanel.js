import React, { Component } from 'react';
import '../styles/UserPanel.css'
import {playerCards} from '../pages/LatestCards'
import {exp} from '../pages/Pack'

const lvlUp = [
    {
        exp: 0 ,
        level: 2,
        expToLvl:10,
    },
    {
        exp: 10,
        level: 3,
        expToLvl:15,
    },
    {
        exp: 25,
        level: 4,
        expToLvl:20,
    },
    {
        exp:45,
        level: 4,
        expToLvl:25,
    },
    {
        exp: 70,
        level: 4,
        expToLvl:30,
    },
    {
        exp: 100,
        level: 4,
        expToLvl:35,
    },
]

class UserPanel extends Component {

    cardsAmount = 0

    state = { 
        amount: 0,
        cash: 0,
        experience: 0,
        level: 1,
     }

     levelUpgrade = () => {
        this.setState({
            experience: 0,
            level: this.state.level + 1
        })
     }

    interval = () => { setInterval(()=>this.setState({
        amount: this.cardsAmount,
        experience: exp - lvlUp[this.state.level -1 ].exp

    }), 10)}
    componentDidMount(){this.interval()}

    render() { 
        const playerCardsSummary = playerCards.length
        // suma powtórek !!!!
        this.cardsAmount = playerCardsSummary

        const expTop = 100 - (this.state.experience / lvlUp[this.state.level - 1].expToLvl *100) 
        const expCount = (this.state.experience / lvlUp[this.state.level - 1].expToLvl *100)
        // const exp = lvlUp[this.state.level].exp - this.state.experience


        if(this.state.experience >= lvlUp[this.state.level - 1].expToLvl){this.levelUpgrade()}


        return ( 
            <nav className='userNav'>
                <li>LVL <br /><span>{this.state.level}</span></li>
                <li><span className='userNav__green' style={{right: expTop}}></span><p className='procent'>{Math.floor(expCount) + '%'}</p></li>
                <li><span>{this.state.cash}</span> $</li>
                <li>karty <span>{playerCards.length > 0 ? this.state.amount : 0}</span></li>
            </nav>
         );
    }
}
 
export default UserPanel;