import React from 'react';
// import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

// eslint-disable-next-line react/prop-types
export default function Graph({ datasets, labels }) {
  return (
    <Line data={{ labels, datasets }} />
  );
}

Graph.propTypes = {
  // TODO add propTypes
  // eslint-disable-next-line react/forbid-prop-types
  // data: PropTypes.array.isRequired,
};
