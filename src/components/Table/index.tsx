import React, { FC } from 'react';

import styles from './styles.scss';
import ts from 'typescript/lib/tsserverlibrary';
import convertScriptKindName = ts.server.convertScriptKindName;

export interface LeaderBoardData {
  order: number,
  team: string,
  clicks: string
  active?: boolean,
}

type Props = {
  data: Array<LeaderBoardData>,
}

export const Table: FC<Props> = ({ data }) => {
  console.log(data);
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