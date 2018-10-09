import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Sorry buddy, didn't find what you're searching for!</h1>
      <Link to="/">Go back</Link>
    </div>
  )
}

export default NotFound;
