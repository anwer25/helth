import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
// eslint-disable-next-line import/extensions,import/no-unresolved
import styles from '../../resources/styles';
import {menu} from '../../resources/images';

const Utilisateur: React.FC = function () {
	const [shouldShow, setShow] = useState(false);
	return (
		// eslint-disable-next-line react/jsx-filename-extension
		<View style={[styles.container, styles.col]}>
			<View style={[styles.justifyEnd, styles.row, styles.header]}>
				<TouchableOpacity
					style={[styles.footer]}
					onPress={() => setShow(!shouldShow)}>
					<Image source={menu} style={[styles.logo]} />
				</TouchableOpacity>
			</View>
			{shouldShow ? (
				<View style={[styles.justifyEnd]}>
					<TouchableOpacity
						style={[styles.alignEnd, styles.dorpDownMenu]}>
						<Text style={[styles.dropDownText]}>Déconnecter</Text>
					</TouchableOpacity>
				</View>
			) : null}
			<View style={[styles.flexLg]} />
		</View>
	);
};

export default Utilisateur;
