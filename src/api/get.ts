import { useEffect, useState } from 'react';

export const loadLeaderBoard = () => {
  const [leaderBoardData, setLeaderBoardData] = useState([]);

  useEffect(() => {
    const makeReq = async () => {
      const data = await fetch('https://klikuj.herokuapp.com/api/v1/leaderboard', { method: 'GET'})
        .then((res) => res.json());
      setLeaderBoardData(data.slice(0, 10));
    };

    makeReq();
  }, []);

  return leaderBoardData;
};