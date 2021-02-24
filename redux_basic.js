const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter:0
}

//reducer .. state = initialState -> es6 syntax  if state comes undefined it will take the value of initialState
const rootReducer = (state = initialState,action) =>{
    if(action.type === 'INC_COUNTER'){
        return{
            ...state,
            counter: state.counter + 1
        };
    }
    if(action.type === 'ADD_COUNTER'){
        return{
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
}

//store
const store = createStore(rootReducer);
console.log(store.getState());
//dispatching actions
store.subscribe(()=>{
    console.log('[subscription]',store.getState()) //to get state as it is required in react app
}) 


store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER',value: 10});
console.log(store.getState());
//subscription
//it gets triggered whenever state is updated
//hooking up redux into react project we need react-redux
//react-redux will inject redux into react project <Provider> wrapper
//<Provider> is a helper component to inject store into react