import React from 'react';

export function Form({ count, handleCountDecrease }) {
	return (
		<>
			{/* Design ui elements: input fields  */}
			<div className="cs-ui-wrapper cs-ui-wrapper--form">
				<div className="cs-ui-wrapper--form-top-bar">
					<button
						className="cs-button cs-button--outline cs-button--sm cs-button--has-icon cs-button--is-iconic"
						type="button"
						onClick={handleCountDecrease}
					>
						<span className="cs-button__icon">
							<svg width="5" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="m4.157 1.151.24.242c.052.05.09.11.115.177a.61.61 0 0 1 0 .419.387.387 0 0 1-.114.165L2.24 4.313 4.398 6.47c.05.042.089.097.114.165a.61.61 0 0 1 .038.216.61.61 0 0 1-.038.215.527.527 0 0 1-.114.165l-.241.242a.678.678 0 0 1-.178.127.61.61 0 0 1-.419 0 .678.678 0 0 1-.178-.127l-2.78-2.78a1.142 1.142 0 0 1-.114-.166.61.61 0 0 1 0-.419.916.916 0 0 1 .114-.177l2.78-2.78c.051-.051.11-.09.178-.115a.45.45 0 0 1 .419 0 .493.493 0 0 1 .178.114Z"
									fill="#000"
								/>
							</svg>
						</span>
					</button>
					<span>Cancellation Survey</span>
				</div>
				<hr className="cs-hr" />
			</div>
			<section className="cs-ui-wrapper cs-p-30 cs-mb-10">
				<div className="cs-cancel-form-header">
					<h3>We're sad to see you go... </h3>
					<p>Can you tell us why you want to cancel your membership?</p>
				</div>
				<div className="cs-ui-elements-wrapper">
					<div className="cs-input-radio">
						<div className="cs-form-group">
							<label className="cs-radio-label" for="radio-item-1">
								<input type="radio" name="radio-input-bug" id="radio-item-1" />
								<div className="cs-radio__custom-input">
									<span className="cs-radio__check-icon"></span>
									<span className="cs-radio__text">I didn't realize it was a recurring membership</span>
								</div>
							</label>
						</div>
						<div className="cs-form-group">
							<label className="cs-radio-label" for="radio-item-2">
								<input type="radio" name="radio-input-bug" id="radio-item-2" checked />
								<div className="cs-radio__custom-input">
									<span className="cs-radio__check-icon"></span>
									<span className="cs-radio__text">Found a better solution</span>
								</div>
							</label>
						</div>
					</div>
					<hr className="cs-hr" />
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
					<div className="cs-button-group cs-button-group--between">
						<button className="cs-button cs-button--outline cs-button--sm cs-button--has-icon" type="button">
							<span className="cs-button__icon">
								<svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M.268 5.546 5.207.607A.338.338 0 0 1 5.32.531a.48.48 0 0 1 .152-.025c.05 0 .097.008.14.025.05.017.093.043.127.076l.8.8c.033.034.059.076.076.127a.266.266 0 0 1 .038.14c0 .06-.013.114-.038.165a.338.338 0 0 1-.076.114l-2.92 2.92h7.896a.33.33 0 0 1 .241.102.29.29 0 0 1 .102.228v1.219a.33.33 0 0 1-.102.241.354.354 0 0 1-.24.089H3.62l2.92 2.933a.268.268 0 0 1 .088.127.373.373 0 0 1 .026.14c0 .05-.009.1-.026.152a.268.268 0 0 1-.088.127l-.8.787a.32.32 0 0 1-.127.076.373.373 0 0 1-.14.025.48.48 0 0 1-.152-.025.34.34 0 0 1-.114-.076L.268 6.079a.59.59 0 0 1-.089-.114.48.48 0 0 1-.025-.152c0-.051.008-.098.025-.14a.483.483 0 0 1 .09-.127Z"
										fill="#000"
									/>
								</svg>
							</span>
							<span className="cs-bttuon__text">Back</span>
						</button>
						<button className="cs-button cs-button--danger cs-button--sm" type="button" onClick={handleCountDecrease}>
							Cancel Membership
						</button>
					</div>
				</div>
			</section>
		</>
	);
}
