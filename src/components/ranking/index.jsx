import React, { useState, useEffect } from 'react';

import {
  rankingData,
  rankingDataLabels,
} from '../../static/fixtures/rankingData';
import Table from '../common/table';
import Box from '../common/box';
import Loader from '../common/loader';

export default function Ranking() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate 1.5 seconds of loading
    const timeout = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box title="Ranking">
      {
        isLoading ? <Loader />
          : <Table labels={rankingDataLabels} data={rankingData} />
      }
    </Box>
  );
}
