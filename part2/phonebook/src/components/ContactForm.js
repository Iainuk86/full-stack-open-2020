import React from 'react'

const ContactForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div>
        Name: <input value={props.name} onChange={props.nameChange}/>
      </div>
      <div>
        Number: <input value={props.number} onChange={props.numberChange} />
      </div>
      <div>
        <button type="submit">Add to Phonebook</button> 
      </div>
    </form>
  )
}

export default ContactForm