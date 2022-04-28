import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useFetch from './../UseFetch';
import TasksImportances from './../TasksImportances';

function TaskDetails() {
	const { id } = useParams();
	const { data: task, error, isPending } = useFetch('http://localhost:8000/api/tasks/' + id);

	const navigate = useNavigate();

	const [ isCompleted, setIsCompleted ] = useState(false);

	const handleIsComplete = () => {
		fetch('http://localhost:8000/api/tasks/' + id + '/', {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({'is_completed': true})
		}).then(() => {
			setIsCompleted(true);
		});
	}

	const handleUpdate = () => {
		navigate('/update/' + task.id);
	}

	const handleDelete = () => {
		fetch('http://localhost:8000/api/tasks/' + task.id + '/', {
			method: 'DELETE'
		}).then(() => {
			navigate('/');
		})
	}

	return (
		<div className="task-details">
			{ isPending && <div>Loading...</div> }
			{ error && <div>{ error }</div> }
			{ task && (
				<article>
					<h2>{ task.name }</h2>
					<p><strong>Importance:</strong> { TasksImportances[task.importance] }</p>
					<div>{ task.description }</div>
					{ isCompleted && <button onClick={ handleIsComplete }>Completed</button> }
					{ !isCompleted && <button disabled>Completed</button> }
					<button onClick={ handleUpdate }>Update</button>
					<button onClick={ handleDelete }>Delete</button>
				</article>
			) }
		</div>
	);
}

export default TaskDetails;