import React from 'react'

import {rankingData, rankingDataLabels} from '../fixtures/rankingData';
import Table from '../components/table';
import Box from '../components/box'
import Container from '../components/ui/Container'

export default function Ranking() {
  return (
    <Container>
      <Box title="Ranking">
      <Table labels={rankingDataLabels} data={rankingData} />
      </Box>
    </Container>
  )
}
