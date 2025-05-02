function EditButton({ Id: id }) {
  const handleClick = () => {
    console.log('Edit', id);
  };

  return (
    <>
      <button
        className='button is-warning is-light'
        onClick={() => handleClick()}>
        ✏️
      </button>
    </>
  );
}

export default EditButton;

