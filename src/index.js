import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import { searchRobots } from './reducers';

const store = createStore(
    searchRobots,
    //For Redux DevTool extension
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>,
                document.getElementById('root')
            );
serviceWorker.unregister();
