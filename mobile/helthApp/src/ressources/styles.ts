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
	textCenter: {
		textAlign: 'center',
	},
	justifyEnd: {
		justifyContent: 'flex-end',
	},
	justifyStart: {
		justifyContent: 'flex-start',
	},
	justifySpaceBet: {
		justifyContent: 'space-between',
	},
	alignEnd: {
		alignItems: 'flex-end',
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
	dropDownTextOptions: {
		marginLeft: 9,
		fontSize: 15,
	},
	dropDownText: {
		marginRight: 9,
		fontSize: 15,
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
	navButton: {
		backgroundColor: '#fff',
		padding: 5,
		marginTop: 10,
		borderBottomColor: '#C8C8C8',
		borderLeftColor: '#C8C8C8',
		borderRightColor: '#C8C8C8',
		borderTopColor: '#C8C8C8',
		borderWidth: 1,
		width: 150,
		borderRadius: 100,
		alignItems: 'center',
	},
	footer: {
		justifyContent: 'center',
	},
	logo: {
		width: 50,
		height: 80,
	},
	header: {
		backgroundColor: '#FFF',
		flex: 1,
	},
	flexLg: {
		flex: 13,
	},
	buttonLogo: {
		height: 100,
		width: 100,
	},
	menuButton: {
		padding: 10,
		backgroundColor: 'rgba(255,255,255,0.5)',
		borderRadius: 20,
	},
	menuButtonM: {
		marginLeft: 15,
	},
	menuCollBottomM: {
		marginBottom: 15,
	},
	pageLogo: {
		height: 300,
		width: 300,
	},
	tableHead: {
		height: 40,
		backgroundColor: 'rgba(43, 128, 186, 0.8)',
		marginTop: 0,
		marginBottom: 0,
		marginLeft: 6,
		marginRight: 6,
	},

	tableText: {
		marginTop: 0,
		marginBottom: 0,
		marginLeft: 6,
		marginRight: 6,
	},
	modalBg: {
		backgroundColor: 'rgba(53, 157, 229, 0.8)',
	},
});

export default Styles;
