import React, { FC, useState } from 'react';

import { TextField } from '../../components/TextField';
import { Button } from '../../components/Button';

import styles from './styles.scss';
import { Container } from '../../components/Container';
import { Ribbon } from '../../components/Ribbon';
import { Table } from '../../components/Table';

const dummy = [
  { id: 1, teamName: 'Team Name', clicks: '10 020' },
  { id: 2, teamName: 'Team Name', clicks: '10 020' },
  { id: 3, teamName: 'Team Name', clicks: '10 020' },
  { id: 4, teamName: 'Team Name', clicks: '10 020' },
  { id: 5, teamName: 'Team Name', clicks: '10 020' }
];

export const HomePage: FC = () => {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  return (
    <div>
      <header>
        <h1 className={styles.headerText}>STFUANDCLICK.COM</h1>
      </header>
      <div className={styles.headerMessageContainer}>
        <div className={styles.message}>
          "It's really simple, you just need to click as fast as you can."
          <br/>
          <div>-anonymous</div>
        </div>
      </div>
      <Container>
        <div className={styles.fieldButtonContainer}>
          <div className={styles.textFieldSpanContainer}>
            <span className={styles.span}>Enter your team name</span>
            <TextField
              onChange={(e) => setText(e.target.value)}
              value={text}
              placeholder="Your mom"
            />
          </div>
          <div className={styles.buttonWrap}>
            <Button onClick={() => setCount(count + 1)} label="Click!"/>
          </div>
        </div>
        <div className={styles.ribbonContainer}>
          <Ribbon label="TOP 10 Clickers"/>
        </div>
        <Table data={dummy}/>
      </Container>
    </div>
  );
};