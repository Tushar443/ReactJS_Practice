import { React, Component } from 'react';
import Auxillery from '../../../HOC/Auxillery';
import withClass from '../../../HOC/withClass';

class person extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log("single Person.js shouldComponentUpdate");
        return true;
    }
    componentDidMount() {
        console.log("single Person.js  componentDidMount");
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
                <p onClick={this.props.click}> Hi i am {this.props.name} and i am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input onChange={this.props.changed} value={this.props.name}></input>
            </Auxillery>
        )
    }
}

export default withClass(person,null);
