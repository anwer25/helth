import React, {useContext, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {authContext} from '../components/hooks/authProvider';
import styles from '../ressources/styles';
import {_journaux, menu} from '../ressources/images';

const Journaux: React.FC = function () {
	const [shouldShow, setShow] = useState(false);
	const [shouldShowOptions, setShouldShowOptions] = useState(false);
	const {logout} = useContext(authContext);
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
						<Image source={_journaux} style={{marginLeft: -14}} />
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

export default Journaux;
