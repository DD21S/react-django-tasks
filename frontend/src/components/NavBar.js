import { Link } from 'react-router-dom';

function NavBar() {
	return (
		<nav className="navbar">
			<h1>DD21S Tasks</h1>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/create" style={{
					color: "white",
					backgroundColor: "#f1356d",
					borderRadius: "8px"
				}}>New Task</Link>
			</div>
		</nav>
	);
}

export default NavBar;