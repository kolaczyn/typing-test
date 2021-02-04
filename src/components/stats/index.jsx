import React, { useState } from 'react';

import Box from '../common/box';
import Button from '../common/button';
import VertSplit from '../common/vert-split';
import Graph from './graph';

import {
  labels, accuracyStats, netWpmStats, grossWpmStats,
} from '../../static/sampleStats';
// import { accuracyStats } from '../../static/sampleStats';

const stats = ['Accuracy', 'Gross WPM', 'Net WPM'];

export default function Stats() {
  const [selectedStats, setSelectedStats] = useState(['Accuracy']);

  // toggle if the element is in the array
  const toggleStats = ((stat) => setSelectedStats((old) => (old.includes(stat)
    ? old.filter((el) => el !== stat) : [...old, stat])));

  return (
    <Box title="My Stats">
      <VertSplit>
        <section>
          {stats.map((stat) => (
            <Button
              primary={selectedStats.includes(stat)}
              onClick={() => toggleStats(stat)}
              key={stat}
            >
              {stat}
            </Button>
          ))}
        </section>
        <section>
          <p>{selectedStats}</p>
          <Graph label={labels} datasets={[accuracyStats, netWpmStats, grossWpmStats]} />
        </section>
      </VertSplit>
    </Box>
  );
}
