import React from "react";

import { Switch,Route } from 'react-router-dom'

function App() {
  return <Switch>

    <Route exact path="/">
    This is home page
    </Route>

    <Route exact path="/started">
    This is start page
    </Route>
    <Route>
      <h1>404 Error!!!</h1>
    </Route>
    </Switch>;
  
}

export default App;
