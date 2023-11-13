import React, { useState } from "react";

function WorkingWithArrays() {
  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  const API = "http://localhost:4000/a5/todos";
  return (
    <div>
      <h3>Working with Arrays</h3>
      <input
        value={todo.id}
        onChange={(e) =>
          setTodo({
            ...todo,
            id: e.target.value,
          })
        }
        className="form-control mb-2"
        type="number"
      />
      <h3>Deleting from an Array</h3>
      <a href={`${API}/${todo.id}/delete`} className="btn btn-primary me-2">
        Delete Todo with ID = {todo.id}
      </a>
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
