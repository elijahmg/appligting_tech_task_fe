import React, { FC } from 'react';

import styles from './styles.scss';

/**
 * Header message
 * @constructor
 */
export const HeaderMessage: FC = () => (
  <div className={styles.message}>
    "It's really simple, you just need to click as fast as you can."
    <br/>
    <div>-anonymous</div>
  </div>
);