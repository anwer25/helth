import {DefaultTheme} from '@react-navigation/native';

const NavTheme: object = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: 'transparent',
	},
};
const tableHeader: Array<string> = ['Nom', 'Tel', 'Autorisation'];
const tableHeaderP: Array<string> = ['Nome', 'Prenome', 'CIN'];
const widthArr: Array<number> = [136, 136, 136];
const ruels: Array<string> = ['Admin', 'Protection'];
const role: Array<object> = [
	{item: 'Admin', id: 'Ad'},
	{item: 'Protection', id: 'Prot'},
	{item: 'Réception', id: 'Recp'},
];

const sexeNom: Array<object> = [
	{item: 'homme', id: 'HO'},
	{item: 'femme', id: 'FE'},
];
const typeDeSang: Array<object> = [
	{item: 'O-', id: 'O-'},
	{item: 'O+', id: 'O+'},
	{item: 'B+', id: 'B+'},
	{item: 'A-', id: 'A-'},
	{item: 'A+', id: 'A+'},
	{item: 'AB-', id: 'AB-'},
	{item: 'AB+', id: 'AB+'},
	{item: 'Autre', id: 'AU'},
];
const ouiOuNon: Array<object> = [
	{item: 'Non', id: 'Non'},
	{item: 'Oui', id: 'Oui'},
];

const typeAccident: Array<object> = [
	{item: 'accidents de la route', id: 'RO'},
	{item: 'accidents domestiques', id: 'DO'},
	{item: 'accidents du travail', id: 'TR'},
	{item: 'Autre', id: 'AU'},
];

export {
	NavTheme,
	tableHeader,
	tableHeaderP,
	widthArr,
	ruels,
	role,
	sexeNom,
	typeDeSang,
	ouiOuNon,
	typeAccident,
};
