import React, {useEffect, useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {authContext} from './hooks/authProvider';
import styles from '../ressources/styles';

const Chargement: React.FC = function () {
	const {logout} = useContext(authContext);
	useEffect(() => {
		const time = setTimeout(() => {
			logout();
		}, 30000);
		return () => clearTimeout(time);
	}, []);
	return (
		<View style={[styles.container, styles.center]}>
			<ActivityIndicator size="large" color="#6646ee" />
		</View>
	);
};

export default Chargement;
