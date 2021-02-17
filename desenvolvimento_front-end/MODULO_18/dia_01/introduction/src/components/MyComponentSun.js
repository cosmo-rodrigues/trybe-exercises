import React, { Component } from 'react'
import MyContext from '../context/MyContext';

export class MyComponentSun extends Component {
  render() {
    return (
      <MyContext.Consumer>
      {value => value.map((user) =>(
        <p>{user.nome}</p>
      ))}
      </MyContext.Consumer>
    )
  }
}

export default MyComponentSun
