import React, {useState} from 'react';
import {ScrollView, TextInput, View} from 'react-native';
import styles from '../ressources/styles';
import Étiqueter from './étiqueter';

const Données: React.FC = function (): JSX.Element {
	const [nom, Nom] = useState('');
	const [prénom, Prénom] = useState('');
	const [cin, CIN] = useState('');
	const [sexe, Sexe] = useState('');
	const [sang, Sang] = useState('');
	const [donneur, Donneur] = useState('');
	const [réveillée, Réveillée] = useState('');
	const [accident, Accident] = useState('');
	const [blessure, Blessure] = useState('');
	return (
		<ScrollView>
			<View
				style={[styles.container, styles.row, styles.justifySpaceBet]}>
				<Étiqueter />
				<View style={[styles.col]}>
					<TextInput
						value={nom}
						textAlign="left"
						onChangeText={Nom}
						placeholder="text"
					/>
				</View>
			</View>
		</ScrollView>
	);
};

export default Données;
