import Auxillery from "../../../hoc/Auxillery";
import Button from "../../UI/Button/Button";
const orderSummery = (props)=>{
    const ingredientSummary = Object.keys(props.ingredient)
                            .map((igkey)=>{
                                    return <li key={igkey}>
                                                <span style={{textTransform : 'capitalize'}}>{igkey}
                                                </span> : 
                                                {props.ingredient[igkey]}
                                            </li>
                            })

    return (
        <Auxillery>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients : </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price : {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout ?</p>
            <Button btnType = "Danger" clicked = {props.purchasedCancel}>Cancel</Button>
            <Button btnType = "Success" clicked={props.purchasedContinue}>Continue</Button>
        </Auxillery>
    )
}

export default orderSummery;