import React, {useContext, useState} from 'react';
import {Modal, Pressable, Text, TextInput} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {authContext} from '../../navigation/authProvider';

const Ajouter: React.FC = function (): JSX.Element {
	const [elémentSélectionné, définirSélectionné] = useState('');
	const [nom, definirNom] = useState('');
	const [email, definirEmail] = useState('');
	const [mtp, definirMtp] = useState('');
	const {showW, setShowW, register} = useContext(authContext);

	const role = ['Protection', 'Réception'];
	return (
		<Modal
			animationType="slide"
			hardwareAccelerated={true}
			transparent={false}
			visible={showW}
			onRequestClose={() => setShowW(!showW)}>
			<TextInput placeholder="Nom" onChangeText={definirNom} />
			<TextInput placeholder="Email" onChangeText={definirEmail} />
			<TextInput placeholder="Mot de pass" onChangeText={definirMtp} />
			{/* @ts-ignore */}
			<SelectDropdown
				data={role}
				onSelect={elément => définirSélectionné(elément)}
				buttonTextAfterSelection={elément => elément}
			/>
			<Pressable onPress={() => setShowW(!showW)}>
				<Text>Fermer</Text>
			</Pressable>
			<Pressable
				onPress={() => register(email, mtp, nom, elémentSélectionné)}>
				<Text>Sauvegarder</Text>
			</Pressable>
		</Modal>
	);
};

export default Ajouter;
