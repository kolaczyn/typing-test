/* eslint-disable react/prop-types */
import React from 'react';
import { Line } from 'react-chartjs-2';
import { SampleStats } from '../../static/sampleStats';

type Props = {
  labels: string[];
  datasets: SampleStats[];
};

const Graph: React.FC<Props> = ({ labels, datasets }) => (
  <>
    <Line data={{ labels, datasets }} />
  </>
);
export default Graph;
