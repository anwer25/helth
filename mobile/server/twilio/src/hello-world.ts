import {
  Context,
  ServerlessCallback,
  ServerlessFunctionSignature,
} from "@twilio-labs/serverless-runtime-types/types";
import "@twilio-labs/serverless-runtime-types";

type requestParameters = {};

export const handler = function (
  context: Context,
  event: ServerlessFunctionSignature,
  callback: ServerlessCallback
) {
  const twiml = new Twilio.twiml.MessagingResponse();
  twiml.message("Hrllo");
  callback(null, twiml);
};
