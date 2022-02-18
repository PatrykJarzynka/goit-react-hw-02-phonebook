function Filter({ value, onChange }) {
  return (
    <div>
      <span>Find contacts by name</span>
      <input type="text" name="filter" value={value} onChange={onChange}></input>
    </div>
  );
}

export default Filter;
