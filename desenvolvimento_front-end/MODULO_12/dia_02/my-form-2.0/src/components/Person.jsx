import React from 'react';

class Person extends React.Component {
  render() {
    return (
      <fieldset>
        <h2>Person</h2>
        <ul>
          <li>
            <label htmlFor="name">Nome:
              <input type="text" name="name" id="name" maxlength="40" required/>
            </label>
          </li><br />
          <li>
            <label htmlFor="email">Email:
              <input type="text" name="email" required maxlength="50" id="email"/>
            </label>
          </li><br />
          <li>
            <label htmlFor="cpf">CPF:
              <input type="number" name="cpf" id="cpf" maxlength="11" required/>
            </label>
          </li>
        </ul>
      </fieldset>
    )
  }
}

export default Person;