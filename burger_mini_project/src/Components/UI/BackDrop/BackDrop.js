import Auxillery from "../../../hoc/Auxillery";
import classes from './BackDrop.css'
const backDrop = (props)=>{

    return(
        <Auxillery>
            {props.show ? <div className={classes.Backdrop} onClick={props.purchasedCancel}></div> : null}
        </Auxillery>
    )
}

export default backDrop;