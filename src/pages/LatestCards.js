import React from 'react';
import '../styles/LatestCards.css'

export const cards = [
    {
        club: 'Real Madrit',
        clubLogo:'./img/clubs/realsmall.png',
        nationality: 'Brazil',
        nationalityLogo:'./img/nationalities/brazil.jpg',
        rate: 99,
        position:'ST',
        type:'icon',
        name: 'Ronaldo',
        photo:'./img/players/ronaldo.png',
        pac:99,
        sho:99,
        pas:99,
        dri:99,
        def:99,
        phy:99,
        price: 100000,
        relase: '1.07.2021',
        amount: 1,
    },
    {
        club: 'Real Madrit',
        clubLogo:'./img/clubs/realsmall.png',
        nationality: 'Brazil',
        nationalityLogo:'./img/nationalities/brazil.jpg',
        rate: 96,
        position:'LB',
        type:'icon',
        name: 'Roberto Carlos',
        photo:'./img/players/carlos.png',
        pac:99,
        sho:99,
        pas:99,
        dri:99,
        def:99,
        phy:99,
        price: 100000,
        relase: '1.07.2021',
        amount: 1,
    },
    {
        club: 'Real Madrit',
        clubLogo:'./img/clubs/realsmall.png',
        nationality: 'Spain',
        nationalityLogo:'./img/nationalities/spain.png',
        rate: 96,
        position:'ST',
        type:'icon',
        name: 'Raul',
        photo:'./img/players/raul.png',
        pac:99,
        sho:99,
        pas:99,
        dri:99,
        def:99,
        phy:99,
        price: 100000,
        relase: '1.07.2021',
        amount: 1,
    },
    {
        club: 'Real Madrit',
        clubLogo:'./img/clubs/realsmall.png',
        nationality: 'Spain',
        nationalityLogo:'./img/nationalities/spain.png',
        rate: 94,
        position:'GK',
        type:'icon',
        name: 'Casillas',
        photo:'./img/players/casillas.png',
        pac:99,
        sho:99,
        pas:99,
        dri:99,
        def:99,
        phy:99,
        price: 100000,
        relase: '1.07.2021',
        amount: 1,
    },
    {
        club: 'Real Madrit',
        clubLogo:'./img/clubs/realsmall.png',
        nationality: 'France',
        nationalityLogo:'./img/nationalities/france.jpg',
        rate: 99,
        position:'CM',
        type:'icon',
        name: 'Zidane',
        photo:'./img/players/zidane.png',
        pac:99,
        sho:99,
        pas:99,
        dri:99,
        def:99,
        phy:99,
        price: 100000,
        relase: '1.07.2021',
        amount: 1,
    },
    {
        club: 'Real Madrit',
        clubLogo:'./img/clubs/realsmall.png',
        nationality: 'Portugal',
        nationalityLogo:'./img/nationalities/portugal.jpg',
        rate: 99,
        position:'CM',
        type:'icon',
        name: 'Figo',
        photo:'./img/players/figo.png',
        pac:99,
        sho:99,
        pas:99,
        dri:99,
        def:99,
        phy:99,
        price: 100000,
        relase: '1.07.2021',
        amount: 1,
    }
]

export const playerCards = []

const LatestCards = () => {
    const allCards = cards.map( card => {return (
        <div className='card' key ={card.name}>
            <img className='card__player' src={card.photo} alt="" />
            <p>{card.rate}</p>
            <p>{card.position}</p>
            <img src={card.nationalityLogo} alt="" /> <br />
            <img src={card.clubLogo} alt="foto" />
            <p className='card__name'>{card.name}</p>
        </div>
    )} )

    return ( 
       <div className='cardsWrap'>
           {allCards}
       </div>
     );
}
 
export default LatestCards;