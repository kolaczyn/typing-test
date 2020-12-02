import React from 'react'

export default function Ranking({ scores }) {
   return scores.length ? (
    <div className="ranking element">
      <table>
        <thead>
          <tr>
            <td className="ranking__place"></td>
            <td className="ranking__wpm">WPM</td>
            <td className="ranking__accuracy">Accuracy</td>
            <td className="ranking__time">Ago</td>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, idx) =>
            <tr key={idx}>
              <td>{`${idx + 1}.`}</td>
              <td>{score.wpm}</td>
              <td>{score.accuracy}</td>
              <td>{score.timeAgo}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  ): null;
}
