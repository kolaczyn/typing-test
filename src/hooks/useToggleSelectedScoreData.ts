/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useState } from 'react';
import { Stats } from '../customTypes';
import mapStatsToGraphData, {
  GraphLineData,
  StatName,
} from '../utils/mapStatsToGraphData';

export const statNames: StatName[] = [
  'accuracy',
  'grossWpm',
  'netWpm',
  'keystrokes',
];
const useToggleSelectedScoreData = (stats: Stats[]) => {
  const [selectedStats, setSelectedStats] = useState([...statNames]);

  // toggle if the element is in the array
  const toggleStats = (stat: StatName) =>
    setSelectedStats(old =>
      old.includes(stat) ? old.filter(el => el !== stat) : [...old, stat]
    );
  const selectedStatsData: GraphLineData[] = [];
  const {
    datasets: { accuracy, grossWpm, netWpm, keystrokes },
    labels,
  } = mapStatsToGraphData(stats);
  // TODO there must be a better way to do this
  if (selectedStats.includes('accuracy')) selectedStatsData.push(accuracy);
  if (selectedStats.includes('grossWpm')) selectedStatsData.push(grossWpm);
  if (selectedStats.includes('netWpm')) selectedStatsData.push(netWpm);
  if (selectedStats.includes('keystrokes')) selectedStatsData.push(keystrokes);

  return {
    selectedStats,
    labels,
    toggleStats,
    selectedStatsData,
  };
};
export default useToggleSelectedScoreData;
