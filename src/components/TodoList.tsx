import TodoItem from './TodoItem';

type TodoListProps = {
	todos: { id: number; text: string }[];
	setTodos: (newState: { id: number; text: string }[]) => void;
};

const TodoList = ({ todos, setTodos }: TodoListProps): JSX.Element => {
	const editTodo = (id: number, newText: string) => {
		const updatedTodos = todos.map((todo) =>
			todo.id === id ? { ...todo, text: newText } : todo
		);
		setTodos(updatedTodos);
	};

	const deleteTodo = (id: number) => {
		const updatedTodos = todos.filter((todo) => todo.id !== id);
		setTodos(updatedTodos);
	};

	return (
		<div>
			{todos.length === 0 ? (
				<h3>No todos found</h3>
			) : (
				<ul>
					{todos.map((todo) => (
						<TodoItem
							key={todo.id}
							todo={todo}
							deleteTodo={deleteTodo}
							editTodo={editTodo}
						/>
					))}
				</ul>
			)}
		</div>
	);
};

export default TodoList;
