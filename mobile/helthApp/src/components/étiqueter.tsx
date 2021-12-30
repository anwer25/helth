import {Text, View} from 'react-native';
import React from 'react';
import styles from '../ressources/styles';

const Étiqueter: React.FC = function (): JSX.Element {
	return (
		<View style={[styles.col]}>
			<Text>Nom :</Text>
			<Text>Prénom :</Text>
			<Text>CIN :</Text>
			<Text>Sexe :</Text>
			<Text>Type de sang :</Text>
			<Text>Donneur :</Text>
			<Text>Le patient est-li réveillé :</Text>
			<Text>Type d'accident :</Text>
			<Text>Type de blessure :</Text>
			{/* TODO ADD CHECK HERE */}
		</View>
	);
};

export default Étiqueter;
