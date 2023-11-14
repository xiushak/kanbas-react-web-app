import React, { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithArrays() {
  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });
  const [todos, setTodos] = useState([]);

  const API = "http://localhost:4000/a5/todos";

  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  };
  const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    console.log(response.data);
    setTodos(response.data);
  };
  const removeTodo = async (todo) => {
    const response = await axios.get(`${API}/${todo.id}/delete`);
    setTodos(response.data);
  };
  const fetchTodoById = async (id) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h3>Working with Arrays</h3>
      <h3>Updating an Item in an Array</h3>
      <a
        href={`${API}/${todo.id}/title/${todo.title}`}
        className="btn btn-primary me-2 float-end"
      >
        Update Title to {todo.title}
      </a>
      <input
        value={todo.title}
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
        className="form-control mb-2 w-75"
        type="text"
      />
      <a
        href={`${API}/${todo.id}/description/${todo.description}`}
        className="btn btn-primary me-2 float-end"
      >
        Update description
      </a>
      <input
        value={todo.description}
        onChange={(e) =>
          setTodo({
            ...todo,
            description: e.target.value,
          })
        }
        className="form-control mb-2 w-75"
        type="text"
      />
      <a
        href={`${API}/${todo.id}/completed/${todo.completed}`}
        className="btn btn-primary me-2 float-end"
      >
        Update Completed to {todo.completed.toString()}
      </a>
      <input
        value={todo.completed}
        onChange={(e) =>
          setTodo({
            ...todo,
            completed: e.target.checked,
          })
        }
        className="mb-2 w-75"
        type="checkbox"
      />
      <h3>List of todos</h3>
      <button onClick={createTodo} className="btn btn-primary mb-2 w-100">
        Create Todo
      </button>
      <button onClick={updateTitle} className="btn btn-success mb-2 w-100">
        Update Title
      </button>
      <ul className="list-group mb-4">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <button
              onClick={() => fetchTodoById(todo.id)}
              className="btn btn-warning me-2 float-end"
            >
              Edit
            </button>
            <button
              onClick={() => removeTodo(todo)}
              className="btn btn-danger mx-2 float-end"
            >
              Remove
            </button>
            {todo.title}
          </li>
        ))}
      </ul>
      <h3>Deleting from an Array</h3>
      <a
        href={`${API}/${todo.id}/delete`}
        className="btn btn-primary me-2 float-end"
      >
        Delete Todo with ID = {todo.id}
      </a>
      <input
        value={todo.id}
        onChange={(e) =>
          setTodo({
            ...todo,
            id: e.target.value,
          })
        }
        className="form-control mb-2 w-75"
        type="number"
      />
      <h4>Retrieving Arrays</h4>
      <a href={API} className="btn btn-primary me-2 mb-2">
        Get Todos
      </a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <a href={`${API}/${todo.id}`} className="btn btn-primary me-2 float-end">
        Get Todo by ID
      </a>
      <input
        className="form-control me-2 w-75 mb-2"
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />

      <h3>Filtering Array Items</h3>
      <a
        href={`${API}/${todo.id}?completed=true`}
        className="btn btn-primary me-2 mb-2"
      >
        Get Completed Todos
      </a>
      <h4>Creating new Items in an Array</h4>
      <a href={`${API}/create`} className="btn btn-primary me-2">
        Create Todo
      </a>
    </div>
  );
}
export default WorkingWithArrays;
