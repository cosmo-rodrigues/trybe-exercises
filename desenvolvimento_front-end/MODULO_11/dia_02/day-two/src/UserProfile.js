import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    return (
      <div key={this.props.user.id} >
        <p>User: {this.props.user.id}</p>
        <p>{this.props.user.name}</p>
        <p>{this.props.user.email}</p>
        <Image source={this.props.user.avatar} alt='User Avatar' />
      </div>
    )
  }
}

export default UserProfile;