import { useState } from 'react';

type TodoItemProps = {
	todo: { id: number; text: string };
	deleteTodo: (id: number) => void;
	editTodo: (id: number, newText: string) => void;
};

const TodoItem = ({
	todo,
	deleteTodo,
	editTodo,
}: TodoItemProps): JSX.Element => {
	const [isEditing, setIsEditing] = useState(false);
	const [newText, setNewText] = useState(todo.text);

	const handleEdit = () => {
		setIsEditing(true);
	};

	const handleSave = () => {
		editTodo(todo.id, newText);
		setIsEditing(false);
	};

	return (
		<li>
			{isEditing ? (
				<>
					<input
						type='text'
						value={newText}
						onChange={(e) => setNewText(e.target.value)}
					/>
					<button onClick={handleSave}>Save</button>
				</>
			) : (
				<>
					<span>{todo.text}</span>
					<button onClick={handleEdit}>Edit</button>
					<button onClick={() => deleteTodo(todo.id)}>Delete</button>
				</>
			)}
		</li>
	);
};

export default TodoItem;
