import {DefaultTheme} from '@react-navigation/native';

const NavTheme: object = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: 'transparent',
	},
};
const tableHeader: Array<string> = ['Nom', 'Tel', 'Autorisation'];
const widthArr: Array<number> = [136, 136, 136];
const ruels: Array<string> = ['Admin', 'Protection'];

const sexeNom: Array<Object> = [
	{item: 'homme', id: 'HO'},
	{item: 'femme', id: 'FE'},
];
const typeDeSang: Array<Object> = [
	{item: 'O-', id: 'O-'},
	{item: 'O+', id: 'O+'},
	{item: 'B+', id: 'B+'},
	{item: 'A-', id: 'A-'},
	{item: 'A+', id: 'A+'},
	{item: 'AB-', id: 'AB-'},
	{item: 'AB+', id: 'AB+'},
	{item: 'Autre', id: 'AU'},
];
const ouiOuNon: Array<Object> = [
	{item: 'Non', id: 'Non'},
	{item: 'Oui', id: 'Oui'},
];

const typeAccident: Array<Object> = [
	{item: 'accidents de la route', id: 'RO'},
	{item: 'accidents domestiques', id: 'DO'},
	{item: 'accidents du travail', id: 'TR'},
	{item: 'Autre', id: 'AU'},
];

const TypeDeBlessure: Array<Object> = [
	{item: 'Entorse', id: 'En'},
	{item: 'Fracture', id: 'Fr'},
	{
		item: 'Claquage',
		id: 'CL',
	},
	{
		item: 'élongation',
		id: 'Él',
	},
	{
		item: 'Tendinite',
		id: 'Te',
	},
	{
		item: 'Lésions du genou',
		id: 'Le',
	},
	{
		item: 'Professionnels à consulter',
		id: 'Pro',
	},
	{
		item: "L'entorse",
		id: 'Le',
	},
	{
		item: 'Souvent bénignes',
		id: 'Souv',
	},
	{
		item: 'les entorses peuvent concerner',
		id: 'Entorses',
	},
];

export {
	NavTheme,
	tableHeader,
	widthArr,
	ruels,
	sexeNom,
	typeDeSang,
	ouiOuNon,
	typeAccident,
	TypeDeBlessure,
};
