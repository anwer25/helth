import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/firestore';
import message from '../message';

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
					let _email: string = email;
					if (!_email) {
						message("L'e-mail est vide", "Erreur dans l'e-mail");
					} else if (!password) {
						message(
							'Le mot de passe est vide',
							'Erreur dans le mot de passe',
						);
					} else if (!_email.includes('@')) {
						message(
							'Entrez une adresse email valide',
							"Erreur dans l'e-mail",
						);
					} else {
						if (_email.includes(' ')) {
							_email = _email.replace(' ', '');
						}
						try {
							await auth().signInWithEmailAndPassword(
								_email,
								password,
							);
						} catch (e) {
							// @ts-ignore
							message(e, 'Error');
						}
					}
				},
				// TODO: fix data passing
				register: async (
					email: string,
					mtp: string,
					Nom: string,
					Role: string,
					tel: string,
				) => {
					try {
						await auth().createUserWithEmailAndPassword(email, mtp);
						const db = firebase.firestore();
						await db
							.collection('users')
							.doc(auth().currentUser?.uid)
							.set({
								nom: Nom,
								role: Role,
								tel,
							})
							.then(() => console.log('ok'))
							.catch(e => {
								message(e, 'base de données');
							});
					} catch (e) {
						message(e, 'Créer un utilisateur\n');
					}
				},
				// TODO: fix data passing
				registerOp: async (nom: string, Role: string, tel: string) => {
					try {
						const db = firebase.firestore();
						await db
							.collection('users')
							.doc()
							.set({
								nom,
								Role,
								tel,
							})
							.then(async () => {
								// eslint-disable-next-line no-return-await
								try {
									await fetch(
										'https://twilio-2117-dev.twil.io/addCaller',
										{
											method: 'POST',
											body: JSON.stringify({nom, tel}),
											headers: {
												'Content-type':
													'application/json;charset=UTF-8',
											},
										},
									)
										.then(responce => {
											console.log(responce.json());
										})
										.then(json => {
											console.log(json);
										})
										.catch(err => {
											message(err, 'ajouter un numéro');
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
				logout: async () => {
					try {
						await auth().signOut();
					} catch (e) {
						message(e, 'Erreur de déconnexion');
					}
				},
			}}>
			{children}
		</authContext.Provider>
	);
};

export {AuthProvider};
