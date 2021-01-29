import React from 'react'

import StyledTable, { Thead } from './styles';

export default function Table({ labels, data }) {

  return data.length && (
    <StyledTable>
      <Thead>
        <tr>
          <td></td>
          {labels.map(label => <td key={label}>{label}</td>)}
        </tr>
      </Thead>
      <tbody>
        {data.map((data, idx) =>
          <tr key={data.username}>
            <td>{`${idx + 1}.`}</td>
            <td>{data.username}</td>
            <td>{data.wpm}</td>
            <td>{data.when}</td>
          </tr>
        )}
      </tbody>
    </StyledTable>
  );
}
