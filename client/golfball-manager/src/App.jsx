import './App.css';
import 'bulma/css/bulma.css';
import Dashboard from './components/dashboard';
import BallsDisplay from './components/balls-display';

function App() {
  return (
    <>
      <h4>Dashboard</h4>

      <Dashboard />
      <BallsDisplay />
    </>
  );
}

export default App;

