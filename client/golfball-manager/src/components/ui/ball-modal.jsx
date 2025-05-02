function BallModal({ state, change, close, submit }) {
  return (
    <>
      <div
        id='create-ball-form'
        className='modal'>
        <div className='modal-background'></div>
        <div className='modal-card'>
          {/* HEADER */}

          <header className='modal-card-head'>
            <p className='modal-card-title'>Golf Ball</p>
            <button
              className='delete'
              aria-label='close'
              onClick={close}></button>
          </header>

          {/* CONTENT */}

          <section className='modal-card-body'>
            <form
              id='createBallForm'
              onSubmit={(event) => {
                submit(event);
              }}>
              {/* Manufacturer */}
              <label
                htmlFor='manufacturer'
                className='label'>
                Ball Manufacturer
                <input
                  id='manufacturer'
                  type='text'
                  name='manufacturer'
                  className='input'
                  autoFocus
                  value={state.manufacturer}
                  onChange={change}
                  required
                />
              </label>

              {/* Number */}
              <label
                htmlFor='number'
                className='label'>
                Number
                <input
                  id='number'
                  type='number'
                  name='number'
                  min={0}
                  max={100}
                  className='input'
                  value={state.number}
                  onChange={change}
                />
              </label>

              {/* Color Primary */}
              <label
                htmlFor='color'
                className='label'>
                Color - Primary
                <input
                  id='color'
                  type='text'
                  name='color'
                  className='input'
                  value={state.color}
                  onChange={change}
                />
              </label>

              {/* Color Secondary */}
              <label
                htmlFor='color2'
                className='label'>
                Color - Sececondary
                <input
                  id='color2'
                  type='text'
                  name='color2'
                  className='input'
                  value={state.color2}
                  onChange={change}
                />
              </label>

              {/* Ball Type Primary */}
              <label
                htmlFor='type'
                className='label'>
                Ball Type - Primary
                <input
                  id='type'
                  type='text'
                  name='type'
                  className='input'
                  value={state.type}
                  onChange={change}
                />
              </label>

              {/* Ball Type Secondary */}
              <label
                htmlFor='type2'
                className='label'>
                Ball Type - Secondary
                <input
                  id='type2'
                  type='text'
                  name='type2'
                  className='input'
                  value={state.type2}
                  onChange={change}
                />
              </label>

              {/* Ball Cost */}
              <label
                htmlFor='cost'
                className='label'>
                Ball Cost
                <input
                  id='cost'
                  type='number'
                  name='cost'
                  min={0}
                  max={5}
                  placeholder={0}
                  className='input'
                  value={state.cost}
                  onChange={change}
                />
              </label>

              {/* Image Description */}
              <label
                htmlFor='imageDescription'
                className='label'>
                Image Description
                <textarea
                  id='imageDescription'
                  type='text'
                  name='imageDescription'
                  className='input'
                  rows={2}
                  value={state.description}
                  onChange={change}
                />
              </label>
              {/* Sold Date */}
              <label
                htmlFor='soldDate'
                className='label'>
                Sold Date
                <input
                  id='soldDate'
                  type='date'
                  name='soldDate'
                  className='input'
                  value={state.soldDate}
                  onChange={change}
                />
              </label>

              {/* Is Sold */}

              <label
                htmlFor='isSold'
                className='label checkbox'>
                Is Sold{' '}
                <input
                  id='isSold'
                  type='checkbox'
                  name='isSold'
                  className='checkbox'
                  value={state.isSold}
                  onChange={change}
                />
              </label>
              {/* FOOTER */}
              <div className='buttons'>
                <button
                  className='button is-success'
                  type='submit'>
                  Save changes
                </button>
                <button
                  className='button'
                  onClick={close.CLOSE_MODAL}>
                  Cancel
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

export default BallModal;

