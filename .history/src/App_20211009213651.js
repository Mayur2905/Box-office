import React from "react";

import { Switch,Route } from 'react-router-dom'
import Home from "./pages/Home";
import Started from "./pages/Started";

function App() {
  return( 
      <Switch>
      <Route exact path="/">
      <Home/>
      </Route>

      <Route exact path="/started">
      <Started/>
      </Route>
      <Route exact path="/Show/: id">
        <Show/>
      </Route>
      <Route>
        <h1>
          Page Not Found!! </h1>
        <h1> 404 Error!!!</h1>
      </Route>
    </Switch>
  );
}

export default App;
