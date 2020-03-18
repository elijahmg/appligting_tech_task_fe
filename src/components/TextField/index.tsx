import React, { ChangeEvent, FC } from 'react';

import styles from './styles.scss';

type Props = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
  placeholder?: string,
  value: any,
}

export const TextField: FC<Props> = ({ onChange, value, placeholder }) => {
  return (
    <input
      className={styles.input}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};