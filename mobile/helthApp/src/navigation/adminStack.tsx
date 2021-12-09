import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Admin from '../écrans/admin';

const Stack = createStackNavigator();

const AdminStack = function () {
	return (
		<Stack.Navigator>
			<Stack.Screen name="admin" component={Admin} />
		</Stack.Navigator>
	);
};

export default AdminStack;
