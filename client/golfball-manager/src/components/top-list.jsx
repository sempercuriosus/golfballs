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
      <h4>
        The Top Balls Are...
        <ol>
          {topBalls.map((ball, index) => (
            <li key={index}>
              {ball._id} - {ball.totalCount}
            </li>
          ))}
        </ol>
      </h4>
    </>
  );
}

export default BallList;

