// eslint-disable-next-line import/no-unresolved,max-classes-per-file
import {
	Context,
	ServerlessEventObject,
	ServerlessCallback,
	// eslint-disable-next-line import/no-unresolved
} from '@twilio-labs/serverless-runtime-types/types';
import '@twilio-labs/serverless-runtime-types';
// eslint-disable-next-line import/no-unresolved
import * as _ from 'lodash';

import * as admin from 'firebase-admin';

require('dotenv').config();

class Firebase {
	public readonly fireStore: any;

	public readonly db: any;

	private readonly firebaseConfig: object;

	constructor() {
		// @ts-ignore
		this.firebaseConfig = {};
		try {
			admin.initializeApp({
				credential: admin.credential.cert(this.firebaseConfig),
				databaseURL: process.env.databaseURL,
			});
		} catch (error: any) {
			console.error(error);
		} finally {
			this.fireStore = admin.firestore();
		}
	}

	public async getPhoneNumber() {
		const collection = this.fireStore.collection('users');
		const data = await collection
			.get()
			.then((querySnapShot: {docs: any[]}) =>
				querySnapShot.docs.map((doc) => doc.data()),
			)
			.catch((e: any) => `Error from getPhoneNumber: ${e}`);
		return data;
	}

	public async history(log: object) {
		const collection = this.fireStore.collection('patient');
		const data = await collection
			.add({
				...log,
			})
			.then((e: any) => e)
			.catch((e: Error) => `Error from history: ${e}`);

		return data;
	}
}

class MessageServer {
	public readonly accountSID;

	public readonly authToken;

	public readonly client;

	constructor() {
		this.accountSID = process.env.TWILIO_ACCOUNT_SID;
		this.authToken = process.env.TWILIO_AUTH_TOKEN;
		// eslint-disable-next-line global-require
		this.client = require('twilio')(this.accountSID, this.authToken);
	}

	public async messageSender(data: string, number: string) {
		const result = await this.client.messages
			.create({
				from: '+14433907181',
				body: data,
				to: `+216${number}`,
			})
			.then((_result: any) => _result)
			.catch((e: any) => `error from message Sender ${e}`);
		return result;
	}
}

// eslint-disable-next-line import/prefer-default-export
export const handler = (
	context: Context,
	event: ServerlessEventObject,
	callBack: ServerlessCallback,
) => {
	const message = new MessageServer();
	const firebaseApp = new Firebase();
	firebaseApp.getPhoneNumber().then((e) => {
		_.each(e, (element: object) => {
			// @ts-ignore
			if (typeof element.tel === 'undefined' || element.tel === 'Vide') {
				console.log('pass');
			} else {
				// @ts-ignore
				// eslint-disable-next-line no-prototype-builtins
				const Nom = event.hasOwnProperty('nom') ? event.nom : '';
				// eslint-disable-next-line no-prototype-builtins
				const Prenome = event.hasOwnProperty('prenom')
					? // @ts-ignore
					  event.prenom
					: '';
				// @ts-ignore
				// eslint-disable-next-line no-prototype-builtins
				const cin = event.hasOwnProperty('cin') ? event.cin : '';
				// @ts-ignore
				// eslint-disable-next-line no-prototype-builtins
				const sexe = event.hasOwnProperty('sexe') ? event.sexe : '';
				// eslint-disable-next-line no-prototype-builtins
				const donneur = event.hasOwnProperty('donneur')
					? // @ts-ignore
					  event.donneur
					: '';
				// @ts-ignore
				// eslint-disable-next-line no-prototype-builtins
				const sang = event.hasOwnProperty('sang') ? event.sang : '';
				// eslint-disable-next-line no-prototype-builtins
				const accident = event.hasOwnProperty('accident')
					? // @ts-ignore
					  event.accident
					: '';

				const messageTemp = `Nom: ${Nom}\nPrénome: ${Prenome}\nCin: ${cin}\nSexe: ${sexe}\nDonneur: ${donneur}\nSang: ${sang}\nAccident: ${accident}`;
				// @ts-ignore
				message // @ts-ignore
					.messageSender(messageTemp, element.tel)
					// eslint-disable-next-line no-lone-blocks
					.then((Result) => {
						console.log(Result);
						firebaseApp
							.history({
								Nom,
								Prenome,
								cin,
							})
							.then((result) => console.log(result))
							.catch((error) => console.error(error));

						callBack(null, Result);
					})
					.catch((error) => {
						callBack(error, e);
					});
			}
		});
	});
};
