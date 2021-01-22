import React from 'react';
import Table from '../../components/table';

const labels = [ 'WPM', 'Accuracy', 'When'];

export default function Ranking({scores}) {
  return (
    <Table labels={labels}  data={scores} ranked/>
  )
}
