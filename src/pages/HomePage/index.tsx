import React, { FC, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
// @ts-ignore
import { findIndex } from 'lodash';

import { loadLeaderBoard } from '../../api/get';
import { submitClick, Response } from '../../api/post';

import { formatNumber } from '../../functions/utils';

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
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

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

  /** Initial call during loading page **/
  useEffect(() => {
    const loadData = async () => {
      const leaderBoardData = await loadLeaderBoard();
      const mutatedLeaderBoardData = leaderBoardData.slice(0, 10)
          .map((obj: LeaderBoardData) => ({ ...obj, clicks: formatNumber(obj.clicks)}));

      setLeaderBoardData(mutatedLeaderBoardData);
    };

    /** Set session into redux store **/
    setSession();

    loadData();
  }, []);

  /** Initial call on click handler in case of existing team name **/
  useEffect(() => {
    onClickHandler();
  }, [session]);

  const onClickHandler = async () => {
    const team = teamName || teamNameValue;

    if (session && team) {
      const response = await submitClick(team, session);

      /** Find index for slicing leader board data to display team place in a table **/
      const teamIndex = findIndex(response.leaderBoarData, (obj: LeaderBoardData) => obj.team === team);

      /** Set active: true, to emphasize row in the table **/
      response.leaderBoarData[teamIndex] = { ...response.leaderBoarData[teamIndex], active: true };
      let data = [];

      if (teamIndex - 5 < 0) {
        data = response.leaderBoarData.slice(0, 10);
      } else {
        data = response.leaderBoarData.slice(teamIndex - 5, teamIndex + 4);
      }

      data = data.map((obj) => ({ ...obj, clicks: formatNumber(obj.clicks) }));

      setLeaderBoardData(data);
      setResponse(response);
    }
  };

  /** On button click handler **/
  const handleOnClick = async () => {
    if (teamNameValue && !teamName) {
      history.push(`/${teamNameValue}`);
    }

    await onClickHandler();
  };

  return (
    <div>
      <Header/>
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
        <div className={styles.footerTableMessage}>
          <span>Want to be top? STFU and click</span>
        </div>
      </Container>
      <Footer/>
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