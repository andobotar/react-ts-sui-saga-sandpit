import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { personListReducer } from './store/person/personSlice';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './store/person/fetchPlanetNameSaga';

// ant design
import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import huHU from 'antd/es/locale/hu_HU';

import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ personList: personListReducer });

// mount it on the Store
const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
    // devTools: process.env.REACT_APP_PRODUCTION === 'false'
});

// export type StoreState = ReturnType<typeof rootReducer>;

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
