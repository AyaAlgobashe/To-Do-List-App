import React, { useRef } from 'react';

function ChildOne({ onAddTask }) {
  const inputRef = useRef(null);

  const handleAddButtonClick = () => {
    const inputValue = inputRef.current.value;
    onAddTask(inputValue);
    inputRef.current.value = '';
  };

  return (
    <div className="mt-5">
      <h1>To Do List</h1>
      <label htmlFor="exampleFormControlInput1" className="form-label">
        Add new do
      </label>
      <input
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        style={{ width: '50%' }}
        ref={inputRef}
      />
      <button
        type="button"
        className="button btn btn-dark mt-5"
        onClick={handleAddButtonClick}
      >
        Add
      </button>
    </div>
  );
}

export default ChildOne;
