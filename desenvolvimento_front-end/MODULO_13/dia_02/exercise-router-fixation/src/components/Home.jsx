import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2> Home </h2>
    <h3> My awesome Home component </h3>
    <ol>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/users">Users</Link></li>
    </ol>
  </div>
);

export default Home;