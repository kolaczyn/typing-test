/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import StyledTable, { Thead } from './styles';

type Props = {
  labels: string[];
  data: { username: string; wpm: string; when: string }[];
};

const Table: React.FC<Props> = ({ labels, data }) =>
  data.length !== 0 ? (
    <StyledTable>
      <Thead>
        <tr>
          <td />
          {labels.map(label => (
            <td key={label}>{label}</td>
          ))}
        </tr>
      </Thead>
      <tbody>
        {data.map(({ username, wpm, when }, idx) => (
          <tr key={username}>
            <td>{`${idx + 1}.`}</td>
            <td>{username}</td>
            <td>{wpm}</td>
            <td>{when}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  ) : null;
export default Table;

Table.propTypes = {
  labels: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};
