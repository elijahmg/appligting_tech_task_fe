import React, { FC } from 'react';
import styles from './styles.scss';

type Props = {
  onClick: any
  label: string,
}

/**
 * Button component
 * @param {any} onClick
 * @param {string} label
 * @constructor
 */
export const Button: FC<Props> = ({ onClick, label }) => {
  return (
    <div onClick={onClick} className={styles.buttonWrap}>
      {label}
    </div>
  );
};