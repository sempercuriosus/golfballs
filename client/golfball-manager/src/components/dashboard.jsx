import BallCount from './ball-count';
import BallList from './top-list';
import BallAverage from './ball-average';

function Dashboard() {
  return (
    <div id='dashboard'>
      <BallCount />
      <BallList />
      <BallAverage />
    </div>
  );
}

export default Dashboard;

