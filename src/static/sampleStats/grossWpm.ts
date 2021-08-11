import { SampleStats } from '.';

const grossWpmStats: (d: number[]) => SampleStats = d => ({
  label: 'Gross WPM',
  data: d,
  borderColor: 'blue',
  borderWidth: 1,
});
export default grossWpmStats;
