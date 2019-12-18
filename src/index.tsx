import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { personListReducer } from './store/reducers/personListReducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './store/sagas/fetchPlanetName';

import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import huHU from 'antd/es/locale/hu_HU';

import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = createStore(personListReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <ConfigProvider locale={huHU}>
                <App />
            </ConfigProvider>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
