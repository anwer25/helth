import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Connexion from '../écrans/connexion';

const Stack = createStackNavigator();
// TODO: fix background
const AuthStack: React.FC = function () {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				cardShadowEnabled: false,
				cardStyle: {backgroundColor: 'transparent'},
			}}
			initialRouteName="connexion">
			<Stack.Screen name="connexion" component={Connexion} />
		</Stack.Navigator>
	);
};

export default AuthStack;
