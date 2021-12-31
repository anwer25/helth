import React from 'react';
import {View} from 'react-native';
import SelectBox from 'react-native-multi-selectbox-typescript';
import {
	ouiOuNon,
	sexeNom,
	typeAccident,
	TypeDeBlessure,
	typeDeSang,
} from '../ressources/utils/_varibales';
import {CaseProp} from '../ressources/utils/types';

const Case = function (props: CaseProp) {
	const {
		onChange,
		value,
		value4,
		value3,
		value2,
		value1,
		onMultiSelect,
		onChange4,
		selectedValues,
		onChange3,
		onChange2,
		onChange1,
	} = props;
	return (
		<View>
			<SelectBox
				label="Sexe :"
				options={sexeNom}
				value={value}
				onChange={onChange}
				hideInputFilter={false}
				inputPlaceholder="Sélectionner "
			/>
			<SelectBox
				label="Donneur :"
				options={ouiOuNon}
				value={value1}
				onChange={onChange1}
				hideInputFilter={false}
				inputPlaceholder="Sélectionner "
			/>
			<SelectBox
				label="Type de sang :"
				options={typeDeSang}
				value={value2}
				onChange={onChange2}
				hideInputFilter={false}
				inputPlaceholder="Sélectionner "
			/>
			<SelectBox
				label="Type d'accident :"
				options={typeAccident}
				value={value3}
				onChange={onChange3}
				hideInputFilter={false}
				inputPlaceholder="Sélectionner "
			/>
			<SelectBox
				label="Type de blessure :"
				options={TypeDeBlessure}
				selectedValues={selectedValues}
				onMultiSelect={onMultiSelect}
				onTapClose={onMultiSelect}
				inputPlaceholder="Sélectionner "
				isMulti
			/>
			<SelectBox
				label="Le patient est-li réveillé :"
				options={ouiOuNon}
				value={value4}
				onChange={onChange4}
				inputPlaceholder="Sélectionner "
			/>
		</View>
	);
};
export default Case;
