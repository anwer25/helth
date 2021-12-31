import React from 'react';

export interface table {
	header: Array<any>;
	data: Array<any>;
	widthArr: Array<any>;
}

export interface CaseProp {
	value: string;
	onChange: (val: React.SetStateAction<string>) => void;
	value1: string;
	onChange1: (val: React.SetStateAction<string>) => void;
	value2: string;
	onChange2: (val: React.SetStateAction<string>) => void;
	value3: string;
	onChange3: (val: React.SetStateAction<string>) => void;
	selectedValues: string[];
	onMultiSelect: (item: string) => void;
	value4: string;
	onChange4: (val: React.SetStateAction<string>) => void;
}
