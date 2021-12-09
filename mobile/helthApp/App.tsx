import {View, ImageBackground, Image} from 'react-native';
import React from 'react';
import styles from './src/ressources/styles';
import {backgroundImage, logo_h, logo_b} from './src/ressources/images';
import Providers from './src/navigation';

const App = function () {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={backgroundImage}
				resizeMode="cover"
				style={styles.bgImage}>
				<Providers />
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
