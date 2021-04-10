import React, { Component } from "react";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import { DISHES } from "../shared/dishes";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";


//function App() 
class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // this dishes object will be passed child component "Menu"
      dishes: DISHES,
      // selectedDish: null
    };

  }
  //onDishSelect(dishId) {
  // this.setState({ selectedDish: dishId });
  //}


  render() {
    const HomePage = () => {
      return (
        <Home />
      );
    }
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Redirect to="/home" />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;