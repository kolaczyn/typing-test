import React from 'react'
import Box from '../box';

import StyledTable, { Thead } from './styles';

export default function Table({ labels, data, ranked }) {

  return data.length && (
    <Box>
      <StyledTable>
        <Thead>
          <tr>
            {ranked && <td></td>}
            {labels.map(label => <td>{label}</td>)}
          </tr>
        </Thead>
        <tbody>
          {data.map((data, idx) =>
            <tr>
              {ranked && <td>{`${idx + 1}.`}</td>}
              {/* looping through the provided data */}
              {Object.keys(data).map((item) => (
                <td>{data[item]}</td>
              ))}
            </tr>
          )}
        </tbody>
      </StyledTable>
    </Box>
  );
}
