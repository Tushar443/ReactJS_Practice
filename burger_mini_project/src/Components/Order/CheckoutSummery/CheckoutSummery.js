import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
const CheckoutSummery = (props)=>{
    return(
        <div className='CheckoutSummary'>
            <h1>We hope it taste well !!</h1>
            <div style={{width: '100%',margin:'auto'}}>
                <Burger ingredient={props.ingredients}/>
            </div>
            <Button btnType='Danger' clicked ={props.checkoutCancelled} >CANCEL</Button>
            <Button btnType='Success' clicked ={props.checkoutContinued}>CONTINUE</Button>
        </div>
    )
}

export default CheckoutSummery;