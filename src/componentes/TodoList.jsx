import Todo from './Todo';
import React from 'react';

function TodoList({todos, todoDelete }) {  
  
  return ( <>
     { todos.map( (todo) => (
         <Todo todo={todo} key={todo.id} todoDelete={todoDelete} /> ))
      }  
   </> )
}

export default TodoList;