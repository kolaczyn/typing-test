/* eslint-disable react/prop-types */
import React from 'react';
import { Stats } from '../../customTypes';
import Box from '../common/box';
import Spinner from '../common/loader';
import StyledTable, { Thead } from '../common/table/styles';

const formatDate = (timestamp: number) =>
  `${new Date(timestamp).getUTCDate()}/${new Date(timestamp).getUTCMonth()}`;

type Props = {
  stats: Stats[];
};

const Logs: React.FC<Props> = ({ stats }) => {
  const reversedStats = [...stats.reverse()];
  return (
    <Box title="Logs">
      {reversedStats ? (
        <StyledTable>
          <Thead>
            <tr>
              <td />
              {['Accuracy', 'Gross WPM', 'Keystrokes', 'Net WPM'].map(label => (
                <td key={label}>{label}</td>
              ))}
            </tr>
          </Thead>
          <tbody>
            {reversedStats.map(log => (
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
      ) : (
        <Spinner />
      )}
    </Box>
  );
};
export default Logs;
