// I know, I went wild with this code
import { Stats } from '../customTypes';
export type GraphLineData = {
  label: string;
  data: number[];
  borderColor: string;
  borderWidth: number;
};

type StatName = 'accuracy' | 'grossWpm' | 'netWpm';

const statNameToDisplayName: Record<StatName, string> = {
  accuracy: 'Accuracy',
  grossWpm: 'Gross WPM',
  netWpm: 'Net WPM',
};
const statNameToColor: Record<StatName, string> = {
  accuracy: 'red',
  grossWpm: 'blue',
  netWpm: 'green',
};

const extractStatData = (stats: Stats[]) => (stateName: StatName) =>
  stats.map(stat => stat[stateName]);

const getDataSet = (statName: StatName) => (data: number[]) => ({
  label: statNameToDisplayName[statName],
  data,
  borderColor: statNameToColor[statName],
  borderWidth: 1,
});

const mapStatsToGraphData = (
  stats: Stats[]
): { datasets: Record<StatName, GraphLineData>; labels: string[] } => {
  const statNames: StatName[] = ['accuracy', 'grossWpm', 'netWpm'];

  // @ts-ignore
  const datasets: Record<StatName, GraphLineData> = {};
  statNames.forEach(
    statName =>
      (datasets[statName] = getDataSet(statName)(
        extractStatData(stats)(statName)
      ))
  );

  const labels = stats.map(s => new Date(s.createdAt).getHours().toString());
  return {
    // datasets: datasets,
    datasets: datasets,
    labels,
  };
};
export default mapStatsToGraphData;
