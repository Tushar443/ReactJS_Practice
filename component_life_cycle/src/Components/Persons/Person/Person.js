import { React, Component } from 'react';
import Auxillery from '../../../HOC/Auxillery';
import withClass from '../../../HOC/withClass';
import Proptypes from 'prop-types'; 
import AutheContext from '../../../contex/Auth-Context'

class person extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log("single Person.js shouldComponentUpdate");
        return true;
    }

    constructor(props){
        super(props);
        // this.inputElement = React.createRef();
    }

    componentDidMount() {
        console.log("single Person.js  componentDidMount");
       this.inputElement.focus();
    //    this.inputElement.current.focus();
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("single Person.js  getSnapshotBeforeUpdate");
        return { message: "Somthing wrong" };
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("single Person.js  componentDidUpdate ");
        console.log(snapshot);
    }
    render() {
        console.log("single Person.js Rendering..");
        return (
            <Auxillery className='Person'>
                <AutheContext.Consumer>
                {(context)=> context.authenticated ? 
                    <p>Is authenticate</p> : <p> Not authenticate</p>}
                </AutheContext.Consumer>
                <p onClick={this.props.click}> Hi i am {this.props.name} and i am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                {/* <input onChange={this.props.changed} value={this.props.name}
                        ref ={this.inputElement}></input> */}
                <input onChange={this.props.changed} value={this.props.name}
                        ref ={(inputElement => this.inputElement=inputElement)}></input>
            </Auxillery>
        )
    }
}
person.propTypes = {
    click :Proptypes.func,
    name : Proptypes.string,
    age : Proptypes.number,
    changed : Proptypes.func
}


export default withClass(person,null);
