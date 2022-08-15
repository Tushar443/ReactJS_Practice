import classes from './NavigationItems.css'
import Navigationitem from './NavigationItem/NavigationItem';
const navigationitems = ()=>(
        <ul className={classes.NavigationItems}>
            <Navigationitem link="/" >Burger Buidler</Navigationitem>
            <Navigationitem link="/orders">Orders</Navigationitem>
        </ul>
)

export default navigationitems;