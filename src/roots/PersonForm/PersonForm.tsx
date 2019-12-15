import React from 'react';
import { Formik } from 'formik';
import { Form, Button } from 'semantic-ui-react';

import classes from './PersonForm.module.scss'

export default function PersonForm() {
    return (
        <div className={'content'}>
            <Formik
                initialValues={{ name: '', email: '' }}
                onSubmit={values => console.log(JSON.stringify(values, null, 2))}
            >
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
                        <Button type="submit" primary>Submit</Button>
                    </form>
                )}
            </Formik>
        </div>
    );
}
