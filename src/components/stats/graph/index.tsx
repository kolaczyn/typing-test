import React from 'react';
// import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

const Graph: React.FC = () => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <Line data={{ labels, datasets }} />
);
export default Graph;

Graph.propTypes = {
  // TODO add propTypes
  // eslint-disable-next-line react/forbid-prop-types
  // data: PropTypes.array.isRequired,
};
