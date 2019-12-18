import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Form, Input, Button, Icon } from 'antd';
import * as Yup from 'yup';

import { addPersonAction } from '../../store/actions/actions';

import classes from './PersonForm.module.scss';
import { Person } from '../../models/person';

export default function PersonForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values: Person, { resetForm }: { resetForm: Function }) => {
        dispatch(addPersonAction(values));
        resetForm();
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Legalább 3 karakter')
            .max(25, 'Nem lehet hosszabb 25 karakternél')
            .required('Adjon meg egy nevet'),
        email: Yup.string()
            .email('Kamu vagy')
            .required('megtalállak')
    });

    return (
        <div className={'content'}>
            <Formik
                initialValues={{ name: '', email: '', planet: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {({ values, handleChange, handleSubmit, errors, touched }) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Item
                            label="First name"
                            htmlFor="firstName"
                            className={classes.label}
                            hasFeedback
                            validateStatus={errors.name && touched.name ? 'error' : ''}
                            help={errors.name}
                        >
                            <Input
                                id="firstName"
                                className={classes.field}
                                name="name"
                                placeholder="First name"
                                onChange={handleChange}
                                value={values.name}
                                prefix={<Icon type="user" style={{ color: 'rgba(12, 135, 43, .7)' }} />}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            htmlFor="email"
                            className={classes.label}
                            hasFeedback
                            validateStatus={errors.email && touched.email ? 'error' : ''}
                            help={errors.email}
                        >
                            <Input
                                id="email"
                                className={classes.field}
                                name="email"
                                placeholder="email@email.com"
                                onChange={handleChange}
                                value={values.email}
                                prefix={<Icon type="mail" style={{ color: 'rgba(252, 157, 13, .8)' }} />}
                            />
                        </Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
