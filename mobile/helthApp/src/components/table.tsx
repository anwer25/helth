import React from 'react';
import {ScrollView, View} from 'react-native';
import {Row, Rows, Table} from 'react-native-table-component';
import styles from '../ressources/styles';
import {table} from '../ressources/utils/types';

// TODO: add style to table
const TableView: React.FC<table> = function ({
	header,
	data,
	widthArr,
}): JSX.Element {
	return (
		<View style={styles.container}>
			<ScrollView>
				<ScrollView>
					<Table borderStyle={{borderWidth: 1, borderColor: '#fff'}}>
						<Row
							data={header}
							widthArr={widthArr}
							style={styles.tableHead}
						/>
						<Rows
							data={data}
							widthArr={widthArr}
							style={styles.tableText}
						/>
					</Table>
				</ScrollView>
			</ScrollView>
		</View>
	);
};

export default TableView;
