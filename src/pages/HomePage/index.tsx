import React, { FC, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { findIndex } from 'lodash';

import { loadLeaderBoard } from '../../api/get';
import { submitClick, Response } from '../../api/post';

import { initializeSession } from '../../store/actions/session';
import { Session } from '../../store/types/session';

import { TextField } from '../../components/TextField';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Ribbon } from '../../components/Ribbon';
import { LeaderBoardData, Table } from '../../components/Table';
import { Loading } from '../../components/Loading';
import { TeamInfo } from '../../components/TeamInfo';
import { HeaderMessage } from '../../components/HeaderMessage';
import { ClickInfo } from '../../components/ClickInfo';

import styles from './styles.scss';

type Props = {
  setSession: Function,
  session: string,
}

const defaultResponse: Response = {
  submitResponse: {
    your_clicks: 0,
    team_clicks: 0,
  },

  leaderBoarData: [],
};

const HomePage: FC<Props> = ({ setSession, session }) => {
  const [teamNameValue, setTeamNameValue] = useState('');
  const [response, setResponse] = useState(defaultResponse);
  const [leaderBoardData, setLeaderBoardData] = useState([] as Array<LeaderBoardData>);
  const { teamName } = useParams();
  const history = useHistory();

  useEffect(() => {
    const loadData = async () => {
      const leaderBoardData = await loadLeaderBoard();
      setLeaderBoardData(leaderBoardData.slice(0, 10));
    };

    setSession();

    loadData();
  }, []);

  useEffect(() => {
    initialClick();
  }, [session]);

  const initialClick = async () => {
    if (session && (teamName || teamNameValue)) {
      const response = await submitClick(teamName || teamNameValue, session);

      const teamIndex = findIndex(response.leaderBoarData, (obj) => obj.team === teamName);
      response.leaderBoarData[teamIndex] = { ...response.leaderBoarData[teamIndex], active: true };
      let data = [];

      if (teamIndex - 5 < 0) {
        data = response.leaderBoarData.slice(0, 10);
      } else {
        data = response.leaderBoarData.slice(teamIndex - 5, teamIndex + 4);
      }


      setLeaderBoardData(data);
      setResponse(response);
    }
  };

  const handleOnClick = async () => {
    if (teamNameValue && !teamName) {
      history.push(`/${teamNameValue}`);
    }

    await initialClick();
  };

  console.log('session', session);

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
              onChange={(e) => setTeamNameValue(e.target.value)}
              value={teamNameValue}
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
          {teamName &&
          <ClickInfo
            your_clicks={response.submitResponse.your_clicks}
            team_clicks={response.submitResponse.team_clicks}
          />}
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

const mapDispatchToProps = (dispatch: any) => ({
  setSession: () => dispatch(initializeSession())
});

const mapStateToProps = (state: Session) => ({
  session: state.session,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);