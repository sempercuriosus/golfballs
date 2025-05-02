function EditButton({ Id: id }) {
  const HANDLE_CLICK = () => {
    const MODAL = document.getElementById('create-ball-form');
    MODAL.classList.add('is-active');
    console.log('edit:', id);
  };

  return (
    <>
      <button
        className='button is-warning is-light'
        onClick={() => HANDLE_CLICK()}>
        ✏️
      </button>
    </>
  );
}

export default EditButton;

