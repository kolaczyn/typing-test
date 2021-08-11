/* eslint-disable react/prop-types */
import React from 'react';
import { Stats } from '../../customTypes';
import useToggleSelectedScoreData, {
  statNames,
} from '../../hooks/useToggleSelectedScoreData';
import { statNameToDisplayName } from '../../utils/mapStatsToGraphData';
import Box from '../common/box';
import Button from '../common/button';
import VertSplit, { LeftSection } from '../common/vert-split';
import Graph from './Graph';

type Props = {
  stats: Stats[];
};

const MyStats: React.FC<Props> = ({ stats }) => {
  const { selectedStats, toggleStats, labels, selectedStatsData } =
    useToggleSelectedScoreData(stats);
  return (
    <Box title="Graph">
      <VertSplit>
        <LeftSection>
          {statNames.map(statName => (
            <Button
              primary={selectedStats.includes(statName)}
              onClick={() => toggleStats(statName)}
              key={statName}
            >
              {statNameToDisplayName[statName]}
            </Button>
          ))}
        </LeftSection>
        <section>
          <Graph labels={labels} datasets={selectedStatsData} />
        </section>
      </VertSplit>
    </Box>
  );
};
export default MyStats;
