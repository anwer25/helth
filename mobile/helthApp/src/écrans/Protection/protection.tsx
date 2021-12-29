import React, {useState, useEffect, useContext} from 'react';
import {
	View,
	ScrollView,
	Text,
	TextInput,
	Pressable,
	TouchableOpacity,
	Image,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {firebase} from '@react-native-firebase/firestore';
import {authContext} from '../../components/hooks/authProvider';
import styles from '../../ressources/styles';
import {opération, menu} from '../../ressources/images';

const Protection: React.FC = function (): JSX.Element {
	const [shouldShow, setShow] = useState(false);
	const [shouldShowOptions, setShouldShowOptions] = useState(false);
	// @ts-ignore
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
						{/* TODO: fix logo title from figma */}
						<Image source={opération} style={{marginLeft: -14}} />
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
			{/* TODO: add element here */}
			<View style={styles.flexLg}>
				<ScrollView>
					<View
						style={[
							styles.container,
							styles.row,
							styles.justifySpaceBet,
						]}>
						<View style={styles.col}>
							<Text>Le patient est-li réveillé :</Text>
							<Text>Nom :</Text>
							<Text>Prénom :</Text>
							<Text>CIN :</Text>
							<Text>Gender :</Text>
							<Text>Type de sang :</Text>
							<Text>Donneur :</Text>
							<Text>Type d'accident :</Text>
							<Text>Type de blessure :</Text>
						</View>
					</View>
				</ScrollView>
			</View>
		</View>
	);
};
export default Protection;
