import React, {useState, useContext} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {authContext} from '../navigation/authProvider.tsx';

// eslint-disable-next-line import/extensions,import/no-unresolved
import styles from '../ressources/styles';
// eslint-disable-next-line import/extensions,import/no-unresolved
import {journaux, menu, salle, user, users} from '../ressources/images';

const Admin: React.FC = function () {
	const [shouldShow, setShow] = useState(false);
	const {logout} = useContext(authContext);
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
				<View style={[styles.justifyEnd, styles.alignEnd]}>
					<TouchableOpacity
						style={[styles.navButton]}
						onPress={logout}>
						<Text style={[styles.dropDownText]}>Déconnecter</Text>
					</TouchableOpacity>
				</View>
			) : null}
			<View style={[styles.col, styles.center, styles.flexLg]}>
				<View style={[styles.row, styles.menuCollBottomM]}>
					<TouchableOpacity
						style={[styles.alignCenter, styles.menuButton]}>
						<Image source={users} style={[styles.buttonLogo]} />
						<Text>Utilisateurs</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							styles.alignCenter,
							styles.menuButton,
							styles.menuButtonM,
						]}>
						<Image source={user} style={[styles.buttonLogo]} />
						<Text>Patient</Text>
					</TouchableOpacity>
				</View>
				<View style={[styles.row]}>
					<TouchableOpacity
						style={[styles.alignCenter, styles.menuButton]}>
						<Image source={journaux} style={[styles.buttonLogo]} />
						<Text>Journaux</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							styles.alignCenter,
							styles.menuButton,
							styles.menuButtonM,
						]}>
						<Image source={salle} style={[styles.buttonLogo]} />
						<Text>Operation</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default Admin;
