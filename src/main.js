import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleTodo } from './actions/todos';


const Main = ({ dispatch, todos }) => (
  <div>
    <h1>Main</h1>
    <Link to="/page">Page</Link><br />
    <Link to="/page2">Page 2</Link>
    <h2>Todos: </h2>
    <div>
      {todos.map(todo => (
        <div
          key={todo.id}
          onClick={() => dispatch(toggleTodo(todo.id))}
        >
          {`${todo.text} - ${todo.checked}`}
        </div>
      ))}
    </div>
  </div>
)


export default connect((state) => {
  const { todos } = state;
  return { todos };
})(Main);