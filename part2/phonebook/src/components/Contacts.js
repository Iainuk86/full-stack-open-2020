import React from 'react'
import Person from './Person'

const Contacts = (props) => {
  return (
    <div>
      {props.list.map(contact =>
        <Person key={contact.name} name={contact.name} number={contact.number} />
      )}
    </div>
  )
}

export default Contacts