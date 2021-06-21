import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/UserMainMenu.css'

const UserMainMenu = () => {
    return ( 
        <nav className='mainNav'>
          <ul>
            <li>draft</li>
            <li><Link to ={'pack'}>pack</Link></li>
            <li>packs</li>
            <li><Link to ={'LatestCards'}>lastest card</Link></li>
            <li>objectives</li>
            <li>sbc</li>
            <li>fatal</li>
            <li>collections</li>
            <li><Link to ={'mycards'}>my cards</Link></li>
            <li>trading</li>
            <li>squad builder</li>
            <li>archovements</li>
            <li>about</li>
          </ul>
        </nav>
     );
}
 
export default UserMainMenu;