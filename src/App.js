import "./App.css";
import { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import TodoListForm from "./components/TodoListForm";
import MySelect from "./components/MySelect";
import FilterButton from "./components/Filter.Button";
import { todoList_Data } from "./TodoList_Data";
import { nanoid } from "nanoid";

function App() {
  const [tasks, setTasks] = useState(todoList_Data);
  const [filter, setFilter] = useState("All");
  const [selectedSort, setSelectedSort] = useState("");

  const FILTER = {
    All: () => true,
    Open: (task) => task.status === "Open",
    "In Progress": (task) => task.status === "In Progress",
    Done: (task) => task.status === "Done",
  };
  const filterList = Object.keys(FILTER).map((name) => (
    <FilterButton key={name} name={name} setFilter={setFilter} />
  ));
  function ChangeStatus(e, id) {
    const updatedTasks = tasks.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          status: e,
          update: new Date().toLocaleString(),
        };
      }
      return item;
    });
    setTasks(updatedTasks);
  }
  const taskList = tasks
    .filter(FILTER[filter])
    .map((item) => (
      <TodoItem
        item={item}
        key={item.id}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        ChangeStatus={ChangeStatus}
        editTask={editTask}
      />
    ));
  useEffect(() => {
    window.localStorage.setItem("First Arr", JSON.stringify(tasks));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("Update Arr", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(name) {
    let newTask = {
      id: `item-${nanoid()}`,
      title: name,
      description: "",
      status: "Open",
      creationDate: new Date().toLocaleString(),
      updateDate: new Date().toLocaleString(),
    };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    const remainTasks = tasks.filter((item) => item.id !== id);
    setTasks(remainTasks);
  }

  function editTask(id, newName, newDescr) {
    const updatedTasks = tasks.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          title: newName,
          description: newDescr,
          updateDate: `${new Date()}`,
        };
      }
      return item;
    });
    setTasks(updatedTasks);
  }

  function toggleComplete(id) {
    const updatedArr = tasks.map((item) => {
      if (item.id === id) {
        console.log(item.status);
        if (item.status === "Open" || item.status === "In Progress") {
          return {
            ...item,
            status: "Done",
            updateDate: new Date().toLocaleString(),
          };
        } else if (item.status === "Done") {
          return {
            ...item,
            status: "Open",
            updateDate: new Date().toLocaleString(),
          };
        }
        console.log(item.status);
      }
      return item;
    });
    setTasks(updatedArr);
    console.log(updatedArr);
  }
  function sortList(sort) {
    console.log(sort);
    setSelectedSort(sort);
    const storesArr = JSON.parse(localStorage.getItem("Update Arr"));
    console.log(storesArr.sort((a, b) => b[sort].localeCompare(a[sort])));
    setTasks(storesArr.sort((a, b) => b[sort].localeCompare(a[sort])));
  }

  return (
    <div className="App">
      <div className="App_inner">
        <h2 className="todoList-label">What needs to be done?</h2>
        <p className="todoList-numberTasks">{tasks.length} available tasks</p>
        <div className="todoList-content">
          <TodoListForm addTask={addTask} toggleComplete={toggleComplete} />
          <div className="todoList-group todoList-filters">{filterList}</div>
          <MySelect
            value={selectedSort}
            defaultValue={"Sort by"}
            options={[
              { value: "creationDate", name: "By creation date" },
              { value: "updateDate", name: "By update date" },
            ]}
            onChange={sortList}
          />
          <ul className="todoList-tasks">{taskList}</ul>
        </div>
      </div>
    </div>
  );
}

export default App;
