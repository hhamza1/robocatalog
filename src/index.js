import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App';
import { createLogger } from 'redux-logger';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import { searchRobots } from './reducers';



const logger = createLogger();
const store = createStore(searchRobots,applyMiddleware(logger));

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>,
                document.getElementById('root')
            );
serviceWorker.unregister();
