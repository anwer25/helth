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
				<ScrollView horizontal={true}>
					<Table borderStyle={{borderWidth: 1, borderColor: '#000'}}>
						<Row
							data={header}
							widthArr={widthArr}
							style={styles.textCenter}
						/>
						<Rows data={data} widthArr={widthArr} />
					</Table>
				</ScrollView>
			</ScrollView>
		</View>
	);
};

export default TableView;
