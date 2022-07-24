import classes from './ToolBar.css';
import Logo from '../../Logo/Logo';
import Navigationitems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
const toolBar = (props)=>(
    <header className={classes.Toolbar}>
         <DrawerToggle menuClicked={props.menuClicked} />
        <div className={classes.Logo}>
                <Logo />
        </div>
        <Navigationitems/>
    </header>  
);

export default toolBar;