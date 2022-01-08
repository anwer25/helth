require('dotenv').config();

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

	public async messageSender(data: object, number: string) {
		const body = JSON.stringify(data);
		const x = body.replace('{', ' ').replace('}', ' ').replace('"', ' ');
		const result = await this.client.messages
			.create({
				from: '+14433907181',
				body: x,
				to: `+216${number}`,
			})
			.then((_result: any) => _result)
			.catch((e: any) => `error from message Sender ${e}`);
		return result;
	}
}

export default MessageServer;
