import EditButton from './edit-button';
import DeleteButton from './delete-button';

function ListItem({ BALL: ball }) {
  return (
    <>
      <div
        id={ball._id}
        data-id={ball._id}
        className='ListItem'>
        <div>
          <p>
            <strong>{ball.manufacturer} </strong> - #
            {ball.number}{' '}
          </p>

          <p>
            {ball.color} {ball.color2} {ball.type} {ball.type2}{' '}
            {ball.cost}
          </p>
        </div>

        <div>
          <EditButton Id={ball._id} />
          <DeleteButton Id={ball._id} />
        </div>
      </div>
    </>
  );
}

export default ListItem;

