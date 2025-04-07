import { useState, useEffect } from 'react';
import links from '../../src/config/links';

function BallAverage() {
  const [ballAverage, setBallAverage] = useState('');

  useEffect(() => {
    getBallAverage();
  }, []);

  const getBallAverage = async () => {
    const RESPONSE = await fetch(links.lifetimeAverageApi);
    const BALL_AVERAGE = await RESPONSE.json();
    setBallAverage(BALL_AVERAGE);
  };

  return (
    <>
      <h4>{ballAverage}</h4>
    </>
  );
}

export default BallAverage;

