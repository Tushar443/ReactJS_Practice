import classes from './NavigationItems.css'
import Navigationitem from './NavigationItem/NavigationItem';
const navigationitems = ()=>(
        <ul className={classes.NavigationItems}>
            <Navigationitem link="/" active>Burger Buidler</Navigationitem>
            <Navigationitem link="/">Checkout</Navigationitem>
        </ul>
)

export default navigationitems;