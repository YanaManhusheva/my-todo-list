export default function FilterButton(props) {
  console.log(props);
  return (
    <button
      className="todoList-btn todoList-filterBtn"
      onClick={() => props.setFilter(props.name)}
    >
      {props.name}
    </button>
  );
}
