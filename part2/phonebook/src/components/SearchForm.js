import React from 'react'

const SearchForm = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <div>
          <input value={props.value} onChange={props.onChange} />
        </div>
        <div>
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  )
}

export default SearchForm