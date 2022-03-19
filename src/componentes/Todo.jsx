import React from "react";

function Todo({ todo, todoDelete }) {
  return (
    <>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
      <button onClick={() => todoDelete(todo.id)} > X </button>  
    </>
  );
}

export default Todo;