import React from 'react';
import Info from './landingInfo';
import Signup from './LandingSignup';
import { useStep } from 'react-hooks-helper';

const steps = [ { id: 'signup' }, { id: 'info' } ];

const LandingPage = () => {
	const { step, navigation } = useStep({ initialStep: 0, steps });
	const { id } = step;

	const props = { navigation };

	switch (id) {
		case 'signup':
			return <Signup {...props} />;
		case 'info':
			return <Info {...props} />;
		case 'reload':
			return window.location.reload(false);
		default:
			return null;
	}
};

export default LandingPage;
