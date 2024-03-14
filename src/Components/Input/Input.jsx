import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function Input({ handleBtnClick }) {
  const [todo, setTodo] = useState('');
  const [dateTime, setDateTime] = useState('');

  const handleTodoChange = event => {
    setTodo(event.target.value);
  };
  const handleDateChange = event => {
    setDateTime(event.target.value);
  };
  const handleAddBtn = () => {
    if (todo!=='' && setDateTime!=='') {
      handleBtnClick(todo, dateTime);
      setTodo('');
      setDateTime('');
    } else {
      alert('Please todo and date time');
    }
  };
  return (
    <div className="flex flex-col md:grid gap-4 md:gap-10 grid-cols-12 mx-4 md:mx-10">
      <div className="col-span-6">
        <input
          className="w-full h-12 pl-2 rounded-lg duration-200 border border-gray-900 hover:bg-gray-200"
          type="text"
          name=""
          placeholder="Enter ToDo text"
          id=""
          value={todo}
          onChange={handleTodoChange}
        />
      </div>
      <div className="col-span-4">
        <input
          className="w-full h-12 pl-2 rounded-lg duration-200 border border-gray-900"
          type="time"
          name=""
          placeholder="Enter ToDo text"
          id=""
          value={dateTime}
          onChange={handleDateChange}
        />
      </div>
      <div className="col-span-2">
        <button
          onClick={handleAddBtn}
          className="bg-gray-900 py-3 px-4 text-white rounded-lg outline-none font-semibold hover:bg-gray-800 active:bg-gray-950 duration-200 w-full md:w-28"
        >
          Add ToDo
        </button>
      </div>
    </div>
  );
}

export default Input;
