import React, {useState} from 'react';
 
const Todos = () => {

  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();
    if(newTodo == ""){
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    }

    setTodos([...todos, todoItem]);
    setNewTodo("");
  };

  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i != delIdx;
    });

    setTodos(filteredTodos);
  }

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if(idx == i){
        todo.complete = !todo.complete;

      }
      return todo;
    });

    setTodos(updatedTodos);
  }


  return (
    <div style={{textAlign: "center"}}>
      <form onSubmit={(event) => {
        handleNewTodoSubmit(event);
      }}>
        <input onChange={(event) => {
          setNewTodo(event.target.value);
        }} type="text" />
      <div>
        <button type="Submit">Add</button>
      </div>
      </form>
      {
        todos.map((todo, i) => {

          const todoClasses = [];

          if(todo.complete){
          todoClasses.push("strike-through");
          }
          return (
          <div key={i}>
            <input onChange={(event) => {
              handleToggleComplete(i);
            }}
              type="checkbox" checked={todo.completed} />
            <span className={todoClasses.join(" ")}>{todo.text}</span>
            <button onClick={(e) => {
              handleTodoDelete(i);
            }}>Delete</button>
            </div>
          );
        })
      }
    </div>
  );
}

export default Todos;
