import EditButton from './edit-button';
import DeleteButton from './delete-button';

function ListItem({ BALL: ball }) {
  return (
    <>
      <div
        id={'ListItem-' + ball._id}
        className='ListItem'>
        <p>
          <strong>{ball.manufacturer} </strong> - #{ball.number}{' '}
          <EditButton />
          <DeleteButton />
        </p>

        <p>
          {ball.color} {ball.color2} {ball.type} {ball.type2}{' '}
          {ball.cost}
        </p>
      </div>
    </>
  );
}

export default ListItem;

