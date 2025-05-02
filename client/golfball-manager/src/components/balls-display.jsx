import BallList from './ball-list';
import CreateButton from './ui/create-ball-button';
import BallForm from './create-ball-form';

function BallsDisplay() {
  return (
    <>
      <h4>List Of Golf Balls</h4>
      <CreateButton />
      <BallForm />
      <BallList />
    </>
  );
}

export default BallsDisplay;

