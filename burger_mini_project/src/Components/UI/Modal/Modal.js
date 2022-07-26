import classes from './Modal.css'
import Auxillery from '../../../hoc/Auxillery';
import BackDrop from '../BackDrop/BackDrop';
import { Component } from 'react';

class Modal extends Component{
    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }
    componentWillUpdate () {
        console.log('[Modal] WillUpdate');
    }
    render(){
        return (
        <Auxillery>
            <BackDrop show={this.props.show} purchasedCancel ={this.props.purchasedCancel}/>
                <div className={classes.Modal}
                style={{
                    transform : this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity : this.props.show ? '1' : '0'
                }}>
                {this.props.children}
                </div>
        </Auxillery>)
    }
}

export default Modal;