// eslint-disable-next-line import/no-unresolved
import {
	Context,
	ServerlessEventObject,
	ServerlessCallback,
	// eslint-disable-next-line import/no-unresolved
} from '@twilio-labs/serverless-runtime-types/types';
import '@twilio-labs/serverless-runtime-types';
// eslint-disable-next-line import/no-unresolved
import MessageServer from './messageServer.private';

// eslint-disable-next-line import/prefer-default-export
export const handler = (
	context: Context,
	event: ServerlessEventObject,
	callBack: ServerlessCallback,
) => {
	// eslint-disable-next-line new-cap
	const message = new MessageServer();

	message
		.addCaller(event)
		.then((e) => {
			console.log(e);
		})
		.catch((e) => {
			console.log(e);
		});
	callBack(null, event);
};
