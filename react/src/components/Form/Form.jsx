import React, { useState } from 'react';
import { BugBetterSolution } from './BugBetterSolution';
import { BugNotWorking } from './BugNotWorking';
import FormBottom from './FormBottom';
import { FormTopBar } from './FormTopBar';

export function Form({ handleCountDecrease }) {
	const [formElements, setFormElements] = useState({
		radioElements: {
			selectedId: '',
			name: 'feedback',
			type: 'radio',
			elements: [
				{
					id: 'radio1',
					label: "I didn't realize it was a recurring membership",
				},
				{
					id: 'radio2',
					label: 'Found a better solution',
					Component: <BugBetterSolution />,
				},
				{
					id: 'radio3',
					label: "It's too expensive",
				},
				{
					id: 'radio4',
					label: 'Bugs, things not working properly',
					Component: <BugNotWorking />,
				},
				{
					id: 'radio5',
					label: 'I just want to pay for a single plugin',
				},
				{
					id: 'radio6',
					label: 'Not using WordPress anymore',
				},
				{
					id: 'radio7',
					label: 'Other',
				},
			],
		},
	});

	const handleRadioChange = (e) => {
		const newFormElements = { ...formElements };
		newFormElements.radioElements.selectedId = e.target.id;
		setFormElements(newFormElements);
	};

	return (
		<>
			<FormTopBar handleCountDecrease={handleCountDecrease} />

			<section className="cs-ui-wrapper cs-p-30 cs-mb-10">
				<div className="cs-cancel-form-header cs-mt-24 cs-mb-34">
					<h3 className="cs-fs-24 cs-fw-7">We're sad to see you go... </h3>
					<p>Can you tell us why you want to cancel your membership?</p>
				</div>

				<div className="cs-ui-elements-wrapper">
					{formElements.radioElements.elements.map((radioObj) => {
						const { radioElements } = formElements;
						const { id, label } = radioObj;
						const { name, type } = radioElements;
						if (type === 'radio') {
							return (
								<>
									<div className="cs-form-group" key={id}>
										<label className="cs-radio-label" htmlFor={id}>
											<input
												type="radio"
												name={name}
												id={id}
												onChange={handleRadioChange}
												checked={formElements.radioElements.selectedId === id}
											/>
											<div className="cs-radio__custom-input">
												<span className="cs-radio__check-icon"></span>
												<span className="cs-radio__text">{label}</span>
											</div>
										</label>
									</div>
									{radioObj?.Component && radioElements.selectedId === id ? radioObj.Component : null}
								</>
							);
						}
						return null;
					})}
				</div>

				<FormBottom handleCountDecrease={handleCountDecrease} />
			</section>
		</>
	);
}
