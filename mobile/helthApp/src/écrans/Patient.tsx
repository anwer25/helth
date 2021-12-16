import React, {useContext, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {authContext} from '../navigation/authProvider';
import styles from '../ressources/styles';
import {menu, patient} from '../ressources/images';
import UseListData from '../components/hooks/listView';

const Patient: React.FC = function () {
	const [shouldShow, setShow] = useState(false);
	const [shouldShowOptions, setShouldShowOptions] = useState(false);
	const {logout} = useContext(authContext);
	const tableHeader: Array<string> = [
		'Nome',
		'CIN',
		'salle de operation',
		'état',
	];
	return (
		<View style={[styles.container, styles.col]}>
			<View
				style={[
					styles.row,
					styles.header,
					styles.container,
					styles.justifySpaceBet,
					styles.alignCenter,
				]}>
				<View>
					<View style={[styles.footer]}>
						<Image source={patient} style={{marginLeft: -14}} />
					</View>
				</View>
				<View>
					<TouchableOpacity
						style={[styles.footer]}
						onPress={() => {
							setShouldShowOptions(false);
							setShow(!shouldShow);
						}}>
						<Image source={menu} style={[styles.logo]} />
					</TouchableOpacity>
				</View>
			</View>
			{shouldShow ? (
				<View style={[styles.justifyEnd, styles.alignEnd]}>
					<TouchableOpacity
						style={[styles.navButton]}
						onPress={logout}>
						<Text style={[styles.dropDownText]}>Déconnecter</Text>
					</TouchableOpacity>
				</View>
			) : null}
			{/* TODO: add list here from fireBase dataBase */}
			<View style={[styles.flexLg]}>
				<UseListData collection="patient" tableHeader={tableHeader} />
			</View>
		</View>
	);
};

export default Patient;
