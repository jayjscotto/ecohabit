import React from 'react';
import Form1 from './form1';
import Form2 from './form2';
import Review from './review';
import { Redirect } from 'react-router-dom';
import { useForm, useStep } from 'react-hooks-helper';

const steps = [ { id: 'form1' }, { id: 'form2' }, { id: 'review' }, { id: 'success' } ];

const defaultData = {
	userName: '',
	firstName: '',
	lastName: '',
	password: '',
	password2: '',
	zip: 0
};

const RegisterPage = () => {
	const [ formData, setForm ] = useForm(defaultData);
	const { step, navigation } = useStep({ initialStep: 0, steps });
	const { id } = step;

	const props = { formData, setForm, navigation };

	switch (id) {
		case 'form1':
			return <Form1 {...props} />;
		case 'form2':
			return <Form2 {...props} />;
		case 'review':
			return <Review {...props} />;
		case 'success':
			return <Redirect to={'/login'} />;
		default:
			return null;
	}
};

export default RegisterPage;
