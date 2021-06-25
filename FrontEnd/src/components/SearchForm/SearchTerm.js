import React from 'react';

export default function SearchTerm (props) {
  return (
      <input type='text' className="searchTerm" onChange={props.onChange}/>
  )
}