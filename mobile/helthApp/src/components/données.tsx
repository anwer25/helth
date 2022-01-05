import React, {useState} from 'react';
import {ScrollView, TextInput, View} from 'react-native';
// @ts-ignore
import {xorBy} from 'lodash';
import styles from '../ressources/styles';

import Case from './case';

const Données: React.FC = function (): JSX.Element {
	const [nom, Nom] = useState('');
	const [prénom, Prénom] = useState('');
	const [cin, CIN] = useState('');
	const [sexe, Sexe] = useState('');
	const [sang, Sang] = useState('');
	const [donneur, Donneur] = useState('');
	const [réveillée, Réveillée] = useState('');
	const [accident, Accident] = useState('');
	const [blessure, Blessure] = useState([]);
	function multiChange() {
		// @ts-ignore
		return (item: any) => Blessure(xorBy(blessure, [item], 'id'));
	}
	return (
		<View style={[styles.container, styles.row]}>
			<View style={[styles.col]}>
				<TextInput value={nom} onChangeText={Nom} placeholder="Nom :" />
				<TextInput
					value={prénom}
					onChangeText={Prénom}
					placeholder="Prénom :"
				/>
				<TextInput value={cin} onChangeText={CIN} placeholder="CIN" />

				<Case
					value={sexe}
					onChange={(val: React.SetStateAction<string>) => Sexe(val)}
					value1={donneur}
					onChange1={(val: React.SetStateAction<string>) =>
						Donneur(val)
					}
					value2={sang}
					onChange2={(val: React.SetStateAction<string>) => Sang(val)}
					value3={accident}
					onChange3={(val: React.SetStateAction<string>) =>
						Accident(val)
					}
					selectedValues={blessure}
					onMultiSelect={multiChange()}
					value4={réveillée}
					onChange4={(val: React.SetStateAction<string>) =>
						Réveillée(val)
					}
				/>
			</View>
		</View>
	);
};

export default Données;
