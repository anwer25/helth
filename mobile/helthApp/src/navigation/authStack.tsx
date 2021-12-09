/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Connexion from '../écrans/connexion';

const Stack = createStackNavigator();

const AuthStack: React.FC = function () {
	return (
		<Stack.Navigator
			screenOptions={{headerShown: false}}
			initialRouteName="connexion">
			<Stack.Screen name="connexion" component={Connexion} />
		</Stack.Navigator>
	);
};

export default AuthStack;
