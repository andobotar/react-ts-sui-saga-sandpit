import { Person } from '../../models/person';
import * as actionTypes from '../actions/actions';

const initialState: { people: Array<Person> } = {
    people: [
        { name: '1kutya', email: 'bundas@freemail.hu', planet: 'Plútó' },
        { name: '2cica', email: 'cirmi@vipmail.hu', planet: 'Youranus' },
        { name: '3kutya', email: 'bundas@freemail.hu', planet: 'Plútó' },
        { name: '4cica', email: 'cirmi@vipmail.hu', planet: 'Youranus' },
        { name: '5kutya', email: 'bundas@freemail.hu', planet: 'Plútó' },
        { name: '6cica', email: 'cirmi@vipmail.hu', planet: 'Youranus' },
        { name: '7kutya', email: 'bundas@freemail.hu', planet: 'Plútó' },
        { name: '8cica', email: 'cirmi@vipmail.hu', planet: 'Youranus' },
        { name: '9kutya', email: 'bundas@freemail.hu', planet: 'Plútó' },
        { name: '10cica', email: 'cirmi@vipmail.hu', planet: 'Youranus' },
        { name: '11kutya', email: 'bundas@freemail.hu', planet: 'Plútó' },
        { name: '12cica', email: 'cirmi@vipmail.hu', planet: 'Youranus' }
    ]
};

export const personListReducer = (state: {people: Array<Person>} = initialState, action: {type: string, payload: Person}): any => {
    switch(action.type) {
        case actionTypes.ADD_PERSON:
            return {...state, people: state.people.concat(action.payload)}
        default:
            return state
    }
}
