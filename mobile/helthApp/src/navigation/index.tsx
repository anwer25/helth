import React from 'react';

import {AuthProvider} from '../components/hooks/authProvider';
import Routes from './Routes';

const Providers: React.FC = function () {
	return (
		<AuthProvider>
			<Routes />
		</AuthProvider>
	);
};

export default Providers;
