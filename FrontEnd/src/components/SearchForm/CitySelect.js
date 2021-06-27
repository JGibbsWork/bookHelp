import React from 'react';
import cityList from './cityList'

export default function CitySelect (props) {
  return (
    <div className="citySelect">
      <select onChange={props.onSelect} >
        {cityList.map((value, idx) => (
          <option key={idx} value={value}
          >{value}</option>
        ))}
      </select>
    </div>
  )
}