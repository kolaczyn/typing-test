import React from 'react';
import PropTypes from 'prop-types';

import StyledTable, { Thead } from './styles';
import { RankingData } from '../../../customTypes';

type Props = {
  labels: string[];
  data: RankingData[];
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
        {data.map(({ username, wpm, when, id }, idx) => (
          <tr key={id}>
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
