import React from 'react';
import {View, ImageBackground, Image} from 'react-native';
// eslint-disable-next-line import/extensions,import/no-unresolved
import styles from './src/resources/styles';
// eslint-disable-next-line import/extensions,import/no-unresolved
import {backgroundImage, logo_h, logo_b} from './src/resources/images';
import Utilisateur from './src/components/Admin/utilisateur';
// eslint-disable-next-line import/extensions
// import Connextion from './src/components/connextion';
// import Admin from './src/components/Admin/admin';

const App = function () {
	return (
		// eslint-disable-next-line react/jsx-filename-extension
		<View style={styles.container}>
			<ImageBackground
				source={backgroundImage}
				resizeMode="cover"
				style={styles.bgImage}>
				{/* <Admin /> */}
				{/* <View style={[styles.center, styles.container]}> */}
				{/*	 <Connextion /> */}
				{/* </View> */}
				<Utilisateur />
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
