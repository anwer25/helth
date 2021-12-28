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
	// @ts-ignore
	const {user, setUser} = useContext(authContext);
	const [loding, setLoding] = useState<boolean>(true);
	const [initializing, setInitializing] = useState<boolean>(true);
	const [data, setData] = useState('');
	const db = firebase.firestore();
	const ruels: Array<string> = ['Admin', 'Réception'];

	// eslint-disable-next-line no-shadow
	function onAuthStateChanged(user: any) {
		setUser(user);
		if (initializing) setInitializing(false);
		setLoding(false);
	}

	const userData = async (id: string) => {
		try {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const dbQery: void = await db
				.collection('users')
				.doc(id)
				.get()
				.then(QuerySnapShot => {
					// @ts-ignore
					if (!QuerySnapShot.data()) {
						setData(ruels[0]);
					} else {
						// @ts-ignore
						setData(QuerySnapShot.data().ruels);
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
	if (!user) {
		return (
			<NavigationContainer>
				<AuthStack />
			</NavigationContainer>
		);
	} else {
		userData(user.uid);
		if (data === ruels[0]) {
			return (
				<NavigationContainer>
					<AdminStack />
				</NavigationContainer>
			);
		} else if (data === ruels[1]) {
			// TODO: add 'Réception' Stack
			return (
				<NavigationContainer>
					<AdminStack />
				</NavigationContainer>
			);
		} else {
			// TODO: add Protection Stack
			return (
				<NavigationContainer>
					<AdminStack />
				</NavigationContainer>
			);
		}
	}
};

export default Routes;
