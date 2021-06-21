import '../styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import UserPanel from './UserPanel'
import Page from './Page'


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App"> 
        <UserPanel />
        <Page />
      </div>
    </Router>
  );
}

export default App;
