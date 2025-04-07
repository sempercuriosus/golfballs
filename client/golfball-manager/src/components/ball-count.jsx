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
      <h4>The Current Number Of Balls {ballCount}</h4>
    </>
  );
}

export default BallCount;

