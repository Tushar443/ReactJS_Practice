import { Component } from "react";
import Auxillery from "../../hoc/Auxillery";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Modal from "../../Components/UI/Modal/Modal";
import OrderSummery from "../../Components/Burger/OrderSummery/OrderSummery";
import axios from '../../axios-order';
import Spinner from "../../Components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorhandler/withErrorhandler";
const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
}

class BurgerBuilder extends Component {
    state = {
        ingredient: null,
        totalPrice: 4,
        purchable: false,
        purchased: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        axios.get('ingredients.json').then(response => {
            // console.log("Resp ",response);
            this.setState({ ingredient: response.data })
        }).catch(error => {
            console.log(error);
            this.setState({ error: true })
        })
    }

    updatePurchaseState(ingredient) {
        const sum = Object.keys(ingredient)
            .map((igkey) => {
                return ingredient[igkey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({
            purchable: sum > 0
        })
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredient[type];
        const updatedCount = oldCount + 1;
        const updatedIngredient = {
            ...this.state.ingredient
        }
        updatedIngredient[type] = updatedCount;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
        this.setState({
            totalPrice: newPrice,
            ingredient: updatedIngredient
        })
        this.updatePurchaseState(updatedIngredient);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredient[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredient = {
            ...this.state.ingredient
        }
        updatedIngredient[type] = updatedCount;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
        this.setState({
            totalPrice: newPrice,
            ingredient: updatedIngredient
        })
        this.updatePurchaseState(updatedIngredient)
    }

    purchasedHandler = () => {
        this.setState({
            purchased: true
        })
    }

    purchasedCancelHandler = () => {
        this.setState({
            purchased: false
        })
    }

    purchasedContinueHandler = () => {
        let queryParam = [];
        for (let i in this.state.ingredient) {
            queryParam.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredient[i]));
        }
        queryParam.push("price=" + this.state.totalPrice)
        let queryString = queryParam.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString,
        })
    }

    render() {
        const disableInfo = {
            ...this.state.ingredient
        }
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }
        let orderSummery = null;

        let burger = this.state.error ? <p>Ingredient Can't Loaded</p> : <Spinner />
        if (this.state.ingredient) {
            burger = (
                <Auxillery>
                    <Burger ingredient={this.state.ingredient}></Burger>
                    <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemove={this.removeIngredientHandler}
                        disableInfo={disableInfo}
                        purchable={this.state.purchable}
                        price={this.state.totalPrice}
                        purchased={this.purchasedHandler}
                    />
                </Auxillery>
            );
            orderSummery = <OrderSummery ingredient={this.state.ingredient}
                price={this.state.totalPrice}
                purchasedCancel={this.purchasedCancelHandler}
                purchasedContinue={this.purchasedContinueHandler}
            ></OrderSummery>
        }
        if (this.state.loading) {
            orderSummery = <Spinner />
        }
        return (
            <Auxillery>
                <Modal show={this.state.purchased} purchasedCancel={this.purchasedCancelHandler}>
                    {orderSummery}
                </Modal>
                {burger}
            </Auxillery>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);