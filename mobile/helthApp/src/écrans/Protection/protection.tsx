import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {authContext} from '../../components/hooks/authProvider';
import styles from '../../ressources/styles';
import {opération, menu} from '../../ressources/images';
import Données from '../../components/données';
import Chargement from '../../components/chargement';

const Protection: React.FC = function (): JSX.Element {
	const [shouldShow, setShow] = useState(false);
	const [shouldShowOptions, setShouldShowOptions] = useState(false);
	// @ts-ignore
	const {logout, loading} = useContext(authContext);
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
				{loading ? <Chargement /> : <Données />}
			</View>
		</View>
	);
};
export default Protection;
