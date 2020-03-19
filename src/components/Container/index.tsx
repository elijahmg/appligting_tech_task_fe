import React, { FC } from 'react';

import styles from './styles.scss';

type Props = {
  children: any,
}

/**
 * Container for table
 * @param {any} children
 * @constructor
 */
export const Container: FC<Props> = ({ children }) => (
  <div className={styles.wrap}>
    {children}
  </div>
);