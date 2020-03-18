import React, { FC, useState } from 'react';
import { useParams } from 'react-router-dom';


import { TextField } from '../../components/TextField';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Ribbon } from '../../components/Ribbon';
import { Table } from '../../components/Table';
import { loadLeaderBoard } from '../../api/get';

import styles from './styles.scss';

export const HomePage: FC = () => {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);
  const { teamName } = useParams();

  const leaderBoardData = loadLeaderBoard();

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
        {!leaderBoardData && <div>Loading</div>}
        {leaderBoardData && <Table data={leaderBoardData}/>}
      </Container>
      <footer>
        If you don't like this page, it's <a href="https://applifting.cz">Applifting</a>'s fault
      </footer>
    </div>
  );
};