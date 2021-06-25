import React from 'react';

export default function SearchTerm (props) {
  return (
    <form>
      <input type='text' className="searchTerm" onChange={props.onChange}/>
    </form>
  )
}