import Logo from "../../Logo/Logo";
import classes from './SideDrawer.css'
import Navigationitems from "../NavigationItems/NavigationItems";
import Auxillery from "../../../hoc/Auxillery";
import BackDrop from "../../UI/BackDrop/BackDrop";
const sideDrawer=(props)=>{
    let attachedClasses = [classes.SideDrawer , classes.Close];
    if(props.show){
        attachedClasses = [classes.SideDrawer , classes.Open];
    }
    console.log(props.clicked);
    return(
        <Auxillery>
            <BackDrop show={props.show} purchasedCancel = {props.clicked}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <Navigationitems />
                </nav>
            </div>
        </Auxillery>
    );
}

export default sideDrawer