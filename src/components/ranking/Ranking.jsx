import React from 'react';

import {
  rankingData,
  rankingDataLabels,
} from '../../static/fixtures/rankingData';
import Table from '../common/table';
import Box from '../common/box';

export default function Ranking() {
  return (
    <Box title='Ranking'>
      <Table labels={rankingDataLabels} data={rankingData} />
    </Box>
  );
}
