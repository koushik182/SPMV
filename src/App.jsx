import React from 'react'
import {
  BrowserRouter as Router,

  Route
  
} from "react-router-dom";
import Dashboard from './Dashboard';


const App = () => {
  return (
    <><Router>

      
      
    
        <Route path="/Dashboard">
          <Dashboard />
        </Route>
    
  </Router>
    </>
  );
};

export default App;