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
import {patient, menu} from '../../ressources/images';

const Réception: React.FC = function (): JSX.Element {
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
						<Image source={patient} style={{marginLeft: -14}} />
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
					<View>
						<Text>Hello rec</Text>
					</View>
				</ScrollView>
			</View>
		</View>
	);
};
export default Réception;
