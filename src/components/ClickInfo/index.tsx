import React, { FC } from 'react';

import { PostType } from '../../api/post';

import styles from './styles.scss';

type InfoProps = {
  clickNumber: number,
  isTeamClick?: boolean
}

/**
 * Click info component
 * @param {number} your_clicks
 * @param {number} team_clicks
 * @constructor
 */
export const ClickInfo: FC<PostType> = ({ your_clicks, team_clicks }) => (
  <div className={styles.clickInfo}>
    <Info clickNumber={your_clicks}/>
    <Info clickNumber={team_clicks} isTeamClick/>
  </div>
);

/**
 * Click info component
 * @param {number} clickNumber
 * @param {boolean} isTeamClick
 * @constructor
 */
const Info: FC<InfoProps> = ({ clickNumber, isTeamClick }) => {
  const label = isTeamClick ? 'Team clicks:' : 'Your clicks:';

  return (
    <div className={styles.infoWrap}>
      <span>{label}</span>
      <h1 className={styles.clicks}>{clickNumber}</h1>
    </div>
  );
};