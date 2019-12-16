import { put, all, takeLeading } from 'redux-saga/effects';
import axios from 'axios';

import * as actionTypes from '../actions/actions';

// worker
export function* fetchPlanetNameSaga(action: any) {
    console.log('fetch planet saga running');
    
    try {
        const response = yield axios.get('https://swapi.co/api/planets');
        const random = yield Math.floor(Math.random() * 10);
        const planetName = response.data.results[random].name;
        yield put({type: actionTypes.ADD_PERSON, payload: {...action.payload, planet: planetName}})
    } catch (error) {
        console.warn(error)
    }
}

// watcher
export function* watchFetchPlanetName() {
    yield takeLeading(actionTypes.addPersonAction, fetchPlanetNameSaga);
}

// root
export function* rootSaga() {
    yield all([watchFetchPlanetName()])
}