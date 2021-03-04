import React, { useState } from 'react'
import SearchForm from './components/SearchForm'
import ContactForm from './components/ContactForm'
import Contacts from './components/Contacts'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Iain McIntosh', number: '828262' },
    { name: 'Morgan', number: '555-267-3434'},
    { name: 'Pip', number: '000'},
    { name: 'Scout', number: '666'}
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchedName, setSearchedName] = useState('')
  const [showAll, setShowAll] = useState(true)

  const contactsToShow = showAll
    ? persons
    : persons.filter(function(person) {
        return person.name.toLowerCase().includes(searchedName.toLowerCase())
      })
  
  const handleNameInput = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberInput = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchInput = (event) => {
    setSearchedName(event.target.value)
  }

  const addNewContact = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name === newName)) {
      window.alert(`Phonebook already contains ${newName}`)
      return
    }

    const newPerson = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  const searchContact = (event) => {
    event.preventDefault()
    setShowAll(false)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Search for a contact</h2>
      <SearchForm onSubmit={searchContact} value={searchedName} onChange={handleSearchInput} />
      
      <h2>Add a new contact</h2>
      <ContactForm onSubmit={addNewContact} name={newName} nameChange={handleNameInput}
        number={newNumber} numberChange={handleNumberInput} />

      <h2>Contacts</h2>
      <Contacts list={contactsToShow} />
      <button onClick={() => setShowAll(true)}>Show all contacts</button>  
    </div>
  )
}

export default App;
