function CreateBallForm() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      HANDLE_CLICK();
    }
  });

  const HANDLE_CLICK = () => {
    // Close Modal
    const MODAL = document.getElementById('create-ball-form');
    MODAL.classList.remove('is-active');
  };

  return (
    <>
      <div
        id='create-ball-form'
        className='modal'>
        <div className='modal-background'></div>
        <div className='modal-card'>
          {/* HEADER */}

          <header className='modal-card-head'>
            <p className='modal-card-title'>Create Ball</p>
            <button
              className='delete'
              aria-label='close'
              onClick={HANDLE_CLICK}></button>
          </header>

          {/* CONTENT */}

          <section className='modal-card-body'>
            <form id='createBallForm'>
              <label htmlFor='manufacturer'>
                Ball Manufacturer
              </label>
              <input
                id='manufacturer'
                type='text'
                name='manufacturer'
              />

              <label htmlFor='number'>Number</label>
              <input
                id='number'
                type='number'
                name='number'
              />

              <label htmlFor='color'>Color - Prim.</label>
              <input
                id='color'
                type='text'
                name='color'
              />

              <label htmlFor='color2'>Color - Sec.</label>
              <input
                id='color2'
                type='text'
                name='color2'
              />

              <label htmlFor='type'>Ball Type - Prim.</label>
              <input
                id='type'
                type='text'
                name='type'
              />

              <label htmlFor='type2'>Ball Type - Sec.</label>
              <input
                id='type2'
                type='text'
                name='type2'
              />

              <label htmlFor='cost'>Ball Cost</label>
              <input
                id='cost'
                type='number'
                name='cost'
              />

              <label htmlFor='imageDescription'>
                Image Description
              </label>
              <input
                id='imageDescription'
                type='text'
                name='imageDescription'
              />

              <label htmlFor='soldDate'>Sold Date</label>
              <input
                id='soldDate'
                type='date'
                name='soldDate'
              />

              <label htmlFor='isSold'>Is Sold</label>
              <input
                id='isSold'
                type='checkbox'
                name='isSold'
              />
            </form>
          </section>

          {/* FOOTER */}

          <footer className='modal-card-foot'>
            <div className='buttons'>
              <button className='button is-success'>
                Save changes
              </button>
              <button
                className='button'
                onClick={HANDLE_CLICK}>
                Cancel
              </button>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default CreateBallForm;

