import { useState } from "react";

export default function TodoItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("");
  const [newDescr, setNewDescr] = useState("");

  const STATUS = {
    Open: false,
    "In Progress": false,
    Done: true,
  };

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.item.id, newName, newDescr);
    setIsEditing(false);
    setNewName("");
    setNewDescr("");
  }

  const ShowTask = (
    <div className="todoList-iten-inner">
      <div className="todoList-task-input">
        <input
          type="checkbox"
          id={props.item.id}
          checked={STATUS[props.item.status]}
          onChange={() => props.toggleComplete(props.item.id)}
        />
        <label htmlFor={props.item.id}>
          {props.item.title}
          <p className="todoList-description">{props.item.description}</p>
        </label>
      </div>
      <div className="todoList-task-actions">
        <div className="todoList-item-buttons">
          <button
            className="todoList-btn  todoList-item-btn"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            className="todoList-btn todoList-item-btn"
            onClick={() => props.deleteTask(props.item.id)}
          >
            Delete
          </button>
        </div>
        <select
          onChange={(e) => props.ChangeStatus(e.target.value, props.item.id)}
          className={`todoList-item-btn todoList-item-select ${props.item.status
            .toLowerCase()
            .replaceAll(" ", "")}-btn `}
        >
          <option value="">{props.item.status}</option>
          <option>Open</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
      </div>
    </div>
  );
  const EditTask = (
    <form onSubmit={handleSubmit} className="todoList-iten-inner">
      <div className="todoList-edit-task-input ">
        <label className="todoList-edit-label">
          title:
          <input
            type="text"
            value={newName}
            id={props.item.id}
            onChange={(e) => setNewName(e.target.value)}
            className="todoList-edit-input"
          />
        </label>
        <label className="todoList-edit-label">
          description:
          <input
            type="text"
            value={newDescr}
            id={props.item.id}
            onChange={(e) => setNewDescr(e.target.value)}
            className="todoList-edit-input"
          />
        </label>
      </div>
      <div className="todoList-item-buttons .todoList-task-actions">
        <button className="todoList-btn todoList-item-btn">Save</button>
        <button
          className="todoList-btn todoList-item-btn"
          onClick={() => setIsEditing(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );

  return <li className="todoList-item"> {isEditing ? EditTask : ShowTask} </li>;
}
