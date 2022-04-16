import React from 'react';

export function FormTopBar({ handleCountDecrease }) {
	return (
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
	);
}
