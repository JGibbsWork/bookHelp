import React from 'react';
import { Link } from 'react-router-dom';

export default function Header () {
  return (
    <div>
      <Link
      to={{ pathname: '/' }}
      style={{ textDecoration: "none"}}
      className="link" >
        <h3>HOME</h3>
      </Link>
      <Link
      to={{ pathname: '/feed' }}
      style={{ textDecoration: "none"}}
      className="link" >
        <h3>FEED</h3>
      </Link>
      <Link
      to={{ pathname: '/post' }}
      style={{ textDecoration: "none"}}
      className="link" >
        <h3>POST</h3>
      </Link>
    </div>
  )
}