function CreateBallButton() {
  const HANDLE_CLICK = () => {
    const MODAL = document.getElementById('create-ball-form');
    MODAL.classList.add('is-active');
  };

  return (
    <>
      <button
        className='js-modal-trigger button is-success'
        data-target='create-ball-form'
        onClick={HANDLE_CLICK}>
        Create Ball
      </button>
    </>
  );
}

export default CreateBallButton;

