import React, { useEffect, useState } from 'react';
import { Stats } from '../../customTypes';
import Box from '../common/box';
import Loader from '../common/loader';
import Table from '../common/table';
import fetchRankingData from './fetchRankingData';
import firebaseDataToTableData from './firebaseDataToTableData';

const Ranking: React.FC = () => {
  const [rankingData, setRankingData] = useState<null | Stats[]>(null);

  useEffect(() => {
    (async () => {
      const fetchedData = await fetchRankingData();
      setRankingData(fetchedData);
    })();
  }, []);

  return (
    <Box title="Ranking">
      {rankingData === null ? (
        <Loader />
      ) : (
        <Table
          labels={['User', 'WPM', 'When']}
          data={firebaseDataToTableData(rankingData)}
        />
      )}
    </Box>
  );
};
export default Ranking;
