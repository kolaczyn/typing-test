import React from 'react';

import {
  rankingData,
  rankingDataLabels,
} from '../../static/fixtures/rankingData';
import Table from '../common/table';
import Box from '../common/box';
import Container from '../common/Container';

export default function Ranking() {
  return (
    <Container>
      <Box title='Ranking'>
        <Table labels={rankingDataLabels} data={rankingData} />
      </Box>
    </Container>
  );
}
