import React, {useState, useContext} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
// @ts-ignore
import {authContext} from '../navigation/authProvider.tsx';
// eslint-disable-next-line import/extensions,import/no-unresolved
import styles from '../ressources/styles';

// TODO: add fire base athu

const Connexion: React.FC = function () {
	const [nom, définirNom] = useState<string>('');
	const [mtp, définirMtp] = useState<string>('');
	const {login} = useContext(authContext);
	return (
		// eslint-disable-next-line react/jsx-filename-extension
		<View style={[styles.center, styles.container]}>
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
							onPress={() => login(nom, mtp)}>
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
		</View>
	);
};

export default Connexion;
