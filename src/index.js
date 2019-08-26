import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App';
import { createLogger } from 'redux-logger';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots } from './reducers';
import thunkMiddleware from 'redux-thunk';


const rootReducer = combineReducers({ searchRobots, requestRobots});

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,logger));

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>,
                document.getElementById('root')
            );
serviceWorker.unregister();
