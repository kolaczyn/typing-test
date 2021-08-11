import React, { useEffect, useState } from 'react';
import { Stats } from '../../customTypes';
import fetchUserLatestScore from '../../fetch/fetchUserLatestScore';
import app from '../../firebase';
import Spinner from '../common/loader';
import EmptyScoreMessage from './EmptyScoreMessage';
import PleaseLogInMessage from './PleaseLogInMessage';
import Logs from './Logs';
import MyStats from './MyStats';

const StatsPage: React.FC = () => {
  const [latestStats, setLatestStats] = useState<Stats[] | null>(null);
  useEffect(() => {
    (async () => {
      const fetchedStats = await fetchUserLatestScore();
      setLatestStats(fetchedStats);
    })();
  }, []);
  if (app.auth().currentUser === null) return <PleaseLogInMessage />;
  return (
    <div>
      {latestStats === null ? (
        <Spinner />
      ) : latestStats.length === 0 ? (
        <EmptyScoreMessage />
      ) : (
        <>
          <MyStats stats={[...latestStats].reverse()} />
          <div style={{ marginBottom: '1rem' }} />
          <Logs stats={latestStats} />
        </>
      )}
    </div>
  );
};

export default StatsPage;
