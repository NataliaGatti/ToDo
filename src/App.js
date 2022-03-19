import React, { useState, useEffect } from "react";
import TodoList from "./componentes/TodoList";
import TodoForm from './componentes/TodoForm';

const initialTodos = [
  {
    id: 1,
    title: "Terminar el homework",
    description: "Debo completar la homework de hoy",
    completed: false,
  },
  {
    id: 2,
    title: "Repasar useState y useEffect",
    description: "Son los hooks mas utilizados, conviene practicarlos haciendo ejercicios",
    completed: true,
  },
];

function App() {
  const [ todos, setTodos] = useState(initialTodos);
  
  const todoAdd = (todo) => {
    let copyTodos = [...todos];
    const newTodo = {
      id: todos.length + 1,
      ...todo,
      completed: false,
    };
    //Agregar la to do al array todos
    copyTodos = [...todos, newTodo]
    setTodos(copyTodos);
  }

  const todoDelete = (todoId) => {
    const changedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(changedTodos);
  };

  useEffect( ()=> {
    alert("Bienvenido a tu primer todo en react")
   }, [])

   useEffect( ()=> {
    alert("Tu lista de tareas ha sido modificada")
   }, [todos])

  return (
    <div>
    <TodoList todos={todos} todoDelete={todoDelete} />
    <TodoForm todoAdd={todoAdd} />
    </div>
  )
}
 
export default App;
