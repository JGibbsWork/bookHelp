import React from 'react';
import cityList from './cityList.js'

export default function CitySelect () {
  return (
    <form>
      <select>
        {cityList.map((value, idx) => (
          <option key={idx}>{value}</option>
        ))}
      </select>
    </form>
  )
}