import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Admin from '../écrans/admin';
import Utilisateur from '../écrans/utilisateur';
import Opération from '../écrans/opération';
import Patient from '../écrans/Patient';
import Journaux from '../écrans/journaux';

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
