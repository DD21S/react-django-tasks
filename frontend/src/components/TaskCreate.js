import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form';
 
function TaskUpdate() {
	const navigate = useNavigate();

	const [ isSubmiting, setIsSubmiting ] = useState(false);

	const handleSubmit = (e, name, description, importance) => {
		e.preventDefault();

		setIsSubmiting(true);

		const task = JSON.stringify({ name, description, importance });

		fetch('http://localhost:8000/api/tasks/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: task
		}).then(response => response.json())
		.then(task => {
			setIsSubmiting(false);
			setTimeout(() => {
				navigate('/tasks/' + task.id);
			}, 500);
		});
	}

	return (
		<Form 
			title="Create task"
			buttonTitle="Create"
			isSubmiting={ isSubmiting }
			messageSubmiting="Creating task..."
			handleSubmit={ handleSubmit } 
		/>
	);
}

export default TaskUpdate;