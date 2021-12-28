/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/firestore';
import AuthStack from './authStack';
import {authContext} from '../components/hooks/authProvider';
import Chargement from '../components/chargement';
import AdminStack from './adminStack';

const Routes = function () {
	const {user, setUser} = useContext(authContext);
	const [loding, setLoding] = useState<boolean>(true);
	const [initializing, setInitializing] = useState<boolean>(true);
	const [data, setData] = useState('');
	const db = firebase.firestore();

	// eslint-disable-next-line no-shadow
	function onAuthStateChanged(user: any) {
		setUser(user);
		if (initializing) setInitializing(false);
		setLoding(false);
	}

	const userData = async (id: string) => {
		try {
			const dbQery = await db
				.collection('users')
				.doc(id)
				.get()
				.then(QuerySnapShopt => {
					// @ts-ignore
					const x = QuerySnapShopt.data().ruels;
					console.log(x);
					if (!x) {
						setData('Admin');
					} else {
						// @ts-ignore
						setData(x);
					}
				})
				.catch(e => console.error(`error in promise catch ${e}`));
		} catch (e) {
			console.error(`error in try catch ${e}`);
		}
	};

	useEffect(() => {
		const subScriber = auth().onAuthStateChanged(onAuthStateChanged);
		return subScriber;
	}, []);

	if (loding) {
		return <Chargement />;
	}
	if (user) {
		userData(user.uid);
		if (data === 'Admin') {
			return (
				<NavigationContainer>
					<AdminStack />
				</NavigationContainer>
			);
		} else {
			return (
				<NavigationContainer>
					<AdminStack />
				</NavigationContainer>
			);
		}
	} else {
		return (
			<NavigationContainer>
				<AuthStack />
			</NavigationContainer>
		);
	}

	/* return (
				  <NavigationContainer>
					  {user ? userData(user.uid) : <AuthStack />}
				  </NavigationContainer>
			  ); */
};

export default Routes;
