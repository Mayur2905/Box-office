import React from "react";

import { Switch,Route } from 'react-router-dom'
import Navs from "./components/Navs";
import Home from "./pages/Home";
import Started from "./pages/Started";

function App() {
  return( 
    <div>
        <Navs />
      <Switch>
      <Route exact path="/">
      <Home/>
      </Route>

      <Route exact path="/started">
      <Started/>
      </Route>
      <Route>
        <h1>
          Page Not Found!!
          404 Error!!!</h1>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
