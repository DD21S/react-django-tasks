import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import TaskDetails from './components/TaskDetails';
import TaskCreate from './components/TaskCreate';
import TaskUpdate from './components/TaskUpdate';

function App() {
    return (
        <Router> 
            <div className="app">
                <NavBar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={ <Home /> } />
                        <Route path="/tasks/:id/" element={ <TaskDetails /> } />
                        <Route path="/create/" element={ <TaskCreate /> } />
                        <Route path="/update/:id/" element={ <TaskUpdate /> } />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
