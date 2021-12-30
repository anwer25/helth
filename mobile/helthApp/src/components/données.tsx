import React, {useState} from 'react';
import {ScrollView, TextInput, View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import SelectBox from 'react-native-multi-selectbox';
import {xorBy} from 'lodash';
import Étiqueter from './étiqueter';
import styles from '../ressources/styles';
import {
	sexeNom,
	typeDeSang,
	_donneur,
	_réveillé,
	typeAccident,
	TypeDeBlessure,
} from '../ressources/utils/_varibales';

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
		return (item: any) => Blessure(xorBy(blessure, [item], 'id'));
	}
	return (
		<View style={[styles.container, styles.row, styles.justifySpaceBet]}>
			<Étiqueter />
			<View style={[styles.col]}>
				<TextInput value={nom} onChangeText={Nom} placeholder="text" />
				<TextInput
					value={prénom}
					onChangeText={Prénom}
					placeholder="pre"
				/>
				<TextInput value={cin} onChangeText={CIN} placeholder="cin" />
				<SelectDropdown
					data={sexeNom}
					onSelect={element => Sexe(element)}
					defaultButtonText={sexeNom[0]}
					buttonTextAfterSelection={element => element}
				/>
				<SelectDropdown
					data={typeDeSang}
					onSelect={element => Sang(element)}
					defaultButtonText={typeDeSang[0]}
					buttonTextAfterSelection={element => element}
				/>
				<SelectDropdown
					data={_donneur}
					onSelect={element => Donneur(element)}
					defaultButtonText={_donneur[0]}
					buttonTextAfterSelection={element => element}
				/>
				<SelectDropdown
					data={_réveillé}
					onSelect={element => Réveillée(element)}
					defaultButtonText={_réveillé[0]}
					buttonTextAfterSelection={element => element}
				/>
				<SelectDropdown
					data={typeAccident}
					onSelect={element => Accident(element)}
					defaultButtonText={typeAccident[0]}
					buttonTextAfterSelection={element => element}
				/>
				<View>
					<SelectBox
						label="Type de blessure :"
						options={TypeDeBlessure}
						selectedValues={blessure}
						onMultiSelect={multiChange()}
						onTapClose={multiChange()}
						isMulti
					/>
				</View>
			</View>
		</View>
	);
};

export default Données;
