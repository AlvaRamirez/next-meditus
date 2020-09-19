import React from 'react';
import '../App/index.css';
import Header from '../Header'
import Experimenta from '../../pages/Experimenta'
import Aprende from '../../pages/Aprende'
//import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import Link from 'netx/link'
import Home from '../../pages/Home/Home'



function App() {
  return (
<Router>
    <div id="meditus" className="App">      
       <Header />
     
        <Switch>
                
                        <Route exact path="/experimenta">
                            <Experimenta />

                        </Route>

                     
                        <Route path="/aprende">
                            <Aprende />
                        </Route>
                        <Route exact path="/">
                      
                            <Home />
                            

                        </Route>
                       
                    </Switch>
                  
        </div>
      
        
        

    </Router>
  );
}

export default App;
