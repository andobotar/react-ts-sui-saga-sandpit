import React from 'react';
import { Formik } from 'formik';
import { Form, Button } from 'semantic-ui-react';
import { useDispatch  } from 'react-redux';

import { addPersonAction } from '../../store/actions/actions'

import classes from './PersonForm.module.scss'
import { Person } from '../../models/person';

export default function PersonForm() {

    const dispatch = useDispatch();
    
    const handleSubmit = (values: Person, { resetForm }: {resetForm: any}) => {
        dispatch(addPersonAction(values))
        // resetForm()
    }


    return (
        <div className={'content'}>
            <Formik initialValues={{ name: '', email: '', planet: '' }} onSubmit={handleSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Form.Input
                            fluid
                            className={classes.field}
                            name="name"
                            label="First name"
                            placeholder="First name"
                            onChange={handleChange}
                            value={values.name}
                        />
                        <Form.Input
                            fluid
                            className={classes.field}
                            name="email"
                            label="Email"
                            placeholder="email@email.com"
                            onChange={handleChange}
                            value={values.email}
                        />
                        <Button type="submit" primary>
                            Submit
                        </Button>
                    </form>
                )}
            </Formik>
        </div>
    );
}
