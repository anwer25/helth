/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AuthStack from './authStack';
import AdminStack from './adminStack';
import {authContext} from './authProvider';
import Chargement from '../components/chargement';

const Routes = function () {
	const {user, setUser} = useContext(authContext);
	const [loding, setLoding] = useState<boolean>(true);
	const [initializing, setInitializing] = useState<boolean>(true);
	// eslint-disable-next-line no-shadow
	function onAuthStateChanged(user: any) {
		setUser(user);
		if (initializing) setInitializing(false);
		setLoding(false);
	}

	useEffect(() => {
		const subScriber = auth().onAuthStateChanged(onAuthStateChanged);
		return subScriber;
	}, []);

	if (loding) {
		return <Chargement />;
	}
	return (
		<NavigationContainer>
			{user ? <AdminStack /> : <AuthStack />}
		</NavigationContainer>
	);
};

export default Routes;
