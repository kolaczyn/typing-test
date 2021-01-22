import React from "react";

import { Completed, Uncompleted, Good, Wrong } from './styles';

const formatWord = (word, writtenChars) => {
  const Component = word.startsWith(writtenChars) ? Good : Wrong;
  return <Component> {word}
    {' '}
  </Component>;
}

const TextField = ({ completedWords, uncompletedWords, currentWord, writtenChars }) => {
  return (
    <div className="element text-field">
      <Completed>{completedWords.join(' ')}</Completed>
      {formatWord(currentWord, writtenChars)}
      <Uncompleted>{uncompletedWords.join(' ')}</Uncompleted>
    </div>
  );
}

export default TextField