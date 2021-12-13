import React, {useState, useContext, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {firebase} from '@react-native-firebase/firestore';
import {authContext} from '../navigation/authProvider';
import styles from '../ressources/styles';
import {utilisateurMenuLogo, menu} from '../ressources/images';

const Utilisateur: React.FC = function () {
	const [shouldShow, setShow] = useState(false);
	const [shouldShowOptions, setShouldShowOptions] = useState(false);
	const {logout} = useContext(authContext);
	useEffect(() => {}, []);
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
					<TouchableOpacity
						style={[styles.footer]}
						onPress={() => {
							setShow(false);
							setShouldShowOptions(!shouldShowOptions);
						}}>
						<Image
							source={utilisateurMenuLogo}
							style={{marginLeft: -14}}
						/>
					</TouchableOpacity>
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
			{shouldShowOptions ? (
				<View>
					<TouchableOpacity style={[styles.navButton]}>
						<Text style={[styles.dropDownTextOptions]}>
							Ajouter
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.navButton]}>
						<Text style={[styles.dropDownTextOptions]}>
							Modifier
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.navButton]}>
						<Text style={[styles.dropDownTextOptions]}>
							Supprimer
						</Text>
					</TouchableOpacity>
				</View>
			) : null}
			{/* TODO: add list here from fireBase dataBase */}
			<View style={[styles.flexLg]} />
		</View>
	);
};

export default Utilisateur;
