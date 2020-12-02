import React from 'react'

export default function Stats({timePassed, keystrokes, correctWords, wrongWords}) {
    const correctWordsLetters = correctWords.reduce((count, word)=> count + word.length, 0) + correctWords.length - 1;
    const wpm =  timePassed && Math.floor(correctWordsLetters / 5 * 60 / timePassed);
    // const wpm = timePassed

    const accuracy = timePassed ? `${Math.floor(correctWordsLetters / keystrokes * 100)}%` : '0%' ;

    const data = [
        {number: keystrokes, desc: 'keystrokes'},
        {number: accuracy, desc: 'accuracy'},
        {number: wpm, desc: 'WPM'},
        {number: correctWords.length, desc: 'correct words'},
        {number: wrongWords, desc: 'wrong words'},
    ]
    return (
        // should this be ul and li?
        <div className="stats">
        {data.map(({number, desc}, idx)=> 
            <div key={idx} className="stats__element element">
                <h2>{number}</h2>
                <h6>{desc}</h6>
            </div>
            )}
        </div>
    )
}
