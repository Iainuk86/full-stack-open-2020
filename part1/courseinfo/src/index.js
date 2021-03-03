import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
  </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>
        {props.name}: {props.exercises}
      </p>
  </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Total number of exercises: {props.one + props.two + props.three}
      </p>
  </div>
  )
}

const App = () => {

  const course = 'Half Stack Application Development'

  const part1 = 'Fundamentals of React'
  const exercises1 = 10

  const part2 = 'Using props to pass data'
  const exercises2 = 7

  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content name={part1} exercises={exercises1} />
      <Content name={part2} exercises={exercises2} />
      <Content name={part3} exercises={exercises3} />
      <Total one={exercises1} two={exercises2} three={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))