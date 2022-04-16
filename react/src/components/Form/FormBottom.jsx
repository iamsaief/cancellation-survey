import React from 'react';

function FormBottom({ handleCountDecrease }) {
	return (
		<div className="cs-ui-elements-wrapper">
			{/* Alert */}
			<div className="cs-alert cs-alert--danger cs-my-30">
				<span className="cs-alert__icon"></span>
				<div className="cs-alert__content">
					Are you absolutely sure you want to cancel? If you do you'll lose access to so many cool things. And you'll
					lose the chance to stay on this plan at the same cost ongoing (regardless of future price increases).
				</div>
			</div>
			{/* Buttons */}
			<div className="cs-button-group cs-button-group--between">
				<button
					className="cs-button cs-button--outline cs-button--sm cs-button--has-icon"
					type="button"
					onClick={handleCountDecrease}
				>
					<span className="cs-button__icon">
						<svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M.268 5.546 5.207.607A.338.338 0 0 1 5.32.531a.48.48 0 0 1 .152-.025c.05 0 .097.008.14.025.05.017.093.043.127.076l.8.8c.033.034.059.076.076.127a.266.266 0 0 1 .038.14c0 .06-.013.114-.038.165a.338.338 0 0 1-.076.114l-2.92 2.92h7.896a.33.33 0 0 1 .241.102.29.29 0 0 1 .102.228v1.219a.33.33 0 0 1-.102.241.354.354 0 0 1-.24.089H3.62l2.92 2.933a.268.268 0 0 1 .088.127.373.373 0 0 1 .026.14c0 .05-.009.1-.026.152a.268.268 0 0 1-.088.127l-.8.787a.32.32 0 0 1-.127.076.373.373 0 0 1-.14.025.48.48 0 0 1-.152-.025.34.34 0 0 1-.114-.076L.268 6.079a.59.59 0 0 1-.089-.114.48.48 0 0 1-.025-.152c0-.051.008-.098.025-.14a.483.483 0 0 1 .09-.127Z"
								fill="#000"
							/>
						</svg>
					</span>
					<span className="cs-button__text">Back</span>
				</button>
				<button
					className="cs-button cs-button--danger cs-button--sm"
					type="button"
					onClick={() => console.log('submitted')}
				>
					Cancel Membership
				</button>
			</div>
		</div>
	);
}

export default FormBottom;
