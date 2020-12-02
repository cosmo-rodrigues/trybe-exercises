import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {

  const [ input, setInput ] = useState('');

  const handleChange = ({target}) => {
    const { value } = target;
    setInput(value);
  }

  const handleSubmit = event => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    //This line below is to clean input value.
    setInput('')
  }

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  })

  return (
    <form  className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo..."
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-button">Add todo</button>
    </form>
  )
}

export default TodoForm
