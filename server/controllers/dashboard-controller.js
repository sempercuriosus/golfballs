const GOLFBALLS = require('../models/golfballs');

async function countAllBalls(res) {
  try {
    const BALL_COUNT = await GOLFBALLS.countDocuments({});

    res.status(200).json(BALL_COUNT);
  } catch (error) {
    console.error(error);

    res.status(500).json('All Ball Error');
  }
}

async function getTopBalls(res) {
  try {
    const PIPE = [
      {
        $group: {
          _id: '$manufacturer',
          totalCount: {
            $sum: 1,
          },
        },
      },
      {
        $sort: {
          totalCount: -1,
        },
      },
      { $limit: 5 },
    ];

    const TOP_FIVE = await GOLFBALLS.aggregate(PIPE);

    res.status(200).json(TOP_FIVE);
  } catch (error) {
    console.error(error);
    res.status(500).json('Top Balls Error');
  }
}

async function lifetimeBallAverage(res) {
  try {
    const CURR_DATE = new Date();
    const START_DATE = new Date('01-01-2021');
    const TIME_DIFF = Math.abs(CURR_DATE - START_DATE);
    const DAYS_SINCE_START = Math.ceil(
      TIME_DIFF / (1000 * 60 * 60 * 24),
    ); // THIS IS INCLUDING THE CURRENT DAY IN THIS CALCULATION
    // Value is in Miliseconds, but is converted into DAYS
    const BALL_COUNT = await GOLFBALLS.countDocuments({});

    const AVERAGE = (BALL_COUNT / DAYS_SINCE_START).toFixed(2);

    res
      .status(200)
      .json(
        `Since ${START_DATE.toDateString()} you have found ${AVERAGE} golfballs per day`,
      );
  } catch (error) {
    console.error(error);

    res.status(500).json('Lifetime Average Error');
  }
}

// EXPORT
module.exports = {
  countAllBalls,
  getTopBalls,
  lifetimeBallAverage,
};

