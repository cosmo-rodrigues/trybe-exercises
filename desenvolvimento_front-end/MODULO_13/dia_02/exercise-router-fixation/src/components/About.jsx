import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div>
    <h2>About</h2>
    <h3> My awesome About component </h3>
    <ol>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/users">Users</Link></li>
    </ol>
  </div>
);

export default About;