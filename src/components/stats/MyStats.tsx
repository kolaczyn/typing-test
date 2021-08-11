/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Stats } from '../../customTypes';
import {
  accuracyStats,
  grossWpmStats,
  labels,
  netWpmStats,
  SampleStats,
} from '../../static/sampleStats';
import Box from '../common/box';
import Button from '../common/button';
import VertSplit, { LeftSection } from '../common/vert-split';
import Graph from './Graph';

const statLabels = ['Accuracy', 'Gross WPM', 'Net WPM'];

type Props = {
  stats: Stats[];
};

const MyStats: React.FC<Props> = ({ stats }) => {
  const [selectedStats, setSelectedStats] = useState([...statLabels]);

  // toggle if the element is in the array
  const toggleStats = (stat: string) =>
    setSelectedStats(old =>
      old.includes(stat) ? old.filter(el => el !== stat) : [...old, stat]
    );
  const selectedStatsData: SampleStats[] = [];
  // TODO there must be a better way to do this
  if (selectedStats.includes('Accuracy'))
    selectedStatsData.push(accuracyStats(stats.map(s => s.accuracy)));
  if (selectedStats.includes('Gross WPM'))
    selectedStatsData.push(grossWpmStats(stats.map(s => s.grossWpm)));
  if (selectedStats.includes('Net WPM'))
    selectedStatsData.push(netWpmStats(stats.map(s => s.netWpm)));
  return (
    <Box title="Graph">
      <VertSplit>
        <LeftSection>
          {statLabels.map(stat => (
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
          {/* <Graph labels={labels} datasets={stats} /> */}
          <Graph
            labels={stats.map(s => new Date(s.createdAt).getHours().toString())}
            datasets={selectedStatsData}
          />
        </section>
      </VertSplit>
    </Box>
  );
};
export default MyStats;
