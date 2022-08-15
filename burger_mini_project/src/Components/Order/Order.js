import cls from './Order.css'
const Order = (props)=>{

    let fetchIngredient =[]
    for(let i in props.ingredients){
        fetchIngredient.push({
            name : i,
            amount : props.ingredients[i]
        })
    }

   const ingredientsOutput = fetchIngredient.map(ig =>{
        return (
            <span style={
                {
                    textTransform : 'capitalize',
                    display : 'inline-block',
                    margin : '0 8px',
                    border : '1px solid #ccc',
                    padding : '5px'       
                }
            } key ={ig.name} >{ig.name} ({ig.amount}) </span>
        )
    })

    return (
        <div className={cls.Order}>
            <p>
                Ingredient : {ingredientsOutput}
            </p>
            <p>
                <strong>and Total Price is {props.price.toFixed(2)} Rs</strong>
            </p>
        </div>
    )   
}

export default Order;