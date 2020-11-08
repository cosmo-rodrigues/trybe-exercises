import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function toDoList() {
  return ['Acordar','Orar', 'Comer', 'Codar'];
}

function todo() {
  const list = toDoList();
  return list.map(element => task(element))
}

function App() {
  return (
    <div className="App">
      {todo()}
    </div>
  );
}

export default App;
