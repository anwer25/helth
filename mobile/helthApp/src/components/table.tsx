import React from 'react';
import {View} from 'react-native';
import {Row, Rows, Table} from 'react-native-table-component';
import styles from '../ressources/styles';
import {table} from '../ressources/utils/types';

// TODO: add style to table
const TableView: React.FC<table> = function ({header, data}): JSX.Element {
	return (
		<View style={styles.container}>
			<Table borderStyle={{borderWidth: 2, borderColor: '#000'}}>
				<Row data={header} />
				<Rows data={data} />
			</Table>
		</View>
	);
};

export default TableView;
