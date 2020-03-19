import React, { FC } from 'react';

import styles from './styles.scss';

export interface LeaderBoardData {
  order: number,
  team: string,
  clicks: string
  active?: boolean,
}

type Props = {
  data: Array<LeaderBoardData>,
}

/**
 * Table component
 * @param {Array<LeaderBoardData>>} data
 * @constructor
 */
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
        <tr key={index} className={obj.active ? styles.active : ''}>
          <td>{obj.order}</td>
          <td>{obj.team}</td>
          <td>{obj.clicks}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};