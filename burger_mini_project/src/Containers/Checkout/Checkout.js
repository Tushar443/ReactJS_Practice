import { Component } from "react";
import { Route } from "react-router-dom";
import CheckoutSummery from "../../Components/Order/CheckoutSummery/CheckoutSummery";
import ContactData from './ContactData/ContactData';
class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1,
        },
        price: 0
    }

    componentDidMount = () => {
        let query = new URLSearchParams(this.props.location.search);
        const ingredients = {}
        let price = 0;
        for (let param of query.entries()) {
            console.log(param[0] === 'price');
            if (param[0] === 'price') {
                price = +param[1];
                // this.setState.price = +param[1];
            } else {
                // we have data in this format ['salad','1']
                ingredients[param[0]] = +param[1]
            }
        }
    
        this.setState({
            ingredients: ingredients,
            price: price
        })
    }
    checkoutCanceledHandler = () => {
        this.props.history.goBack();
    }
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummery
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCanceledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                />
                <Route path={this.props.match.path + '/contact-data'}
                    render={(props) => <ContactData
                        ingredient={this.state.ingredients}
                        price={this.state.price}
                        {...props} />} />
            </div>
        )
    }
}
export default Checkout;