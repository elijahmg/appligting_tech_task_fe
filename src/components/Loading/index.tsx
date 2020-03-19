import React, { FC } from 'react';

import styles from './styles.scss';

/**
 * Loading component
 * @constructor
 */
export const Loading: FC = () => (
  <div className={styles.loading}>Loading</div>
);