import useFetch from './../UseFetch';
import TasksList from './TasksList';

function Home() {
	const { data: tasks, isPending, error } = useFetch('http://localhost:8000/api/tasks');

	return (
		<div className="home">
			{ error && <div>{ error }</div> }
			{ isPending && <div>Loading...</div> }
			{ tasks && <TasksList tasks={ tasks } title="All tasks!" /> }
		</div>
	);
}

export default Home;