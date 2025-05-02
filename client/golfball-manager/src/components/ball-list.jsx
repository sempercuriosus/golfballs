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
    <>
      <table
        id='ball-list'
        className='table'>
        <thead>
          <tr>
            <th>Manufacturer</th>
            <th>Number</th>
            <th>Colors</th>
            <th>Types</th>
            <th>Cost</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {ballList.map((ball) => (
            <ListItem
              key={ball._id}
              BALL={ball}
            />
          ))}
        </tbody>

        <tfoot>
          <tr>
            <th>Manufacturer</th>
            <th>Number</th>
            <th>Colors</th>
            <th>Types</th>
            <th>Cost</th>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default BallList;

