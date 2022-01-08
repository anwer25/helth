// eslint-disable-next-line import/no-unresolved
import {
	Context,
	ServerlessEventObject,
	ServerlessCallback,
	// eslint-disable-next-line import/no-unresolved
} from '@twilio-labs/serverless-runtime-types/types';
import '@twilio-labs/serverless-runtime-types';
// eslint-disable-next-line import/no-unresolved
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

	public async addCaller(data: object) {
		const result = await this.client.validationRequests
			.create({
				...data,
			})
			// eslint-disable-next-line camelcase
			.then((validation_request: any) => validation_request)
			.catch((e: any) => `error at add number : ${e}`);
		return result;
	}
}
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
			callBack(null, e);
		})
		.catch((e) => {
			callBack(e, e);
		});
};
