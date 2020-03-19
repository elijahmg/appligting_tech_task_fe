import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import { TextField } from '../TextField';

import styles from './styles.scss';

export const TeamInfo: FC = () => {
  const { teamName } = useParams();
  const link = window.location.href;

  return (
    <div className={styles.container}>
      <div className={styles.teamInfo}>
        Clicking for team <b>{teamName}</b>
      </div>
      <div className={styles.spanAndLinkWrap}>
        <span className={styles.margin}>Too lazy to click? Let your pals click for you</span>
        <TextField value={link} onChange={() => null}/>
      </div>
    </div>
  );
};