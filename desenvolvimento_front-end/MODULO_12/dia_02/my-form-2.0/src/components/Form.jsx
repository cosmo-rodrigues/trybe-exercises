import React from 'react';
import Person from './Person';
import Adress from './Adress';
import Professional from './Profetional';

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      type: '',
      careerSummary: '',
      occupation: '',
      occupationDescribe: '',
    }
  }
  render() {
    return (
      <form>
        <h1>Formulário</h1>
        <Person />
        <Adress />
        <Professional />
      </form>
    )
  }
}

export default Form;