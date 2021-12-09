import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from '../ressources/styles';

const Chargement: React.FC = function () {
	return (
		<View style={[styles.container, styles.center]}>
			<ActivityIndicator size="large" color="#6646ee" />
		</View>
	);
};

export default Chargement;
