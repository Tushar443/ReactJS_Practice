import burgerLogo from '../../Assets/Images/burger-logo.png'
import classes from './Logo.css';
const logo = (props)=>(
        <div className={classes.Logo}>
            {/* <img src="../../Assets/Images/burger-logo.png"></img> */}
            <img src={burgerLogo} alt='MyBurger'></img>
        </div>
);

export default logo;