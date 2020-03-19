/**
 * Load leader board data from api
 */
export const loadLeaderBoard = async () => {
  return await fetch('https://klikuj.herokuapp.com/api/v1/leaderboard', { method: 'GET' })
    .then((res) => res.json());
};