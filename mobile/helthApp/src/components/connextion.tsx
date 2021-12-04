import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import styles from '../resources/styles';

const Connextion: React.FC = function () {
	return (
		// eslint-disable-next-line react/jsx-filename-extension
		<View style={[styles.center, styles.col]}>
			<View style={[styles.row]}>
				<View style={[styles.col]}>
					<TextInput
						placeholder="Nom d'utilisateur"
						style={[styles.input, styles.margin_b_1]}
					/>
					<TextInput
						placeholder="Nom d'utilisateur"
						style={[styles.input]}
					/>
					<Button title="Connexion" color="#FFF" />
				</View>
			</View>
		</View>
	);
};

export default Connextion;
