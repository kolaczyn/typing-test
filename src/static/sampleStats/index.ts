export type SampleStats = {
  label: string;
  data: number[];
  borderColor: string;
  borderWidth: number;
};
export { default as netWpmStats } from './netWpm';
export { default as grossWpmStats } from './grossWpm';
export { default as accuracyStats } from './accuracy';
export { default as labels } from './labels';
