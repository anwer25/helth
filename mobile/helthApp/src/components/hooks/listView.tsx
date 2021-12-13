import React, {useState, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {firebase} from '@react-native-firebase/firestore';
import Chargement from '../chargement';

const UseListData: React.FC = function ({collection}): JSX.Element {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	useEffect(() => {
		// TODO: fix side effect here
		setData([]);
		const sync = (async function getData() {
			try {
				const firebaseStore = firebase.firestore();
				const usersData = await firebaseStore
					.collection(collection)
					.get()
					.then(querySnapShot => {
						querySnapShot.forEach(snap => {
							const data = snap.data();
							setData(prevData => [...prevData, data]);
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
			<View>
				<FlatList
					data={data}
					renderItem={items => {
						return (
							<>
								<Text>{items.item.Name}</Text>
								<Text>{items.item.UID}</Text>
								<Text>{items.item.email}</Text>
								<Text>{items.item.ruels}</Text>
							</>
						);
					}}
				/>
			</View>
		);
	}
};

export default UseListData;
