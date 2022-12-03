export default function MySelect({ defaultValue, options, onChange, value }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="todoList-item-select todoList-sort-select"
    >
      <option disabled={true} value="">
        {defaultValue}
      </option>

      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
