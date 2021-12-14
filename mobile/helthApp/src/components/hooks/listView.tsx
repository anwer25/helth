import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {firebase} from '@react-native-firebase/firestore';
import Chargement from '../chargement';

import styles from '../../ressources/styles';
import TableView from '../table';

const UseListData: React.FC = function ({collection}): JSX.Element {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const tableHeader = ['Nom', 'UID', 'Email', 'Autorisations'];
	useEffect(() => {
		// TODO: fix side effect here
		const sync = (async function getData() {
			try {
				const firebaseStore = firebase.firestore();
				const usersData = await firebaseStore
					.collection(collection)
					.get()
					.then(querySnapShot => {
						querySnapShot.forEach(snap => {
							const dataArray = Object.values(snap.data());
							setData(prevData => [...prevData, dataArray]);
						});
					});
				setLoading(false);
			} catch (e) {
				console.error(e);
			}
		})();
	}, []);
	if (loading) {
		return <Chargement />;
	} else {
		return (
			<View style={styles.container}>
				<TableView header={tableHeader} data={data} />
			</View>
		);
	}
};

export default UseListData;
