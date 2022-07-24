import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger =(props)=>{
    let transformedIngredient = Object.keys(props.ingredient).map( igKey=>{
        return [...Array(props.ingredient[igKey])].map((_,i)=>{
           return  <BurgerIngredient key={igKey+i} type= {igKey} ></BurgerIngredient>
        });
    }).reduce((arr,element)=>{
            return arr.concat(element);
    },[]);
    console.log(transformedIngredient);
    if(transformedIngredient.length === 0){
        transformedIngredient = <p>Please Start Adding Ingredient </p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {/* <BurgerIngredient type='cheese'/>
            <BurgerIngredient type='cheese'/>
            <BurgerIngredient type='meat'/>
            <BurgerIngredient type='meat'/> */}
            {transformedIngredient}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
}

export default burger;