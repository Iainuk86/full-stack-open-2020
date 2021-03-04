import React from 'react'

const Part = ( {name, exercises} ) => {
  return (
    <div>
      <p>{name}: {exercises}</p>
    </div>
  )
}
  
const Header = ( {title} ) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}
  
const Content = ( {parts} ) => {
  return (
    <div>
      {parts.map((part) =>
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      )}
    </div>
  )
}
  
const Total = ( {parts} ) => {
  const totals = parts.map(part => part.exercises)

  const total = 
    totals.reduce((s, p) => {
      return s + p
    })

  return (
    <div>
      <p>Total number of exercises: {total}</p>
    </div>
  )
}

const Course = ( {course} ) => {
  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course