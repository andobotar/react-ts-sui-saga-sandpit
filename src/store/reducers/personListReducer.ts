import { Person } from '../../models/person';
import * as actionTypes from '../actions/actions';

const initialState: {people: Array<Person>} = {
    people: [
        {name: 'kutya', email: 'bundas@freemail.hu', planet: 'Plútó'},
        {name: 'cica', email: 'cirmi@vipmail.hu', planet: 'Youranus'},
    ]
}

export const personListReducer = (state: {people: Array<Person>} = initialState, action: {type: string, payload: Person}): any => {
    switch(action.type) {
        case actionTypes.ADD_PERSON:
            // console.log('adding item', action.payload)
            return {...state, people: state.people.concat(action.payload)}
        default:
            return state
    }
}
