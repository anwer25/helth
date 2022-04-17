import React, {useContext} from 'react';
import {Text, View, Pressable} from 'react-native';
import {API} from '../ressources/utils/types';
import {authContext} from './hooks/authProvider';
import styles from '../ressources/styles';

const Button: React.FC = function object<String>({
	nom,
	prenom,
	cin,
	sexe,
	sang,
	donneur,
	accident,
}): JSX.Element {
	const {setLoading} = useContext(authContext);
	function serverAPI(data: API): void {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		(async function sender(): Promise<void> {
			setLoading(true);
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const _sender = await fetch(
				"",
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
					serverAPI({
						nom,
						prenom,
						cin,
						sexe: sexe.item,
						donneur: donneur.item,
						sang: sang.item,
						accident: accident.item,
					});
				}}>
				<Text style={styles.textCenter}>Envoyer</Text>
			</Pressable>
		</View>
	);
};

export default Button;
