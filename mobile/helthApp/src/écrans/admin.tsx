import React, {useState, useContext} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {authContext} from '../navigation/authProvider';
import styles from '../ressources/styles';
import {journaux, menu, salle, user, users} from '../ressources/images';

const Admin: React.FC = function ({navigation}) {
	const [shouldShow, setShow] = useState(false);
	const {logout} = useContext(authContext);
	return (
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
						style={[styles.alignCenter, styles.menuButton]}
						onPress={() => navigation.navigate('utilisateur')}>
						<Image source={users} style={[styles.buttonLogo]} />
						<Text>Utilisateurs</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							styles.alignCenter,
							styles.menuButton,
							styles.menuButtonM,
						]}
						onPress={() => navigation.navigate('patient')}>
						<Image source={user} style={[styles.buttonLogo]} />
						<Text>Patient</Text>
					</TouchableOpacity>
				</View>
				<View style={[styles.row]}>
					<TouchableOpacity
						style={[styles.alignCenter, styles.menuButton]}
						onPress={() => navigation.navigate('journaux')}>
						<Image source={journaux} style={[styles.buttonLogo]} />
						<Text>Journaux</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							styles.alignCenter,
							styles.menuButton,
							styles.menuButtonM,
						]}
						onPress={() => navigation.navigate('opération')}>
						<Image source={salle} style={[styles.buttonLogo]} />
						<Text>Operation</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default Admin;
