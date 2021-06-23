import React from 'react';

export default function SearchTerm (props) {
  return (
    <form>
      <input type='text' onChange={props.onChange}/>
    </form>
  )
}