import React, { FC } from 'react';

import { PostType } from '../../api/post';

import styles from './styles.scss';

type InfoProps = {
  clickNumber: number,
  isTeamClick?: boolean
}

export const ClickInfo: FC<PostType> = ({ your_clicks, team_clicks }) => (
  <div>
    <Info clickNumber={your_clicks}/>
    <Info clickNumber={team_clicks} isTeamClick/>
  </div>
);

const Info: FC<InfoProps> = ({ clickNumber, isTeamClick }) => {
  const label = isTeamClick ? 'Team clicks:' : 'Your clicks:';

  return (
    <div className={styles.infoWrap}>
      <span>{label}</span>
      <h1 className={styles.clicks}>{clickNumber}</h1>
    </div>
  );
};