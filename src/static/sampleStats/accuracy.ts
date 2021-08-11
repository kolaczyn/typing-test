import { SampleStats } from '.';

const accuracyStates: (d: number[]) => SampleStats = d => ({
  label: 'Accuracy',
  data: d,
  borderColor: 'red',
  borderWidth: 1,
});
export default accuracyStates;
