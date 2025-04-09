function EditButton({ Id: id }) {
  const handleClick = () => {
    console.log('Edit', id);
  };

  return (
    <>
      <button
        className='EditButton'
        onClick={() => handleClick()}>
        ✏️
      </button>
    </>
  );
}

export default EditButton;

