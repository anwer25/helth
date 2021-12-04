/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
// eslint-disable-next-line import/extensions,import/no-unresolved
import styles from './src/resources/styles';
// eslint-disable-next-line import/extensions,import/no-unresolved
import backgroundImage from './src/resources/images';
import Connextion from './src/components/connextion';

const App = function () {
	return (
		// eslint-disable-next-line react/jsx-filename-extension
		// <ImageBackground
		// 	source={}
		// 	style={[styles.conatiner]}
		// 	resizeMethod="scale">
		//
		// </ImageBackground>
		<View style={[styles.center, styles.conatiner]}>
			<Connextion />
		</View>
	);
};

// @ts-ignore
export default App;
