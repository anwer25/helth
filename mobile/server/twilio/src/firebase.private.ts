import * as admin from 'firebase-admin';

const firebaseConfig: string = require('../assets/config/helthapp-private.json');
require('dotenv').config();

class firebase {
	public readonly fireStore: any;

	public readonly db: any;

	constructor() {
		// @ts-ignore
		admin.initializeApp({
			credential: admin.credential.cert(firebaseConfig),
			databaseURL: process.env.databaseURL,
		});
		this.fireStore = admin.firestore();
	}

	public async getPhoneNumber() {
		const collection = this.fireStore.collection('users');
		const data = await collection
			.get()
			.then((querySnapShot: {docs: any[]}) =>
				querySnapShot.docs.map((doc) => doc.data()),
			)
			.catch((e: any) => e);
		return data;
	}

	public async history() {
		const collection = this.fireStore.collection('logs');
		const data = await collection
			.add({})
			.then((e: any) => e)
			.catch((e: Error) => e);

		return data;
	}
}
export default firebase;
