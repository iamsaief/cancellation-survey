import { useState } from 'react';
import { CancelModal } from '../CancelModal';
import { Form } from '../Form';

export function App() {
	const [count, setCount] = useState(1);

	const handleCountIncrease = () => {
		setCount(count + 1);
	};

	const handleCountDecrease = () => {
		setCount(count - 1);
	};

	return (
		<div className="cs-p-16">
			{count === 1 && <CancelModal handleCountIncrease={handleCountIncrease} />}
			{count === 2 && <Form handleCountDecrease={handleCountDecrease} />}
		</div>
	);
}
