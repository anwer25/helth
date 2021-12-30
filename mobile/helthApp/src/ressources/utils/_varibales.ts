const sexeNom: Array<string> = ['homme', 'femme'];
const typeDeSang: Array<string> = [
	'O-',
	'O+',
	'B+',
	'A-',
	'A+',
	'AB-',
	'AB+',
	'Autre',
];
const _donneur: Array<string> = ['Non', 'Oui'];
const _réveillé: Array<string> = ['Non', 'Oui'];
const typeAccident: Array<string> = [
	'accidents de la route',
	'accidents domestiques',
	'accidents du travail',
	'Autre',
];

const TypeDeBlessure = [
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

export {sexeNom, typeDeSang, _donneur, _réveillé, typeAccident, TypeDeBlessure};
