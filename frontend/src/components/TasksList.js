import { Link } from 'react-router-dom';
import TasksImportances from './../TasksImportances';

function TasksList({ tasks, title }) {
	return (
		<div className="tasks-list">
			<h2>{ title }</h2>
			{ tasks.map(task => (
				<div className="task-preview" key={ task.id }>
					<Link to={`/tasks/${task.id}`}>
						<h2>{ task.name }</h2>
						<p>{ task.description }</p>
						<p>{ TasksImportances[task.importance] }</p>
					</Link>
				</div>
			)) }
		</div>
	);
}

export default TasksList;