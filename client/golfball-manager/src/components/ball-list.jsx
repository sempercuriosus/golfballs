import { useState, useEffect } from 'react';
import links from '../config/links';
import ListItem from './ui/list-item';

function BallList() {
  const [ballList, setBallList] = useState([]);

  useEffect(() => {
    getAllBalls();
  }, []);

  const getAllBalls = async () => {
    const RESPONSE = await fetch(links.getAllBallsApi);
    const ALL_BALLS = await RESPONSE.json();

    setBallList(ALL_BALLS);
  };

  return (
    <div id='BallList'>
      {ballList.map((ball) => (
        <ListItem
          key={ball._id}
          BALL={ball}
        />
      ))}
    </div>
  );
}

export default BallList;

