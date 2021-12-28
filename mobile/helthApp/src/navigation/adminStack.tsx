import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Admin from '../écrans/Admin/admin';
import Utilisateur from '../écrans/Admin/utilisateur';
import Opération from '../écrans/Admin/opération';
import Patient from '../écrans/Admin/Patient';
import Journaux from '../écrans/Admin/journaux';

const Stack = createStackNavigator();

const AdminStack = function () {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				cardStyle: {
					backgroundColor: 'transparent',
				},
			}}>
			<Stack.Screen name="admin" component={Admin} />
			<Stack.Screen name="utilisateur" component={Utilisateur} />
			<Stack.Screen name="opération" component={Opération} />
			<Stack.Screen name="patient" component={Patient} />
			<Stack.Screen name="journaux" component={Journaux} />
			{/* <Stack.Screen name="ajouter" component={Ajouter} /> */}
		</Stack.Navigator>
	);
};

export default AdminStack;
