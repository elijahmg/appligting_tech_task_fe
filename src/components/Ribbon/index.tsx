import React, { FC } from 'react';

import styles from './styles.scss';

type Props = {
  label: string,
}

export const Ribbon: FC<Props> = ({ label }) => (
  <div className={styles.ribbon}>
    <h2>{label}</h2>
  </div>
);