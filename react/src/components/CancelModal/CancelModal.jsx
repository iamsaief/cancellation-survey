import React from 'react';
import iconClose from '../../img/icon-close.svg';
import iconTag from '../../img/icon-tag.svg';

export function CancelModal({ count, handleCountIncrease }) {
	return (
		<>
			{/* Cancellation Survey modal */}
			<div className="cs-modal">
				<div className="cs-modal__close-icon">
					<img src={iconClose} alt="cs-modal icon tag" />
				</div>
				<div className="cs-modal__icon">
					<img src={iconTag} alt="cs-modal icon tag" />
				</div>
				<div className="cs-modal__content">
					<h3 className="cs-modal__title cs-fs-24 cs-fw-7 cs-primary-black">
						Before You Go... <br />
						Would 50% Off For 6 Months Help?
					</h3>
					<p className="cs-modal__text">
						We know things REALLY suck in the world right now - and many businesses and freelancers are struggling to
						stay afloat during this COVID-19 crisis.
					</p>
					<br />
					<p className="cs-modal__text--bold cs-fw-7">
						So if you could use the extra cushion, grab 50% off for 6 months.
					</p>
					<p className="cs-modal__text cs-mb-40">We hope you're staying safe and healthy!</p>
					<div className="cs-button-group">
						<button className="cs-button cs-button--primary cs-button--lg" type="button">
							50 % OFF For 6 Months
						</button>
						<button className="cs-button cs-button--link cs-button--lg" type="button" onClick={handleCountIncrease}>
							No, thanks! I'll cancel
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
