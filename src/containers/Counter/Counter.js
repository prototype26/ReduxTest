import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import constants from '../../store/constants';
import {connect} from 'react-redux';
class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default:
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label={constants.increment} clicked={this.props.onIncrementCounter} />
                <CounterControl label={constants.decrement} clicked={this.props.onDecrementCounter}  />
                <CounterControl label={constants.add} clicked={this.props.onAddCounter}  />
                <CounterControl label={constants.sub} clicked={this.props.onSubCounter}  />
                <hr/>
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.resultsStored.map(result=>{
                       return <li key={result.id} onClick={()=>this.props.onDeleteResult(result.id)}>{result.value}</li>
                    })}
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        ctr: state.counter,
        resultsStored : state.results
    };
}

const mapDispatchToProps = dispatch =>{
    return{
        onIncrementCounter : ()=>{ dispatch({type:constants.increment})},
        onDecrementCounter : ()=>{ dispatch({type:constants.decrement})},
        onAddCounter : ()=>{ dispatch({type:constants.add, payload:{value: 15}})},
        onSubCounter : ()=>{ dispatch({type:constants.sub, payload:{value: 10}})},
        onStoreResult : ()=>{ dispatch({type:constants.store_result})},
        onDeleteResult : (id)=>{ dispatch({type:constants.delete_result,payload:id})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);