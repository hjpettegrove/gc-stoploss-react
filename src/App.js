import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//import { useContext } from 'react';

import MenuBar from './components/MenuBar/MenuBar';

import Home from './pages/Home/Home'
const App = () => {
  return ( 
      <Router>
        <div className="App">
          <MenuBar/>
          <div className="content container-md">
            <Route exact path="/">
              <Home/>
            </Route>
          </div>
        </div>
      </Router>
  );
}
 
export default App;