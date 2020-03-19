import { loadLeaderBoard } from './get';

import { LeaderBoardData } from '../components/Table';

export type PostType = {
  your_clicks: number,
  team_clicks: number,
}

export interface Response {
  submitResponse: PostType,
  leaderBoarData: Array<LeaderBoardData>
}

export const submitClick = async (teamName: string | undefined, session: string) => {
  const dataToSend = {
    team: teamName,
    session,
  };

  const response: Response = {
    submitResponse: {
      your_clicks: 0,
      team_clicks: 0,
    },
    leaderBoarData: [],
  };

  response.submitResponse = await fetch('https://klikuj.herokuapp.com/api/v1/klik', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(dataToSend),
  }).then((res) => res.json());

  response.leaderBoarData = await loadLeaderBoard();

  return response;
};