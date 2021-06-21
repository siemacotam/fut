import React, { Component } from 'react';
import '../styles/UserPanel.css'

class UserPanel extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className='userNav'>
                <li>LVL <br /><span>1</span></li>
                <li> 0 / 100</li>
                <li><span>1000</span> $</li>
                <li>karty <span>0</span></li>
            </nav>
         );
    }
}
 
export default UserPanel;