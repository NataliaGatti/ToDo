import React, { useState } from "react";

function TodoForm({ todoAdd }) {
  
  const initialFormValue = {
    title: "",
    description: "",
  };

  const [ formValue, setFormValue ] = useState(initialFormValue)
  const { title, description } = formValue;

  const handleInputChange = (e) => {
    const changedFormValues = {
      ...formValue,
      [e.target.name]: e.target.value,
    };
    setFormValue(changedFormValues);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    todoAdd(formValue);
    setFormValue(initialFormValue);
};

  
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Título" name="title" value={title} onChange={handleInputChange}/>
      <textarea placeholder="Descripción" name="description" value={description} onChange={handleInputChange}></textarea>
      <button > Agregar </button>
      </form>
    </div>
  );
}

export default TodoForm;