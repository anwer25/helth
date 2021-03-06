import React, {useContext, useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {authContext} from '../../components/hooks/authProvider';
import UseListData from '../../components/hooks/listView';
import Ajouter from '../widgets/ajouter';
import styles from '../../ressources/styles';
import {menu, utilisateurMenuLogo} from '../../ressources/images';
import {tableHeader, widthArr} from '../../ressources/utils/_varibales';

// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Utilisateur: React.FC = function ({navigation}) {
	const [shouldShow, setShow] = useState(false);
	const [shouldShowOptions, setShouldShowOptions] = useState(false);
	// @ts-ignore
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const {logout, showW, setShowW} = useContext(authContext);
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
					<TouchableOpacity
						style={[styles.navButton]}
						onPress={() => setShowW(true)}>
						<Text style={[styles.dropDownTextOptions]}>
							Ajouter
						</Text>
					</TouchableOpacity>
				</View>
			) : null}
			<View style={[styles.flexLg]}>
				<Ajouter />
				{/* @ts-ignore */}
				<UseListData
					collection="users"
					tableHeader={tableHeader}
					width={widthArr}
				/>
			</View>
		</View>
	);
};

export default Utilisateur;
