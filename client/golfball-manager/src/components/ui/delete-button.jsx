function DeleteButton({ Id: id }) {
  const handleClick = () => {
    console.log('Delete', id);
  };

  return (
    <>
      <button
        className='button is-danger is-light'
        onClick={() => handleClick()}>
        🗑️
      </button>
    </>
  );
}

export default DeleteButton;

