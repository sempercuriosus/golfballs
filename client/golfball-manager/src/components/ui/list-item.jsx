import EditButton from './edit-button';
import DeleteButton from './delete-button';

function ListItem({ BALL: ball }) {
  return (
    <>
      <tr>
        <td>
          {' '}
          <strong>{ball.manufacturer} </strong>
        </td>
        <td>{ball.number}</td>
        <td>
          {ball.color} {ball.color2}
        </td>
        <td>
          {ball.type} {ball.type2}
        </td>
        <td>{ball.cost || 0}</td>

        <td className='buttons are-small'>
          <EditButton Id={ball._id} />
          <DeleteButton Id={ball._id} />
        </td>
      </tr>
    </>
  );
}

export default ListItem;

