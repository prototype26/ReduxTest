import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './store/reducer';
import {Provider} from  'react-redux';

//adding a middleware
const logger = store =>{
    return next=>{
        return action=>{
            console.log('[Middleware] Dispatching ',action);
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
}
//adding redux devtools enhancer
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//adding a middleware
const store = createStore(reducer, composeEnhancer(applyMiddleware(logger))); //adding enhancer which is a middleware in this case

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

//provider is a helper component to inject store into the react app