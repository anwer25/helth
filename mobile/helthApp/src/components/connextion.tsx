import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
// eslint-disable-next-line import/extensions,import/no-unresolved
import styles from '../resources/styles';

// TODO: add fire base athu

const connexion = (Nom: string, mtp: string): void => {
	console.log(Nom, mtp);
};

const Connextion: React.FC = function () {
	const [nom, définirNom] = useState('');
	const [mtp, définirMtp] = useState('');
	return (
		// eslint-disable-next-line react/jsx-filename-extension
		<View style={[styles.center, styles.col]}>
			<View style={[styles.row]}>
				<View style={[styles.col, styles.container, styles.center]}>
					<TextInput
						onChangeText={définirNom}
						value={nom}
						placeholder="Nom d'utilisateur"
						textAlign="center"
						style={[styles.input, styles.margin_b_1]}
					/>
					<TextInput
						onChangeText={définirMtp}
						value={mtp}
						placeholder="Mot de passe"
						textAlign="center"
						style={[styles.input]}
						secureTextEntry={true}
					/>
					<TouchableOpacity
						style={[
							styles.button,
							styles.buttonC,
							styles.alignCenter,
						]}
						onPress={() => connexion(nom, mtp)}>
						<Text
							style={[
								styles.primeryColor,
								styles.primeryTextButton,
							]}>
							Connexion
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default Connextion;
