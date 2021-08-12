/* eslint-disable react/prop-types */
import React from 'react';
import { Line } from 'react-chartjs-2';
import { GraphLineData } from '../../utils/mapStatsToGraphData';

type Props = {
  labels: string[];
  datasets: GraphLineData[];
};

const Graph: React.FC<Props> = ({ labels, datasets }) => (
  <>
    <Line data={{ labels, datasets }} />
  </>
);
export default Graph;
