import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Form from './Form';
 
function TaskUpdate() {
	const { id } = useParams();
	const navigate = useNavigate();

	const [ isSubmiting, setIsSubmiting ] = useState(false);

	const handleSubmit = (e, name, description, importance) => {
		e.preventDefault();

		setIsSubmiting(true);

		const task = JSON.stringify({ name, description, importance });

		fetch('http://localhost:8000/api/tasks/' + id + '/', {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: task
		}).then(() => {
			setIsSubmiting(false);
			setTimeout(() => {
				navigate('/tasks/' + id);
			}, 500);
		});
	}

	return (
		<Form 
			title="Update task"
			buttonTitle="Update"
			isSubmiting={ isSubmiting }
			messageSubmiting="Updating task..."
			handleSubmit={ handleSubmit } 
		/>
	);
}

export default TaskUpdate;