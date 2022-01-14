import React, {useContext, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {authContext} from '../../components/hooks/authProvider';
import styles from '../../ressources/styles';
import {menu, patient} from '../../ressources/images';
import UseListData from '../../components/hooks/listView';
import {tableHeaderP, widthArr} from '../../ressources/utils/_varibales';

const Patient: React.FC = function () {
	const [shouldShow, setShow] = useState(false);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
				{/* @ts-ignore */}
				<UseListData
					collection="patient"
					tableHeader={tableHeaderP}
					width={widthArr}
				/>
			</View>
		</View>
	);
};

export default Patient;
