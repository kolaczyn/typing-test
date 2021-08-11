import React, { useEffect, useState } from 'react';
import { Stats } from '../../customTypes';
import fetchUserLatestScore from '../../fetch/fetchUserLatestScore';
import Spinner from '../common/loader';
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
  return (
    <div>
      {latestStats === null ? (
        <Spinner />
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
