import { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
	const [todos, setTodos] = useState<{ id: number; text: string }[]>([]);

	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
		setTodos(storedTodos);
	}, []);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const addTodo = (item: string) => {
		if (item.trim() !== '') {
			const newTodo = { id: Date.now(), text: item };
			setTodos([...todos, newTodo]);
		}
	};

	return (
		<>
			<h1>Todo List</h1>
			<AddTodo addTodo={addTodo} />
			<TodoList todos={todos} setTodos={setTodos} />
		</>
	);
}

export default App;
