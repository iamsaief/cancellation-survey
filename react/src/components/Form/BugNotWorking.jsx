import React from 'react';
import BugSelectProduct from './BugSelectProduct';

const options = [
	{ value: 'Product #1', label: 'Product #1' },
	{ value: 'Product #2', label: 'Product #2' },
	{ value: 'Product #3', label: 'Product #3' },
];

const bugType = {
	name: 'bug-type',
	type: 'radio',
	elements: [
		{
			id: 'bug-type-radio1',
			label: 'One Major Problem',
		},
		{
			id: 'bug-type-radio2',
			label: 'Various Things',
		},
	],
};

const handleSelectChange = (value) => {
	console.log(value);
};

const handleBugTypeChange = (e) => {
	console.log(e.target.value);
};

export function BugNotWorking() {
	return (
		<>
			<div className="cs-form-group">
				<label className="cs-form-label cs-form-label--has-tooltip">
					<span>Which product(s) did you have an issue with?</span>
					<span className="cs-tooltip">
						<span className="cs-tooltip__icon"></span>
					</span>
				</label>
				<div className="cs-react-select">
					<BugSelectProduct options={options} onChange={handleSelectChange} />
				</div>
			</div>
			<hr className="cs-hr" />

			<div className="cs-form-group">
				<div className="cs-form-label">What was it?</div>
				<div className="cs-radio-select">
					{bugType.elements.map((bugObj) => {
						const { name, type } = bugType;
						const { id, label } = bugObj;

						if (type === 'radio') {
							return (
								<label htmlFor={id} className="cs-radio-label" key={id}>
									<input type="radio" name={name} id={id} onChange={handleBugTypeChange} value={label} />
									<div className="cs-radio__custom-input cs-radio__custom-input--select">
										<span className="cs-radio__text">{label}</span>
									</div>
								</label>
							);
						}
						return null;
					})}
				</div>
			</div>
			<hr className="cs-hr" />
			<div className="cs-form-group">
				<label className="cs-form-label cs-form-label--has-tooltip">
					<span>What problem(s) did you encounter?</span>
					<span className="cs-tooltip">
						<span className="cs-tooltip__icon"></span>
					</span>
				</label>
				<textarea className="cs-textarea cs-form-control" placeholder=""></textarea>
			</div>
			<hr className="cs-hr" />
		</>
	);
}
