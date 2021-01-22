import React from 'react'
import calculateStats from '../../helpers/calculateStats'
import Box from '../ui/Box';

import { Wrapper, Element } from './styles';

export default function Stats({ timePassed, keystrokes, correctWords, wrongWords }) {

    const { accuracy, wpm, } = calculateStats(timePassed, keystrokes, correctWords, wrongWords)

    const data = [
        { number: keystrokes, desc: 'keystrokes' },
        { number: accuracy, desc: 'accuracy' },
        { number: wpm, desc: 'WPM' },
        { number: correctWords.length, desc: 'correct words' },
        { number: wrongWords, desc: 'wrong words' },
    ]
    return (
        // should this be ul and li?
            <Wrapper>
                {data.map(({ number, desc }, idx) =>
                    <Element key={idx} className="stats__element element">
                        <h2>{number}</h2>
                        <h6>{desc}</h6>
                    </Element>
                )}
            </Wrapper>
    )
}
