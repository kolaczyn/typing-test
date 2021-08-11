import { SampleStats } from '.';

const netWpmStats: (d: number[]) => SampleStats = d => ({
  label: 'Net WPM',
  data: d,
  borderColor: 'green',
  borderWidth: 1,
});
export default netWpmStats;
