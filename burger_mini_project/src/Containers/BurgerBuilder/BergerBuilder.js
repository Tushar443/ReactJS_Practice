import { Component } from "react";
import Auxillery from "../../hoc/Auxillery";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Modal from "../../Components/UI/Modal/Modal";
import OrderSummery from "../../Components/Burger/OrderSummery/OrderSummery";

const INGREDIENT_PRICE ={
    salad : 0.5,
    cheese : 0.4,
    meat : 1.3,
    bacon : 0.7,
}

class BurgerBuilder extends Component{
    state = {
        ingredient : {
            salad : 0,
            bacon  : 0,
            cheese : 0,
            meat : 0,
        },
        totalPrice : 4,
        purchable : false,
        purchased : false
    }

    updatePurchaseState(ingredient){
        const sum = Object.keys(ingredient)
                    .map((igkey)=>{
                        return ingredient[igkey];
                    })
                    .reduce((sum , el )=>{
                            return sum+el;
                    },0);
            this.setState({
                purchable : sum > 0
            })            
        }

    addIngredientHandler = (type)=>{
        const oldCount = this.state.ingredient[type];
        const updatedCount = oldCount+1;
        const updatedIngredient = {
            ...this.state.ingredient
        }
        updatedIngredient[type] = updatedCount;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
        this.setState({
            totalPrice : newPrice,
            ingredient : updatedIngredient
        })
        this.updatePurchaseState(updatedIngredient);
    }

    removeIngredientHandler = (type)=>{
        const oldCount = this.state.ingredient[type];
        if(oldCount <= 0 ){
            return;
        }
        const updatedCount = oldCount -1;
        const updatedIngredient = {
            ...this.state.ingredient
        }
        updatedIngredient[type] = updatedCount;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
        this.setState({
            totalPrice : newPrice,
            ingredient : updatedIngredient
        }) 
        this.updatePurchaseState(updatedIngredient) 
    }

    purchasedHandler =()=>{
        this.setState({
            purchased : true
        })
    }

    purchasedCancelHandler = ()=>{
        this.setState({
            purchased : false
        })
    }

    purchasedContinueHandler= ()=>{
        alert("Congrats Purchased!!!!")
    }

    render(){
        const disableInfo = {
            ...this.state.ingredient
        }
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <=0;
        }
        return(
            <Auxillery>
                <Modal show = {this.state.purchased} purchasedCancel = {this.purchasedCancelHandler}>
                    <OrderSummery ingredient ={this.state.ingredient}
                                  price = {this.state.totalPrice}
                                  purchasedCancel ={this.purchasedCancelHandler}
                                  purchasedContinue = {this.purchasedContinueHandler}  
                    ></OrderSummery>
                </Modal>
                <Burger ingredient ={this.state.ingredient}></Burger>
                <BuildControls 
                        ingredientAdded = {this.addIngredientHandler} 
                        ingredientRemove = {this.removeIngredientHandler}
                        disableInfo ={disableInfo}
                        purchable ={this.state.purchable}
                        price = {this.state.totalPrice}
                        purchased ={this.purchasedHandler}
                        />
            </Auxillery>
        );
    }
}

export default BurgerBuilder;