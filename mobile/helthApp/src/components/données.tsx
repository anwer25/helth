import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {xorBy} from 'lodash';
import Button from './sendButton';
// @ts-ignore
import styles from '../ressources/styles';

import Case from './case';

const Données: React.FC = function (): JSX.Element {
	const [nom, Nom] = useState('');
	const [prenom, Prenom] = useState('');
	const [cin, CIN] = useState('');
	const [sexe, Sexe] = useState('');
	const [sang, Sang] = useState('');
	const [donneur, Donneur] = useState('');
	const [accident, Accident] = useState('');
	const [blessure, Blessure] = useState([]);
	function multiChange() {
		// @ts-ignore
		return (item: any) => Blessure(xorBy(blessure, [item], 'id'));
	}
	return (
		<View style={[styles.container, styles.col]}>
			<TextInput
				value={nom}
				onChangeText={Nom}
				placeholder="Nom"
				style={styles.textInput}
			/>
			<TextInput
				style={styles.textInput}
				value={prenom}
				onChangeText={Prenom}
				placeholder="Prénom"
			/>
			<TextInput
				value={cin}
				onChangeText={CIN}
				placeholder="CIN"
				style={styles.textInput}
			/>
			<Case
				value={sexe}
				onChange={(val: React.SetStateAction<string>) => Sexe(val)}
				value1={donneur}
				onChange1={(val: React.SetStateAction<string>) => Donneur(val)}
				value2={sang}
				onChange2={(val: React.SetStateAction<string>) => Sang(val)}
				value3={accident}
				onChange3={(val: React.SetStateAction<string>) => Accident(val)}
				selectedValues={blessure}
				onMultiSelect={multiChange()}
			/>
			<View>
				<Button
					nom={nom}
					prenom={prenom}
					cin={cin}
					sexe={sexe}
					sang={sang}
					donneur={donneur}
					accident={accident}
					blessure={blessure}
				/>
			</View>
		</View>
	);
};

export default Données;
