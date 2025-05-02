import { useState, useEffect } from 'react';
import links from '../../src/config/links';

function BallCount() {
  const [ballCount, setBallCount] = useState(0);

  useEffect(() => {
    getBallCount();
  }, []);

  const getBallCount = async () => {
    const RESPONSE = await fetch(links.ballCountApi);
    const DATA = await RESPONSE.json();

    setBallCount(DATA);
  };

  return (
    <>
      <h4 className='block title is-5'>
        The Current Number Of Balls
      </h4>
      <p className='block'>{ballCount}</p>
    </>
  );
}

export default BallCount;

