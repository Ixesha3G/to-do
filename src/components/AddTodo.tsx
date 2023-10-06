import { useState } from 'react';

type AddTodorops = {
	addTodo: (item: string) => void;
};

const AddTodo = ({ addTodo }: AddTodorops): JSX.Element => {
	const [item, setItem] = useState('');

	return (
		<>
			<div>
				<input
					type='text'
					placeholder='Enter todo item'
					value={item}
					onChange={(e) => setItem(e.target.value)}
				/>
				<button
					onClick={() => {
						addTodo(item);
						setItem('');
					}}
				>
					Add
				</button>
			</div>
		</>
	);
};

export default AddTodo;
