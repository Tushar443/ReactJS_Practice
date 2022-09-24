import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers,applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatched ', action);
            console.log('[Middleware] previous state ', store.getState());
            const result = next(action);
            console.log('[Middleware] next state ', store.getState());
            return result;
        }
    }
}

const store = createStore(rootReducer,applyMiddleware(logger,thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
