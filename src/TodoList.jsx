import React from "react";

function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} className={todo.completed ? "completed" : ""}>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
            />
            <span>{todo.text}</span>
          </label>
          <button onClick={() => removeTodo(index)}>×</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
