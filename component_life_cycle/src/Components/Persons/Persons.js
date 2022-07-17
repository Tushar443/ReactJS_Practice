import Person from "./Person/Person";
import { Component, PureComponent } from "react";
class Persons extends PureComponent {//Component{
        // static getDerivedStateFromProps(props,state){
        //         console.log("Persons.js getderviedStatFromProps",props);
        //         return state;
        //        }

        // componentWillReceiveProps(props){
        //         console.log("Persons.js componentWillReceiveProps ",props);
        // }

        // Pure Componet will check automatically all props if it is change or not

        // shouldComponentUpdate(nextProps,nextState){
        //         console.log("Persons.js shouldComponentUpdate");
        //         if(nextProps.Persons !== this.props.persons){
        //                 return true;
        //         }else{
        //                 return false;
        //         }
        // }
        componentDidMount() {
                console.log("Persons.js  componentDidMount");
        }
        getSnapshotBeforeUpdate(prevProps, prevState) {
                console.log("Persons.js  getSnapshotBeforeUpdate");
                return { message: "Somthing wrong" };
        }
        componentDidUpdate(prevProps, prevState, snapshot) {
                console.log("Persons.js  componentDidUpdate ");
                console.log(snapshot);
        }

        componentWillUnmount() {
                console.log("Persons.js  componentWillUnmount ");
        }
        render() {
                console.log("Persons.js Rendering..");
                return this.props.persons.map((person, index) => {
                        return <Person
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                click={() => this.props.click(index)}
                                changed={(event) => this.props.changed(event, index)}
                        />
                }
                )
        }
}

export default Persons;