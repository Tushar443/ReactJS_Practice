import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionType from '../../store/actions';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={ this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={ this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={ this.props.onSubstractCounter}  />
                <br />
                <button onClick={()=>this.props.onStoreResults(this.props.ctr)}>Show Results</button>
                <ul>
                    {this.props.storeResult.map((result)=>{
                        return (<li key={result.id} onClick={()=>this.props.onDeleteResults(result.id)}>{result.strresult}</li>)
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storeResult : state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionType.INCREMENT}),
        onDecrementCounter: () => dispatch({type:actionType.DECREMENT}),
        onAddCounter: () => dispatch({type: actionType.ADD, value : 5}),
        onSubstractCounter: () => dispatch({type: actionType.SUBSTRACT,value : 5}),
        onStoreResults: (result) => dispatch({type: actionType.STORE_RESULT , result : result}),
        onDeleteResults: (id) => dispatch({type: actionType.DELETE_RESULT, deleteId : id}),
        onAddPersons: () => dispatch({type: actionType.ADD_PERSON})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);