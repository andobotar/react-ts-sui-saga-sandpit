import { createSlice, createAction } from '@reduxjs/toolkit';

import { IPerson } from '../../models/person';

const initialState: { people: Array<IPerson> } = {
    people: [
        { name: 'kutya', email: 'bundas@freemail.hu', planet: 'Plútó' },
        { name: 'cica', email: 'cirmi@vipmail.hu', planet: 'Youranus' }
    ]
};

export const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        addPerson: (state, action) => {
            state.people.push(action.payload);
        }
    }
});

export const addPersonAsync = createAction('ADD_PERSON_ASYNC', (value) => ({ payload: value }));

export const { addPerson } = personSlice.actions;
export const personListReducer = personSlice.reducer;
