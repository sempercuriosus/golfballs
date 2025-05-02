import { useState } from 'react';
import links from '../config/links';
import BallModal from '../components/ui/ball-modal';

function BallForm() {
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

  const CLOSE_MODAL = () => {
    const MODAL = document.getElementById('create-ball-form');
    MODAL.classList.remove('is-active');
  };

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      CLOSE_MODAL();
    }
  });

  const HANDLE_CHANGE = (e) => {
    const { name, value } = e.target;
    SET_FORM_VALUES((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };

  const HANDLE_SUBMIT = async (e) => {
    e.preventDefault();

    const BALL = JSON.stringify({
      manufacturer: e.target.manufacturer.value || '',
      number: e.target.number.value || 0,
      color: e.target.color.value || '',
      color2: e.target.color2.value || '',
      type: e.target.type.value || '',
      type2: e.target.type2.value || '',
      cost: e.target.cost.value || '',
      imageDescription: e.target.imageDescription.value || '',
      soldDate: e.target.soldDate.value || '',
      isSold: e.target.isSold.checked || false,
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
      <BallModal
        close={CLOSE_MODAL}
        change={HANDLE_CHANGE}
        state={FORM_VALUES}
        submit={HANDLE_SUBMIT}
      />
    </>
  );
}

export default BallForm;

