import React, {useEffect, useState} from 'react';
import {View, ImageBackground, Image} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './src/ressources/styles';
import {backgroundImage, logo_h, logo_b} from './src/ressources/images';
import Connexion from './src/écrans/connexion';
import Admin from './src/écrans/admin';

const App = function () {
	const [init, setInit] = useState(false);
	const [user, setUser] = useState();

	// eslint-disable-next-line no-shadow
	function onAuthStateChanged(user) {
		setUser(user);
		if (init) setInit(false);
	}

	useEffect(() => {
		const subScribe = auth().onAuthStateChanged(onAuthStateChanged);
		return subScribe;
	}, []);
	App.tsx;
	if (!user || init) {
		console.log(user, init);
		return (
			// eslint-disable-next-line react/jsx-filename-extension
			<View style={styles.container}>
				<ImageBackground
					source={backgroundImage}
					resizeMode="cover"
					style={styles.bgImage}>
					<View style={[styles.center, styles.container]}>
						<Connexion />
					</View>
					<View style={[styles.footer, styles.row]}>
						<Image source={logo_h} style={styles.logo} />
						<Image
							source={logo_b}
							style={[styles.logo, {marginLeft: 10}]}
						/>
					</View>
				</ImageBackground>
			</View>
		);
	}

	return (
		// eslint-disable-next-line react/jsx-filename-extension
		<View style={styles.container}>
			<ImageBackground
				source={backgroundImage}
				resizeMode="cover"
				style={styles.bgImage}>
				<Admin />

				<View style={[styles.footer, styles.row]}>
					<Image source={logo_h} style={styles.logo} />
					<Image
						source={logo_b}
						style={[styles.logo, {marginLeft: 10}]}
					/>
				</View>
			</ImageBackground>
		</View>
	);
};

// @ts-ignore
export default App;
