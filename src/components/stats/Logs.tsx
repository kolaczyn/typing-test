/* eslint-disable react/prop-types */
import React from 'react';
import { Stats } from '../../customTypes';
import Box from '../common/box';
import StyledTable, { Thead } from '../common/table/styles';

const formatDate = (timestamp: number) =>
  `${new Date(timestamp).getUTCDate()}/${new Date(timestamp).getUTCMonth()}`;

type Props = {
  stats: Stats[];
};

const Logs: React.FC<Props> = ({ stats }) => (
  <Box title="Logs">
    <StyledTable>
      <Thead>
        <tr>
          <td />
          {['Keystrokes', 'Accuracy', 'grossWpm', 'Net WPM'].map(label => (
            <td key={label}>{label}</td>
          ))}
        </tr>
      </Thead>
      <tbody>
        {stats.map(log => (
          <tr key={log.id}>
            <td>{formatDate(log.createdAt)}</td>
            <td>{log.accuracy}</td>
            <td>{log.grossWpm}</td>
            <td>{log.keystrokes}</td>
            <td>{log.netWpm}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  </Box>
);

export default Logs;
