// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import {Alert} from 'react-native';

const Message: (message: string, title: string) => void = function (
	message,
	title,
) {
	Alert.alert(`${title}`, `${message}`, [{text: 'Ok'}]);
};
export default Message;
