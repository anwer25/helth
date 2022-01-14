import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Admin from '../écrans/Admin/admin';
import Utilisateur from '../écrans/Admin/utilisateur';
import Patient from '../écrans/Admin/Patient';

const Stack = createStackNavigator();

const AdminStack = function () {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name="admin" component={Admin} />
			<Stack.Screen name="utilisateur" component={Utilisateur} />
			<Stack.Screen name="patient" component={Patient} />
		</Stack.Navigator>
	);
};

export default AdminStack;
