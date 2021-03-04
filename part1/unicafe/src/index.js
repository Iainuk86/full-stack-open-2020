import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Heading = ( {text} ) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const Button = ( {onClick, text} ) => {
  return (
    <button onClick={onClick}> {text} </button>
  )
}

const Statistic = ( {name, number} ) => {
  if (name === 'positive') {
    return (
      <tr>
        <td>{name}</td>
        <td>{number}%</td>
      </tr>
    )
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{number}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <table>
      <tbody>
        <Statistic name={'good'} number={props.good} />
        <Statistic name={'neutral'} number={props.neutral} />
        <Statistic name={'bad'} number={props.bad} />
        <Statistic name={'total'} number={props.total} />
        <Statistic name={'average'} number={props.total / 3} />
        <Statistic name={'positive'} number={props.good / props.total * 100} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let total = good + bad + neutral

  return (
    <div>
      <Heading text={'give feedback'} />
      <Button onClick={() => setGood(good + 1)} text={'good'} />
      <Button onClick={() => setNeutral(neutral + 1)} text={'neutral'} />
      <Button onClick={() => setBad(bad + 1)} text={'bad'} />

      <Heading text={'statistics'} />
      
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
