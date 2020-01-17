import { put, all, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { addPerson, addPersonAsync } from './personSlice';

// worker
export function* fetchPlanetNameSaga(action: any) {
    console.log('fetch planet saga running');
    try {
        const response = yield axios.get('https://swapi.co/api/planets/');
        const random = Math.floor(Math.random() * 10);
        const planetName = response.data.results[random].name;
        yield put({type: addPerson, payload: {...action.payload, planet: planetName}})
    } catch (error) {
        console.warn(error)
    }
}

// watcher
export function* watchFetchPlanetName() {
    yield takeEvery(addPersonAsync, fetchPlanetNameSaga);
}

// root
export function* rootSaga() {
    yield all([call(watchFetchPlanetName)])
}