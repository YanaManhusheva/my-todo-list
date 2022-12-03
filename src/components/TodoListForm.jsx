import { useState } from "react";

export default function TodoListForm(props) {
  const [task, setTask] = useState("");

  function handleChange(event) {
    setTask(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.addTask(task);
    setTask("");
  }

  return (
    <form onSubmit={handleSubmit} className="todoList-group todoList-form">
      <input
        type="text"
        className="todoList-input"
        onChange={handleChange}
        value={task}
      />
      <button className="todoList-btn todoList-form-addBtn">Add</button>
    </form>
  );
}
