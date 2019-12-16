import { Person } from "../../models/person";

export const ADD_PERSON = 'ADD_PERSON';

export const addPersonAction = (person: Person) => {
    console.log('addPersonAction is running')
    return {
        type: ADD_PERSON,
        payload: person
    };
};
