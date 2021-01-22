import React from 'react'
import Box from '../ui/Box';

import Table, { Place, Wpm, Accuracy, Time, Thead } from './styles';

export default function Ranking({ scores }) {
  return scores.length && (
    <Box>
      <Table>
        <Thead>
          <tr>
            <Place />
            <Wpm>WPM</Wpm>
            <Accuracy>Accuracy</Accuracy>
            <Time>When</Time>
          </tr>
        </Thead>
        <tbody>
          {scores.map((score, idx) =>
            <tr key={idx}>
              <Place>{`${idx + 1}.`}</Place>
              <Wpm>{score.wpm}</Wpm>
              <Accuracy>{score.accuracy}</Accuracy>
              <Time>{score.timeAgo}</Time>
            </tr>
          )}
        </tbody>
      </Table>
    </Box>
  );
}
