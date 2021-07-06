import React, { Component } from 'react';
import '../styles/FilterPanel.css'
import MyCards from '../pages/MyCards'
import Positions from '../pages/Positions'

class FilterPanel extends Component {
    state = { 
        activeButton: '',
     }

    handlePButton = () => {
       this.setState({
           activeButton: 1,
       })
    }


    render() { 
        return ( 
            <>
            <div className='optionsWrap'>
                <button className="panelOption" onClick={this.handlePButton}>p</button>
                <button className="panelOption">n</button>
                <button className="panelOption">l</button>
                <button className="panelOption">c</button>
                <button className="panelOption">t</button>
                <button className="panelOption">r</button>
            </div>
            {this.state.activeButton === '' ? <MyCards /> : null}
            {this.state.activeButton === 1 ? <Positions positions={this.state.activeButton}/> : null}
            </>
         );
    }
}
 
export default FilterPanel;