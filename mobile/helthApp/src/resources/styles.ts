import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	bgImage: {
		flex: 1,
		justifyContent: 'center',
		width: '100%',
		height: '100%',
	},
	primeryColor: {
		color: '#1F98D4',
	},
	primeryTextButton: {
		fontSize: 17,
		fontWeight: 'bold',
	},
	center: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	alignCenter: {
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
		shadowColor: '#171717',
		shadowOffset: {
			width: 1,
			height: 0,
		},
		shadowOpacity: 0.8,
		shadowRadius: 10,
		elevation: 0,
	},
	margin_b_1: {
		marginBottom: 10,
	},

	button: {
		backgroundColor: '#fff',
		padding: 10,
		alignItems: 'center',
	},
	buttonC: {
		marginTop: 18,
		borderBottomColor: '#C8C8C8',
		borderLeftColor: '#C8C8C8',
		borderRightColor: '#C8C8C8',
		borderTopColor: '#C8C8C8',
		borderWidth: 1,
		width: 200,
		borderRadius: 120,
	},
	footer: {
		justifyContent: 'center',
	},
	logo: {
		width: 50,
		height: 80,
	},
});

export default Styles;
