import React from 'react';
import { Link } from 'react-router-dom';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greetingMessage: 'Hi There',
    }
  }
  render() {
    const { greetingMessage } = this.state;
    const { id } = this.props.match.params;
    return (
        <div>
          <h2> Users </h2>
          <h3> {greetingMessage}, this is my awesome Users component </h3>
          <h4>My user id is {id}</h4>
          <ol>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
          </ol>
        </div>
    )
  }
}

export default Users;