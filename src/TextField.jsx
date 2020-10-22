import React from "react";

const formatWord = (word, writtenChars) => {
  const cl = word.startsWith(writtenChars) ? "good" : "wrong";
  return <span className={`text--${cl}`}> {word} </span>;
}

const formatWords = (wordsArr, flag) => {
  return (
    <span className={`text--${flag}`}>{wordsArr.join(" ")}</span>
  );
}

const TextField = ({ completedWords, uncompletedWords, currentWord, writtenChars }) => {
  return (
    <div className="element text-field">
      {formatWords(completedWords, "completed")}
      {formatWord(currentWord, writtenChars)}
      {formatWords(uncompletedWords, "uncompleted")}
    </div>
  );
}

export default TextField