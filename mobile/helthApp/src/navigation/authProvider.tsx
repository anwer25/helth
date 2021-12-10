import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

export const authContext = createContext({});

// @ts-ignore
const AuthProvider = function ({children}) {
	const [user, setUser] = useState(null);
	return (
		<authContext.Provider
			value={{
				user,
				setUser,
				login: async (email: string, password: string) => {
					try {
						await auth().signInWithEmailAndPassword(
							email,
							password,
						);
					} catch (e) {
						console.log(e);
					}
				},
				register: async (email: string, password: string) => {
					try {
						await auth().createUserWithEmailAndPassword(
							email,
							password,
						);
					} catch (e) {
						console.log(e);
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
