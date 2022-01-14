import React, {useContext} from 'react';
import {Text, View, Pressable} from 'react-native';
import {API} from '../ressources/utils/types';
import {authContext} from './hooks/authProvider';
import styles from '../ressources/styles';

const Button: React.FC = function Object<String>({
	nom,
	prenom,
	cin,
	sexe,
	sang,
	donneur,
	accident,
	blessure,
}): JSX.Element {
	const {setLoading} = useContext(authContext);
	function serverAPI(data: API): void {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		(async function sender(): Promise<void> {
			console.log(`from sender: ${data}`);
			setLoading(true);
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const _sender = await fetch(
				'https://twilio-2117-dev.twil.io/index',
				{
					method: 'POST',
					body: JSON.stringify(data),
					headers: {
						'Content-type': 'application/json;charset=UTF-8',
					},
				},
			)
				.then(Response => {
					console.log(Response.json());
					setLoading(false);
				})
				.then(json => {
					console.log(json);
				})
				.catch(e => {
					console.log(e);
					setLoading(false);
				});
		})();
	}

	return (
		<View>
			<Pressable
				style={styles.buttonA}
				onPress={() => {
					console.log(blessure);
					serverAPI({
						nom,
						prenom,
						cin,
						sexe: sexe.item,
						donneur: donneur.item,
						sang: sang.item,
						accident: accident.item,
						blessure: blessure.item,
					});
				}}>
				<Text>Envoyer</Text>
			</Pressable>
		</View>
	);
};

export default Button;
