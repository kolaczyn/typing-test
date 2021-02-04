import React, { useState } from 'react';

import Box from '../common/box';
import Button from '../common/button';
import VertSplit, { LeftSection } from '../common/vert-split';
import Graph from './graph';

import {
  labels, accuracyStats, netWpmStats, grossWpmStats,
} from '../../static/sampleStats';

const stats = ['Accuracy', 'Gross WPM', 'Net WPM'];

export default function Stats() {
  const [selectedStats, setSelectedStats] = useState([...stats]);

  // toggle if the element is in the array
  const toggleStats = ((stat) => setSelectedStats((old) => (old.includes(stat)
    ? old.filter((el) => el !== stat) : [...old, stat])));
  const selectedStatsData = [];
  // TODO there must be a better way to do this
  if (selectedStats.includes('Accuracy')) selectedStatsData.push(accuracyStats);
  if (selectedStats.includes('Gross WPM')) selectedStatsData.push(grossWpmStats);
  if (selectedStats.includes('Net WPM')) selectedStatsData.push(netWpmStats);

  return (
    <Box title="My Stats">
      <VertSplit>
        <LeftSection>
          {stats.map((stat) => (
            <Button
              primary={selectedStats.includes(stat)}
              onClick={() => toggleStats(stat)}
              key={stat}
            >
              {stat}
            </Button>
          ))}
        </LeftSection>
        <section>
          <Graph
            labels={labels}
            datasets={selectedStatsData}
          />
        </section>
      </VertSplit>
    </Box>
  );
}
