import React, {useState, useEffect, createContext} from 'react';
import {FlatList} from 'react-native';
import {firebase} from '@react-native-firebase/firestore';

const SATAE = createContext([]);

const useListData = ({collection}): React.FC => {
	const [state, setState] = useState(true);
	useEffect(() => {
		(async function getData() {
			try {
				const firebaseStore = firebase.firestore();
				const usersData = await firebaseStore
					.collection(collection)
					.get()
					.then(querySnapShot => {
						querySnapShot.forEach(snap => {
							const data = snap.data();
							console.table(data);
						});
					});
			} catch (e) {
				console.error(e);
			}
		})();
	}, []);
};
