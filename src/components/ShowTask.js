export default function ShowTask(props) {
  console.log(props);
  return (
    <>
      <li className="todoList-item">
        <input
          type="checkbox"
          id={props.props.item.id}
          defaultChecked={props.props.item.status}
        />
        <label htmlFor={props.props.item.id}>{props.props.item.title}</label>
        <div className="todoList-item-">
          <button className="todoList-item-Btn">Edit</button>
          <button className="todoList-item-Btn">Delete</button>
        </div>
      </li>
    </>
  );
}
