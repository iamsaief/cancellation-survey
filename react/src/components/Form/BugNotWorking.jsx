import React from 'react';

export function BugNotWorking() {
	return (
		<>
			<div className="cs-form-group">
				<div className="cs-form-label">What was it?</div>
				<div className="cs-radio-select">
					<label for="radio-item-3" className="cs-radio-label">
						<input type="radio" name="radio-input-bug-type" id="radio-item-3" checked />
						<div className="cs-radio__custom-input cs-radio__custom-input--select">
							<span className="cs-radio__text">One Major Problem</span>
						</div>
					</label>
					<label for="radio-item-4" className="cs-radio-label">
						<input type="radio" name="radio-input-bug-type" id="radio-item-4" />
						<div className="cs-radio__custom-input cs-radio__custom-input--select">
							<span className="cs-radio__text">Various things</span>
						</div>
					</label>
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
