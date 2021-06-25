import React from 'react';
import cityList from './cityList.js'

export default function CitySelect (props) {
  return (
    <div className="citySelect">
      <select onChange={props.onSelect}>
        <option>Select one</option>
        {cityList.map((value, idx) => (
          <option key={idx} value={value}>{value}</option>
        ))}
      </select>
    </div>
  )
}