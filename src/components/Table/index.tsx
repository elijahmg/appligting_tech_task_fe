import React, { FC } from 'react';

import './styles.scss';

export interface LeaderBoardData {
  order: number,
  team: string,
  clicks: string
}

type Props = {
  data: Array<LeaderBoardData>,
}

export const Table: FC<Props> = ({ data }) => {
  return (
    <table>
      <thead>
      <tr>
        <th/>
        <th>Team</th>
        <th>Clicks</th>
      </tr>
      </thead>
      <tbody>
      {data.map((obj, index) => (
        <tr key={index}>
          <td>{obj.order}</td>
          <td>{obj.team}</td>
          <td>{obj.clicks}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};