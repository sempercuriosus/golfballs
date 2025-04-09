function DeleteButton({ Id: id }) {
  const handleClick = () => {
    console.log('Delete', id);
  };

  return (
    <>
      <button
        className='DeleteButton'
        onClick={() => handleClick()}>
        🗑️
      </button>
    </>
  );
}

export default DeleteButton;

