import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

export const authContext = createContext({});

// @ts-ignore
const AuthProvider = function ({children}) {
	const [user, setUser] = useState(null);
	const [showW, setShowW] = useState(false);
	return (
		<authContext.Provider
			value={{
				user,
				showW,
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
							console.error(e);
						}
					}
				},
				register: async (email: string, password: string) => {
					try {
						await auth().createUserWithEmailAndPassword(
							email,
							password,
						);
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
