import React, {useContext, useState} from 'react';
import {Modal, Pressable, Text, TextInput, View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {authContext} from '../../components/hooks/authProvider';
import styles from '../../ressources/styles';

const Ajouter: React.FC = function (): JSX.Element {
	const [elémentSélectionné, définirSélectionné] = useState('');
	const [nom, definirNom] = useState('');
	const [email, definirEmail] = useState('');
	const [mtp, definirMtp] = useState('');
	const [tel, definiTel] = useState('');
	const {showW, setShowW, register, registerOp} = useContext(authContext);

	const role = ['Protection', 'Réception'];
	return (
		<Modal
			animationType="slide"
			hardwareAccelerated={true}
			transparent={false}
			visible={showW}
			onRequestClose={() => setShowW(!showW)}>
			<View
				style={[
					styles.container,
					styles.row,
					styles.center,
					styles.modalBg,
				]}>
				<View
					style={[styles.container, styles.row, styles.alignCenter]}>
					<View style={[styles.container, styles.col]}>
						<Text>Autorisation: </Text>
					</View>
					<View style={[styles.container, styles.col]}>
						{/* @ts-ignore */}
						<SelectDropdown
							data={role}
							onSelect={elément => définirSélectionné(elément)}
							buttonTextAfterSelection={elément => elément}
						/>
						<TextInput
							placeholder="Nom"
							onChangeText={definirNom}
						/>
						{elémentSélectionné === role[0] ? (
							<>
								<TextInput
									placeholder="Email"
									onChangeText={definirEmail}
								/>
								<TextInput
									placeholder="Mot de pass"
									onChangeText={definirMtp}
								/>
							</>
						) : (
							<TextInput
								placeholder="Tel"
								onChangeText={definiTel}
							/>
						)}
					</View>
				</View>
			</View>
			<View
				style={[
					styles.container,
					styles.row,
					styles.justifySpaceBet,
					styles.alignEnd,
					styles.modalBg,
				]}>
				<Pressable onPress={() => setShowW(!showW)}>
					<Text>Fermer</Text>
				</Pressable>
				<Pressable
					onPress={() => {
						const tempTel =
							elémentSélectionné === role[0] ? 'Vide' : tel;
						elémentSélectionné === role[0]
							? register(
									email,
									mtp,
									nom,
									elémentSélectionné,
									tempTel,
							  )
							: registerOp(nom, elémentSélectionné, tempTel);
					}}>
					<Text>Sauvegarder</Text>
				</Pressable>
			</View>
		</Modal>
	);
};

export default Ajouter;
