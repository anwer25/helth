import React, {useContext, useState} from 'react';
import {Modal, Pressable, Text, TextInput, View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {authContext} from '../../components/hooks/authProvider';
import styles from '../../ressources/styles';

const AjouterO: React.FC = function (): JSX.Element {
	const [elémentSélectionné, définirSélectionné] = useState('');
	const [nom, definirNom] = useState('');
	const {showW, setShowW, ajouterOperation} = useContext(authContext);

	const etat = ['Réservé', 'Liber'];
	return (
		<Modal
			animationType="slide"
			hardwareAccelerated={true}
			transparent={false}
			visible={showW}
			onRequestClose={() => setShowW(!showW)}>
			<View style={[styles.container, styles.row, styles.center]}>
				<View
					style={[styles.container, styles.row, styles.alignCenter]}>
					<View style={[styles.container, styles.col]}>
						<Text>Nomber: </Text>
						<Text>Etat: </Text>
					</View>
					<View style={[styles.container, styles.col]}>
						<TextInput
							placeholder="Nomber"
							onChangeText={definirNom}
						/>
						{/* @ts-ignore */}
						<SelectDropdown
							data={etat}
							onSelect={elément => définirSélectionné(elément)}
							buttonTextAfterSelection={elément => elément}
						/>
					</View>
				</View>
			</View>
			<View
				style={[
					styles.container,
					styles.row,
					styles.justifySpaceBet,
					styles.alignEnd,
				]}>
				<Pressable onPress={() => setShowW(!showW)}>
					<Text>Fermer</Text>
				</Pressable>
				<Pressable
					onPress={() => ajouterOperation(nom, elémentSélectionné)}>
					<Text>Sauvegarder</Text>
				</Pressable>
			</View>
		</Modal>
	);
};

export default AjouterO;
