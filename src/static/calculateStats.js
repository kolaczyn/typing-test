const calculateStats = (timePassed, keystrokes, correctWords, wrongWords) => {
    const correctWordsLetters = correctWords.reduce((count, word)=> count + word.length, 0) + correctWords.length - 1;
    const wpm =  timePassed && Math.floor(correctWordsLetters / 5 * 60 / timePassed);

    const accuracy = timePassed ? `${Math.floor(correctWordsLetters / keystrokes * 100)}%` : '0%' ;

    return {
        keystrokes,
        accuracy,
        wpm,
        correctWords,
        wrongWords
    }
}

export default calculateStats