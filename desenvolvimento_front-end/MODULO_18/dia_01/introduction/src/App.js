import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import MyContext from './context/MyContext';

function App() {
  const users = [
    {nome: 'João', idade: 22, cursos: ['Java', '. Net', 'C#']},
    {nome: 'Pero', idade: 30, cursos: ['JavaScript', 'C++', 'PHP']},
    {nome: 'Thiago', idade: 40, cursos: ['Python', 'PHP', 'C']},
    {nome: 'Judas', idade: 19, cursos: ['React JS', '. Net', 'C#']},
  ]
  return (
      <MyContext.Provider value={users}>
        <div className="App">
          <h1>Olá Context API</h1>
          <MyComponent />
        </div>
      </MyContext.Provider>
  );
}

export default App;
