import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent' ;
import './components/DishDetailComponent'
import { DISHES } from './shared/dishes' ;

//function App() 
class App extends Component {

    constructor(props) {
      super(props) ;

      this.state = {
        // this dishes object will be passed child component "Menu"
        dishes: DISHES
      }

    }

  render() {
      return (
        <div>
         <Navbar dark color="primary">
           <div className="container">
               <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
           </div>
         </Navbar>

         <Menu  dishes={this.state.dishes} />
        </div>
      );
   }
}

export default App;