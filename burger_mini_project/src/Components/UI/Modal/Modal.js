import classes from './Modal.css'
import Auxillery from '../../../hoc/Auxillery';
import BackDrop from '../BackDrop/BackDrop';
const modal = (props)=>
(
    <Auxillery>
        <BackDrop show={props.show} purchasedCancel ={props.purchasedCancel}/>
        <div className={classes.Modal}
        style={{
            transform : props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity : props.show ? '1' : '0'
        }}>
        {props.children}
    </div>
    </Auxillery>
)

export default modal;