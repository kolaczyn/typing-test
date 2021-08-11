/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useState } from 'react';
import { Stats } from '../customTypes';
import mapStatsToGraphData, {
  GraphLineData,
} from '../utils/mapStatsToGraphData';

export const statLabels = ['Accuracy', 'Gross WPM', 'Net WPM'];
const useToggleSelectedScoreData = (stats: Stats[]) => {
  const [selectedStats, setSelectedStats] = useState([...statLabels]);

  // toggle if the element is in the array
  const toggleStats = (stat: string) =>
    setSelectedStats(old =>
      old.includes(stat) ? old.filter(el => el !== stat) : [...old, stat]
    );
  const selectedStatsData: GraphLineData[] = [];
  const {
    datasets: { accuracy, grossWpm, netWpm },
    labels,
  } = mapStatsToGraphData(stats);
  // TODO there must be a better way to do this
  if (selectedStats.includes('Accuracy')) selectedStatsData.push(accuracy);
  if (selectedStats.includes('Gross WPM')) selectedStatsData.push(grossWpm);
  if (selectedStats.includes('Net WPM')) selectedStatsData.push(netWpm);

  return {
    selectedStats,
    labels,
    toggleStats,
    selectedStatsData,
  };
};
export default useToggleSelectedScoreData;
