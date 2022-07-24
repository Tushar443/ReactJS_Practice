import classes from './BuildControls.css';
// import classes from '../BuildControls/BuildControl/BuildControl.css'
import BuildControl from './BuildControl/BuildControl';
const controls = [
    {label : 'Salad' , type : 'salad'},
    {label : 'Bacon' , type : 'bacon'},
    {label : 'Cheese' , type : 'cheese'},
    {label : 'Meat' , type : 'meat'}, 
] 

const buildControls = (props)=>(
    <div className={classes.BuildControls}>
    <p>Current Price : <strong>{props.price.toFixed(2)}</strong></p>
        { controls.map(ctrl=>(
            <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label} 
                    ingredientAdded={()=> props.ingredientAdded(ctrl.type)}
                    ingredientRemove ={()=> props.ingredientRemove(ctrl.type)}
                    disableInfo = {props.disableInfo[ctrl.type]}
                    
                    />
        ))}
        <button 
            className={classes.OrderButton}
            disabled={!props.purchable}
            onClick={props.purchased}>ORDER NOW</button>
    </div>
);

export default buildControls;