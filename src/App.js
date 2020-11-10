import React ,{Component} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shopPage/shop.component"

import './App.css';




class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <Switch>
          <Route exact path ="/" component ={ HomePage }/>
          <Route exact path ="/shop" component ={ ShopPage }/>
        </Switch>
      </BrowserRouter>
    

      </div>
    );
  }
}

export default App;