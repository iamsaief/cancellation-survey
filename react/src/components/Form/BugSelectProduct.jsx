import React from 'react';
import Select from 'react-select';

export default ({ options, onChange }) => (
	<Select
		isMulti
		name="bug products"
		options={options}
		className="basic-multi-select"
		classNamePrefix="select"
		placeholder="Select Product(s)"
		onChange={onChange}
	/>
);
