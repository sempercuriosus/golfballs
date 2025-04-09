import './App.css';
import Dashboard from './components/dashboard';
import BallList from './components/ball-list';

function App() {
  return (
    <>
      <h4>Dashboard</h4>

      <Dashboard />

      <h4>List Of Golf Balls</h4>

      <BallList />
    </>
  );
}

export default App;

