import React from 'react';
import {playerCards} from './LatestCards'

const MyCards = () => {

    const cards = playerCards.map(item => 
            <div className={ item.type + ' card'} key ={item.name}>
                <img className='card__player' src={item.photo} alt="" />
                <p>{item.rate}</p>
                <p>{item.position}</p>
                <img src={item.nationalityLogo} alt="" /> <br />
                <img src={item.clubLogo} alt="foto" />
                <p className='card__name'>{item.name}</p>
                <p>{item.amount}</p>
            </div>)
    console.log(cards)

    return ( 
        <div className='cardsWrap'>
           {cards}
       </div>
     );
}
 
export default MyCards;