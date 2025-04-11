import BallList from './ball-list';
import CreateButton from './ui/create-ball-button';
import CreateBallForm from './create-ball-form';

function BallsDisplay() {
  return (
    <>
      <h4>List Of Golf Balls</h4>
      <CreateButton />
      <CreateBallForm />
      <BallList />
    </>
  );
}

export default BallsDisplay;

