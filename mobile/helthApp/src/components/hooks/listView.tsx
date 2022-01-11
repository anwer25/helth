import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {firebase} from '@react-native-firebase/firestore';
import Chargement from '../chargement';
import TableView from '../table';
import message from '../message';
import styles from '../../ressources/styles';
import {widthArr} from '../../ressources/utils/_varibales';

const UseListData: React.FC = function ({
	collection,
	tableHeader,
}): JSX.Element {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	useEffect(() => {
		// @ts-ignore
		const sync = (async function getData() {
			try {
				const firebaseStore = firebase.firestore();
				await firebaseStore
					.collection(collection)
					.get()
					.then(querySnapShot => {
						querySnapShot.forEach(snap => {
							const dataArray = Object.values(snap.data());
							// @ts-ignore
							setData(prevData => [...prevData, dataArray]);
						});
					});
				setLoading(false);
			} catch (e) {
				console.error(message(e, 'Erreur de chargement des données'));
			}
			return sync;
		})();
	}, []);
	if (loading) {
		return <Chargement />;
	} else {
		return (
			<View style={styles.container}>
				<TableView
					header={tableHeader}
					data={data}
					widthArr={widthArr}
				/>
			</View>
		);
	}
};

export default UseListData;
