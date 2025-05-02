import { useState } from 'react';
import links from '../config/links';

function CreateBallForm() {
  const EMPTY_OBJECT = {
    manufacturer: '',
    number: 0,
    color: '',
    color2: '',
    type: '',
    type2: '',
    cost: 0,
    description: '',
    soldDate: '',
    isSold: false,
  };

  const [FORM_VALUES, SET_FORM_VALUES] = useState(EMPTY_OBJECT);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      CLOSE_MODAL();
    }
  });

  const CLOSE_MODAL = () => {
    // Close Modal
    const MODAL = document.getElementById('create-ball-form');
    MODAL.classList.remove('is-active');

    //  when the modal is closed then reset the values for the form.
    // maybe this should be on submit only, then it will be more user friendly if they accidentally close the modal it will not reset the values.
  };

  const HANDLE_CHANGE = (e) => {
    const { name, value } = e.target;

    SET_FORM_VALUES((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };

  const HANDLE_SUBMIT = async (event) => {
    event.preventDefault();

    const BALL = JSON.stringify({
      manufacturer: event.target.manufacturer.value || '',
      number: event.target.number.value || 0,
      color: event.target.color.value || '',
      color2: event.target.color2.value || '',
      type: event.target.type.value || '',
      type2: event.target.type2.value || '',
      cost: event.target.cost.value || '',
      imageDescription:
        event.target.imageDescription.value || '',
      soldDate: event.target.soldDate.value || '',
      isSold: event.target.isSold.checked || false,
    });

    try {
      const RESPONSE = await fetch(links.createNewBallApi, {
        method: 'POST',
        body: BALL,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      alert('New Ball Was Submitted');

      if (!RESPONSE.ok)
        console.error('Response was not okay...');

      CLOSE_MODAL();

      SET_FORM_VALUES(EMPTY_OBJECT);

      return RESPONSE.json();
    } catch (error) {
      console.error(error);
    }
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
              onClick={CLOSE_MODAL}></button>
          </header>

          {/* CONTENT */}

          <section className='modal-card-body'>
            <form
              id='createBallForm'
              onSubmit={(event) => {
                HANDLE_SUBMIT(event);
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
                  value={FORM_VALUES.manufacturer}
                  onChange={HANDLE_CHANGE}
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
                  value={FORM_VALUES.number}
                  onChange={HANDLE_CHANGE}
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
                  value={FORM_VALUES.color}
                  onChange={HANDLE_CHANGE}
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
                  value={FORM_VALUES.color2}
                  onChange={HANDLE_CHANGE}
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
                  value={FORM_VALUES.type}
                  onChange={HANDLE_CHANGE}
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
                  value={FORM_VALUES.type2}
                  onChange={HANDLE_CHANGE}
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
                  value={FORM_VALUES.cost}
                  onChange={HANDLE_CHANGE}
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
                  value={FORM_VALUES.description}
                  onChange={HANDLE_CHANGE}
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
                  value={FORM_VALUES.soldDate}
                  onChange={HANDLE_CHANGE}
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
                  value={FORM_VALUES.isSold}
                  onChange={HANDLE_CHANGE}
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
                  onClick={CLOSE_MODAL}>
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

export default CreateBallForm;

