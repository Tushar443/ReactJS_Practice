import { React, Component } from "react";
import Button from "../../../Components/UI/Button/Button";
import classes from './ContactData.css';
import axios from "../../../axios-order";
import Input from "../../../Components/UI/Input/Input";
class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation : {
                    required : true
                },
                valid : false,
                touched : false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation : {
                    required : true
                },
                valid : false,
                touched : false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation : {
                    required : true,
                    minLength : 5,
                    maxLength : 5
                },
                valid : false,
                touched : false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation : {
                    required : true
                },
                valid : false,
                touched : false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation : {
                    required : true
                },
                valid : false,
                touched : false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ]
                },
                value: ''
            }
        },
        isFormValid : false,
        loading: false
    }

    checkValidation = (value,rules)=>{
        let isValid = true;
        if(typeof rules !== "undefined" && rules.required){
            isValid = value.trim() !== ''  && isValid;
        }
        if(typeof rules !== "undefined" && rules.minLength){
            isValid = value.length >= rules.minLength && isValid;
        }
        if(typeof rules !== "undefined" && rules.maxLength){
            isValid = value.length <= rules.maxLength && isValid;
        }
        return isValid;
    }

    orderConfirmed = () => {
        console.log("Contact Data ", this.props);
        this.setState({ loading: true });
        let formData ={}
        for(let i in this.state.orderForm){
            formData[i] = this.state.orderForm[i].value
        }
        const order = {
            totalPrice: this.props.price,
            ingredient: this.props.ingredient,
            customer: formData,
            delivery: 'fastest'
        }
        axios.post('/orders.json', order).then(response => {
            this.setState({ loading: false })
            alert("Congrats Purchased!!!!")
        }).catch(error => {
            this.setState({ loading: false })
        });
        this.props.history.push('/');
    }

    inputChangedHandler = (event ,inputId)=>{
        let updatedForm ={...this.state.orderForm}
        let updatedConfig = {...this.state.orderForm[inputId]}
        updatedConfig.value = event.target.value;
        updatedConfig.valid = this.checkValidation(updatedConfig.value,updatedConfig.validation)
        updatedConfig.touched = true;
        updatedForm[inputId] = updatedConfig;
        let isFormValid = true
        for(let inputId2 in updatedForm){
            isFormValid = updatedForm[inputId2].valid && isFormValid;
        }
        console.log(isFormValid);
        this.setState({
            orderForm : updatedForm,
            isFormValid : isFormValid
        }) 
    }


    render() {
        let formElements = []
        for (let el in this.state.orderForm) {
            formElements.push({
                id: el,
                config: this.state.orderForm[el]
            })
        }
        return (
            <div className={classes.ContactData}>
                <h3>Enter Your Data Here !!</h3>
                <form onSubmit={this.orderConfirmed}>
                    {formElements.map(formEle => {
                        return <Input
                            key={formEle.id}
                            elementType={formEle.config.elementType}
                            elementConfig={formEle.config.elementConfig}
                            invalid ={!formEle.config.valid}
                            touched ={formEle.config.touched}
                            label = {formEle.config.elementConfig.placeholder}
                            value={formEle.config.value} changed={(event)=>this.inputChangedHandler(event,formEle.id)}/>
                    })}
                    <Button btnType="Success" disabled={!this.state.isFormValid} >ORDER</Button>
                </form>
                
            </div>
        )
    }
}

export default ContactData