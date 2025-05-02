import { useState, useEffect } from 'react';
import links from '../../src/config/links';

function BallList() {
  const [topBalls, setTopBalls] = useState([]);

  useEffect(() => {
    getTopBalls();
  }, []);

  const getTopBalls = async () => {
    const RESPONSE = await fetch(links.topBallsApi);
    const DATA = await RESPONSE.json();

    setTopBalls(DATA);
  };

  return (
    <>
      <h4 className='title is-5'>Top Balls ...</h4>
      <ul className='block'>
        {topBalls.map((ball, index) => (
          <li key={index}>
            {ball._id} - <strong>{ball.totalCount}</strong>
          </li>
        ))}
      </ul>
    </>
  );
}

export default BallList;

