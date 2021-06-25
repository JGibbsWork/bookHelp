import React from 'react';

export default function SearchTerm (props) {
  return (
    <div>
      <input type='text' className="searchTerm" onChange={props.onChange} required />
    </div>
  )
}