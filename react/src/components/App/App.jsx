import { useState } from 'react';
import { CancelModal } from '../CancelModal';
import { Form } from '../Form';

export function App() {
	const [count, setCount] = useState(1);

	const handleCountIncrease = () => {
		console.log(count);
		setCount(count + 1);
	};

	const handleCountDecrease = () => {
		console.log(count);
		setCount(count - 1);
	};

	return (
		<div className="cs-p-16">
			{/* <CancelModal count={count} handleCountIncrease={handleCountIncrease} />
			<Form /> */}
			{count === 1 && <CancelModal count={count} handleCountIncrease={handleCountIncrease} />}
			{count === 2 && <Form count={count} handleCountDecrease={handleCountDecrease} />}
		</div>
	);
}
