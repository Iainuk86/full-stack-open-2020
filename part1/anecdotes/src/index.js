import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

const Button = ({ onClick, text} ) => {
  return (
    <button onClick={onClick}> {text} </button>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const App = (props) => {
  const [max, setMax] = useState(0)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(6))

  const addVote = () => {
    let copy = [...votes]
    copy[selected] += 1

    if (copy[selected] > copy[max]) {
      setMax(selected)
    }

    setVotes(copy)
  }

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        {props.anecdotes[selected]}
        <br></br>
        has {votes[selected]} votes
      </div>
      <div>
        <Button onClick={addVote} text={'vote'} />
        <Button onClick={() => setSelected(getRandomInt(0, anecdotes.length))} text={'Next anecdote'} />
      </div>
      <div>
        <h1>Anecdote with the most votes:</h1>
        {props.anecdotes[max]}
        <br></br>
        with {votes[max]} votes!
      </div>
    </div>
  )
}

ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root'))