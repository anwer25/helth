import React, {useContext, useState} from 'react';
import {Modal, Pressable, Text, TextInput, View} from 'react-native';
import SelectBox from 'react-native-multi-selectbox-typescript';
import {authContext} from '../../components/hooks/authProvider';
import styles from '../../ressources/styles';
import {role} from '../../ressources/utils/_varibales';

const Ajouter: React.FC = function (): JSX.Element {
	const [elémentSélectionné, définirSélectionné] = useState('');
	const [nom, definirNom] = useState('');
	const [email, definirEmail] = useState('');
	const [mtp, definirMtp] = useState('');
	const [tel, definiTel] = useState('');
	const {showW, setShowW, register, registerOp} = useContext(authContext);

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
						{/* @ts-ignore */}
						<SelectBox
							label="Autorisation :"
							options={role}
							value={elémentSélectionné}
							onChange={définirSélectionné}
							hideInputFilter={false}
							inputPlaceholder="Sélectionner "
						/>
						<TextInput
							placeholder="Nom"
							onChangeText={definirNom}
							style={styles.textInput}
						/>
						{elémentSélectionné === role[0] ? (
							<>
								<TextInput
									placeholder="Email"
									onChangeText={definirEmail}
									style={styles.textInput}
								/>
								<TextInput
									placeholder="Mot de pass"
									onChangeText={definirMtp}
									style={styles.textInput}
								/>
							</>
						) : (
							<TextInput
								placeholder="Tel"
								onChangeText={definiTel}
								style={styles.textInput}
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
				<Pressable
					style={styles.buttonA}
					onPress={() => setShowW(!showW)}>
					<Text>Fermer</Text>
				</Pressable>
				<Pressable
					style={styles.buttonA}
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
