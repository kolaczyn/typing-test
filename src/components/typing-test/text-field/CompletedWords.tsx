/* eslint-disable react/prop-types */
import React from 'react';
import { TypedWord } from '../../../reducers/typing/initialState';
import { Completed, Wrong } from './styles';

type Props = { finished: TypedWord[] };

const CompletedWords: React.FC<Props> = ({ finished }) => (
  <>
    {finished.map(({ isOkay: isWordOkay, word }, idx) => {
      const Component = isWordOkay ? Completed : Wrong;
      return <Component key={idx}>{`${word} `}</Component>;
    })}
  </>
);
export default CompletedWords;
