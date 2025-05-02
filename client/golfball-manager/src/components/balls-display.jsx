import BallList from './ball-list';
import CreateButton from './ui/create-ball-button';
import BallForm from './create-ball-form';

function BallsDisplay() {
  return (
    <div id='ball-list-main'>
      <h4 className='title is-5'>List Of Golf Balls</h4>
      <CreateButton />
      <BallForm />
      <BallList />
    </div>
  );
}

export default BallsDisplay;

