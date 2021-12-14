import React, {useContext, useState} from 'react';
import {Modal, Pressable, Text, TextInput} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {authContext} from '../../navigation/authProvider';

const Ajouter: React.FC = function (): JSX.Element {
	const [elémentSélectionné, définirSélectionné] = useState('');
	const role = ['Protection', 'Réception'];
	const {showW, setShowW} = useContext(authContext);
	return (
		<Modal
			animationType="slide"
			hardwareAccelerated={true}
			transparent={false}
			visible={showW}
			onRequestClose={() => setShowW(!showW)}>
			<TextInput placeholder="Nom" />
			<TextInput placeholder="Mot de pass" />
			{/* @ts-ignore */}
			<SelectDropdown
				data={role}
				onSelect={elément => définirSélectionné(elément)}
				buttonTextAfterSelection={elément => elément}
			/>
			<Pressable onPress={() => setShowW(!showW)}>
				<Text>Hello</Text>
			</Pressable>
		</Modal>
	);
};

export default Ajouter;
