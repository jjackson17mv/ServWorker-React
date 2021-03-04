import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props) ;

        this.state = {
          
             selectedDish : null 
        }

    }

    onDishSelect(dish) {
        
        this.setState({ selectedDish: dish })
    }

    renderDish() {
        
        const dish = this.props.selectedDish
        if(dish != null) {
              return (
                  <Card>
                       <CardImg width="100%" src={dish.image} alt={dish.name} />
                       <CardBody>
                          <CardTitle>{dish.name}</CardTitle>
                          <CardText>{dish.description}</CardText>                  
                       </CardBody>
                  </Card>
              )
        }
        else {
            return null;
        }
    }

  

    render() {
        return (
            <div className="container">
                <div className="row">
                
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                </div>
            </div>
        );
    }
}
export default Dishdetail;