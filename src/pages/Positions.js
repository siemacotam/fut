import React, { Component } from 'react';
import '../styles/Positions.css'
import {playerCards} from './LatestCards'

class Positions extends Component {
    state = { 
        position: '',
     }

    handleButton = (p) => {
        playerCards.filter(item => {if(item.position === p){
            this.setState({
                position: p,
            })
        }})
        
    }

    render() { 

        console.log(this.props.positions)

        const cards = playerCards.filter(item => {if(item.position == this.state.position){ return item}})

            const siema = cards.map(item => 
                <div className={ item.type + ' card'} key ={item.name}>
            <img className='card__player' src={item.photo} alt="" />
            <p>{item.rate}</p>
            <p>{item.position}</p>
            <img src={item.nationalityLogo} alt="" /> <br />
            <img src={item.clubLogo} alt="foto" />
        <p className='card__name'>{item.name}</p>
        </div>
         )


        return ( 
            <>
            {this.state.position === '' ? <div className='positionsWrap'>
                <button onClick={() => {this.handleButton('GK')}}>GK</button>
                <button>LB</button>
                <button onClick={() => {this.handleButton('CB')}}>CB</button>
                <button>RB</button>
                <button>LM</button>
                <button onClick={() => {this.handleButton('CM')}}>CM</button>
                <button>RM</button>
                <button>LW</button>
                <button>RW</button>
                <button>DM</button>
                <button>FW</button>
                <button>ST</button>
            </div> : null}
            {this.state.position !== '' ? 
             <div className='cardsWrap'>
                {siema}
            </div> : null 
            }
            </>
         );
    }
}
 
export default Positions;