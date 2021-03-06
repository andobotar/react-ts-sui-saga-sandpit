import { Person } from "../../models/person";

export const ADD_PERSON = 'ADD_PERSON';
export const ADD_PERSON_ASYNC = 'ADD_PERSON_ASYNC';

export const addPersonAction = (person: Person) => {
    console.log('addPersonAction is running')
    return {
        type: ADD_PERSON_ASYNC,
        payload: person
    };
};
