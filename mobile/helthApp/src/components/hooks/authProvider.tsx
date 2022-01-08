import React, {createContext, useState} from 'react';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/firestore';

export const authContext = createContext({});

// @ts-ignore
const AuthProvider = function ({children}) {
	const [user, setUser] = useState(null);
	const [showW, setShowW] = useState(false);
	const [loading, setLoading] = useState(false);
	return (
		<authContext.Provider
			value={{
				user,
				showW,
				loading,
				setLoading,
				setUser,
				setShowW,
				login: async (email: string, password: string) => {
					if (!email) {
						console.error('email is empty');
					} else if (!password) {
						console.error('password is empty');
					} else if (!email.includes('@')) {
						console.error('inter valid email');
					} else {
						try {
							await auth().signInWithEmailAndPassword(
								email,
								password,
							);
						} catch (e) {
							Alert.alert(e, e);
						}
					}
				},
				register: async (
					email: string,
					mtp: string,
					nom: string,
					tel: string,
					role: string,
				) => {
					try {
						await auth().createUserWithEmailAndPassword(email, mtp);
						const db = firebase.firestore();
						const dbQuery = await db
							.collection('users')
							.doc(auth().currentUser?.uid)
							.set({
								Name: nom,
								UID: auth().currentUser?.uid,
								email,
								tel,
								ruels: role,
							})
							.then(() => console.log('ok'))
							.catch(e => {
								console.error(e);
							});
					} catch (e) {
						console.error(e);
					}
				},
				registerOp: async (nom: string, tel: string, role: string) => {
					try {
						const db = firebase.firestore();
						const dbQuery = await db
							.collection('users')
							.doc()
							.set({
								Name: nom,
								tel,
								ruels: role,
							})
							.then(async () => {
								// eslint-disable-next-line no-return-await
								try {
									await fetch('', {
										method: 'POST',
										body: JSON.stringify({nom, tel}),
										headers: {
											'Content-type':
												'application/json;charset=UTF-8',
										},
									})
										.then(responce => {
											console.log(responce.json());
										})
										.then(json => {
											console.log(json);
										})
										.catch(err => {
											console.log(err);
										});
								} catch (e) {
									console.log(e);
								}
							})
							.catch(e => {
								console.error(e);
							});
					} catch (e) {
						console.error(e);
					}
				},
				ajouterOperation: async (Nomber: string, etat: string) => {
					try {
						const db = firebase.firestore();
						const dbQuery = await db
							.collection('operation')
							.add({N: Nomber, Etat: etat})
							.then(() => {
								console.log('ok');
							})
							.catch(e => {
								console.error(e);
							});
					} catch (e) {
						console.error(e);
					}
				},
				logout: async () => {
					try {
						await auth().signOut();
					} catch (e) {
						console.error(e);
					}
				},
			}}>
			{children}
		</authContext.Provider>
	);
};

export {AuthProvider};
