import classes from './NavigationItem.css'
import { NavLink } from 'react-router-dom';
const navigationitem = (props) =>
(
    <li className={classes.NavigationItem}>
            <NavLink to={props.link} exact
                activeClassName={classes.active} >
                {props.children}
            </NavLink>
    </li>
);

export default navigationitem;