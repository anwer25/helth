"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
require("@twilio-labs/serverless-runtime-types");
var handler = function (context, event, callback) {
    var twiml = new Twilio.twiml.MessagingResponse();
    twiml.message("Hrllo");
    callback(null, twiml);
};
exports.handler = handler;
//# sourceMappingURL=hello-world.js.map