// eslint-disable-next-line import/no-unresolved
import {
	Context,
	ServerlessEventObject,
	ServerlessCallback,
	// eslint-disable-next-line import/no-unresolved
} from '@twilio-labs/serverless-runtime-types/types';
import '@twilio-labs/serverless-runtime-types';
// eslint-disable-next-line import/no-unresolved
import * as _ from 'lodash';
import firebase from './firebase.private';
import MessageServer from './messageServer.private';

// eslint-disable-next-line import/prefer-default-export
export const handler = (
	context: Context,
	event: ServerlessEventObject,
	callBack: ServerlessCallback,
) => {
	// eslint-disable-next-line new-cap
	const firebaseApp = new firebase();
	firebaseApp.getPhoneNumber().then((e) => {
		_.each(e, (element: object) => {
			console.log(element);
		});
	});
	const message = new MessageServer();
	message.messageSender(event);
	callBack(null, event);
};
