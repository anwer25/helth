import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
	conatiner: {
		flex: 1,
	},
	colors: {
		color: 'red',
	},
	center: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	row: {
		flexDirection: 'row',
	},
	col: {
		flexDirection: 'column',
	},
	input: {
		color: '#000',
		borderBottomColor: '#C8C8C8',
		borderLeftColor: '#C8C8C8',
		borderRightColor: '#C8C8C8',
		borderTopColor: '#C8C8C8',
		borderWidth: 1,
		borderRadius: 120,
		width: 300,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		textShadowRadius: 10.32,
		elevation: 0,
	},
	margin_b_1: {
		marginBottom: 10,
	},
	button: {
		backgroundColor: '#fff',
		color: '#1F98D4',
	},
});

export default Styles;
