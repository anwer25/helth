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
		this.firebaseConfig = {
			type: 'service_account',
			project_id: 'helthapp-e8dcf',
			private_key_id: '7b3ffbd5ec2192757ba08984b2e622cd5113ea40',
			private_key:
				'-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCqIJPj0MPKhaxL\n+D/pnVvx0kxXAp8Wb2YVqRSJrAkMCPe3gdR7v1aXFEKNvF6tFT8PsL+Kl33c7/Dr\nfQrTG9qVqoJ88dnk97a63ZRXqll6B3UEGILr5RQQytGB2COCP5XktvvxwW30p1wx\n3J0og6LwcVX2c8/1OzqYVf6ueI8uhAAmjN8rLGYknpVbQvqPNZgcXsvZH9jfH3HZ\nDjCmLxqrz8D8/n2JuopmWdEOVxMgZjWc7aGBET9BllEmJnEY3WKZvrPd5+fNPNSS\nCrREO3toxJ3JVVdxznuJM9HlnXU6c7cRsMjDj9X97ASJxnXYNsWLBcTLsL1jAG3s\nu3hRuVjXAgMBAAECggEAG/ws56o1MtDHVV3aQZcRg1dpGF0Fh16+x6xfBQCIInMt\nMIIKTmrclxCNnBwS5NzcWTvlXipqWVgc5NfWWoC39autOFleUvROmjGNz9flTRYB\n8TEJBD3UDakXSokf2jKUeSGCkzOS305Sc59LONliibPTBK3rVPcvvdRThyaswuVO\nIgpVNKPo3ig1A+M67kioGGiXdnBvz6ukF/F9PDDW0TNocim2DxcGPZvsxSDXcB91\nggndTfeoHJJk2k7rSGUKZkh4aaJQ3aTEBcVg4JhyOMBapbejlbE70gwKvt1pnhbL\nn5smcz+r/j1NZ+MzAjOnFZFueZwt7Z6flpLcZePvRQKBgQDXOjZhVxmmLz3k+rvS\nGW6s7Af+XaWWBZlyCS5vPMI3WIc8IQSK9iB3c5mcHVMi7QXxTkEFOPnGIJ/0eGxV\n5iOjnKXwqrkTPeAuAKK99THY9OanObUDFhbHR10xscwBD+WPibvO0HFKPT5W2uhS\nAUESJEgvwn6QNVL43nonFRnR9QKBgQDKWyn5A7G7pZx0fGaO7R0G1AsmLNHF8K1v\nofVEA4Pf3ocinjUwpJo4c+qY6c4+5c9u7rek/RzfpjFBXYEr8aPwkFcp8utUpmek\nMUU6sAjkElN/zX2/UR56oSL84zTnpVPBrCbwFduQHLylsBaTgqTKFgB2oJ/QQ0kl\nkjpcObrkGwKBgC/Q3wQBNdGV7UpR6ihjPhNs3NnGNGOAGvca0xYjiYKCSIkzTK8S\nv2PKavYkDbRUtF1H5WojnlpGJUNK/caXupM+2h79zuBXfta5jW5mawyoXBYK3Awz\nfBwJ3sqLlacmwPmCwBbSeFjmAlOJjtOpM6u0I9V4gGXJcwWXZ8wHBBWBAoGAEb0W\nG9cgEHP/GBMDponQnpWd+JW7Od/URFHtPy4TtF88d2NpBD+ZqVM4AHmWc9sPaQkS\nHit2CYD3FmTM+v4uwdrVWT8LNBt2QGV1TSS7UsrseOqZmFjTFCrl90cvjxLmGbcu\nnqM74REz1E5wXDP6oCB3n+6Ks+YCFoIQDZ+d63sCgYATiw8wzLomxe0AlfLrnS4n\ngRCb+Fr6iqbRpgsjI8KVu9pNr5RM+NSmvlGyFgoppfcJM0q0N/8itpGi266SJVby\nsJ6+Jf3Ii8GAWtTpuLVES3UICBCPtMusKktnm/7+y8nOltowYjmnyuK738+LTMtm\nLQD4A7A5Alo0CaSU/e42eA==\n-----END PRIVATE KEY-----\n',
			client_email:
				'firebase-adminsdk-bwdmf@helthapp-e8dcf.iam.gserviceaccount.com',
			client_id: '100884589554240114389',
			auth_uri: 'https://accounts.google.com/o/oauth2/auth',
			token_uri: 'https://oauth2.googleapis.com/token',
			auth_provider_x509_cert_url:
				'https://www.googleapis.com/oauth2/v1/certs',
			client_x509_cert_url:
				'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-bwdmf%40helthapp-e8dcf.iam.gserviceaccount.com',
		};
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
		const collection = this.fireStore.collection('log');
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
		_.each(e, (element: any | object) => {
			if (typeof element.tel === 'undefined') {
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
				// eslint-disable-next-line no-prototype-builtins
				let blessure = event.hasOwnProperty('blessure')
					? // @ts-ignore
					  event.blessure
					: '';
				// eslint-disable-next-line no-prototype-builtins
				if (Array.isArray(blessure)) {
					blessure = blessure.toString();
				}

				const messageTemp = `Nom: ${Nom}\nPrénome: ${Prenome}\nCin: ${cin}\nSexe: ${sexe}\nDonneur: ${donneur}\nSang: ${sang}\nAccident: ${accident}\nBlessure: ${blessure}`;
				message
					.messageSender(messageTemp, element.tel)
					// eslint-disable-next-line no-lone-blocks
					.then((Result) => {
						console.log(Result);
						firebaseApp
							.history(event)
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
