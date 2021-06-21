import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/UserMainMenu.css'

const UserMainMenu = () => {
    return ( 
        <nav className='mainNav'>
          <ul>
            <li>draft</li>
            <li>pack</li>
            <li>packs</li>
            <li><Link to ={'LatestCards'}>lastest card</Link></li>
            <li>objectives</li>
            <li>sbc</li>
            <li>fatal</li>
            <li>collections</li>
            <li>my cards</li>
            <li>trading</li>
            <li>squad builder</li>
            <li>archovements</li>
            <li>about</li>
          </ul>
        </nav>
     );
}
 
export default UserMainMenu;