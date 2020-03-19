import React, { FC, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { loadLeaderBoard } from '../../api/get';

import { TextField } from '../../components/TextField';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Ribbon } from '../../components/Ribbon';
import { Table } from '../../components/Table';
import { Loading } from '../../components/Loading';
import { TeamInfo } from '../../components/TeamInfo';
import { HeaderMessage } from '../../components/HeaderMessage';

import styles from './styles.scss';

export const HomePage: FC = () => {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  const { teamName } = useParams();
  const history = useHistory();

  const leaderBoardData = loadLeaderBoard();

  const handleOnClick = () => {
    if (text && !teamName) {
      history.push(`/${text}`);
      return;
    }

    if (teamName) {
      setCount(count + 1);
    }
  };

  return (
    <div>
      <header>
        <h1 className={styles.headerText}>STFUANDCLICK.COM</h1>
      </header>
      <div className={styles.headerMessageContainer}>
        {!teamName && <HeaderMessage/>}
        {teamName && <TeamInfo/>}
      </div>
      <Container>
        <div className={styles.fieldButtonContainer}>
          {!teamName &&
          <div className={styles.textFieldSpanContainer}>
            <span className={styles.span}>Enter your team name</span>
            <TextField
              onChange={(e) => setText(e.target.value)}
              value={text}
              placeholder="Your mom"
            />
          </div>
          }
          <div className={styles.buttonWrap}>
            <Button onClick={handleOnClick} label="Click!"/>
          </div>
        </div>
        <div className={styles.ribbonContainer}>
          {!teamName && <Ribbon label="TOP 10 Clickers"/>}
        </div>
        {leaderBoardData.length === 0 && <Loading/>}
        {leaderBoardData.length > 0 && <Table data={leaderBoardData}/>}
      </Container>
      <footer>
        If you don't like this page, it's <a href="https://applifting.cz">Applifting</a>'s fault
      </footer>
    </div>
  );
};