import Cockpit from './Components/Cockpit/cockpit'
import classes from './App.css';
import { Component } from 'react';
import Persons from './Components/Persons/Persons'
import withClass from './HOC/withClass';
import Auxillery from './HOC/Auxillery';
import AuthContext from './contex/Auth-Context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App.js Constructotr');
    // we can set state here 
  }

  static getDerivedStateFromProps(props, state) {
    console.log("app.js getderviedStatFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("app.js componentDidMount ");
  }

  state = {
    persons: [
      // { id: '1', name: 'tushar1', age: "100" },
      // Error Warning: Failed prop type: 
      //Invalid prop `age` of type `string` supplied to `person`, expected `number`.
      { id: '1', name: 'tushar1', age: 100 },
      { id: '2', name: 'tushar2', age: 110 },
      { id: '3', name: 'tushar3', age: 120 },
    ],
    showPerson: true,
    showCockpit: true,
    counter : 0 ,
    authenticate : false
  };

  deleteHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    console.log(persons);
    this.setState({
      persons: persons,
      showPerson: true
    })
  }

  changedName = (event, id) => {
    let persons = [...this.state.persons];
    let Newperson = persons[id];
    Newperson.name = event.target.value;
    persons[id] = Newperson;
    // this.setState({
    //   persons: persons,
    //   showPerson: true,
    // })
    this.setState((prevState,props)=>{
        return {persons : persons,
                counter : prevState.counter+1
        }
    })

  }

  togglerPersons = () => {
    const doSome = this.state.showPerson;
    this.setState({
      // persons: [
      //   { id: '1', name: 'tushar1', age: "100" },
      //   { id: '2', name: 'tushar2', age: 110 },
      //   { id: '3', name: 'tushar3', age: 120 },
      // ],
      showPerson: !doSome,
      // showCockpit: true,
      // counter : 0 ,
      // authenticate : false
    })
  }
  
  loginhandler(){
    console.log("@@@@ ",this);
      this.setState({authenticate : true})
  }

  render() {
    let newPerson = null;
    if (this.state.showPerson) {
      newPerson = (
        <Persons
          persons={this.state.persons}
          click={this.deleteHandler}
          changed={this.changedName}
        />)
    }
    console.log("App.js render method");
    return (
      <Auxillery  className='App'>
        <button onClick={() => { this.setState({ showCockpit: !this.state.showCockpit }) }} >Remove Cockpit</button>
        <AuthContext.Provider value={{
            authenticated : this.state.authenticate,
            login : this.loginhandler
        }}>
          {this.state.showCockpit ? <Cockpit toggled={this.togglerPersons} /> : null}
          {newPerson}
        </AuthContext.Provider>
      </Auxillery>
    );
  }
}

export default withClass(App,classes.App);
