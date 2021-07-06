import React from 'react';
import {Route, Switch} from 'react-router-dom'
import '../styles/Page.css'
import UserMainMenu from '../pages/UserMainMenu'
import LatestCards from '../pages/LatestCards'
import Pack from '../pages/Pack'
import FilterPanel from '../pages/FilterPanel'

const Page = () => {
    return ( 
        <div className='page'>
            <Switch>
                <Route path='/' exact component={UserMainMenu}></Route>
                <Route path='/latestcards' component={LatestCards}></Route>
                <Route path='/pack' component={Pack}></Route>
                <Route path='/mycards' component={FilterPanel}></Route>
            </Switch>
        </div>
     );
}
 
export default Page;