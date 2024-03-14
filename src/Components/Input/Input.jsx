function Input() {
  return (
    <div className="grid gap-4 md:gap-10 grid-cols-12 mx-4 md:mx-10">
      <div className="col-span-6">
        <input
          className="w-full h-12 pl-2 rounded-lg duration-200 border border-gray-900 hover:bg-gray-200"
          type="text"
          name=""
          placeholder="Enter ToDo text"
          id=""
        />
      </div>
      <div className="col-span-4">
        <input
          className="w-full h-12 pl-2 rounded-lg duration-200 border border-gray-900"
          type="date"
          name=""
          placeholder="Enter ToDo text"
          id=""
        />
      </div>
      <div className="col-span-2">
        <button className="bg-gray-900 py-3 px-4 text-white rounded-lg outline-none font-semibold hover:bg-gray-800 active:bg-gray-950 duration-200 w-28">
          Add ToDo
        </button>
      </div>
    </div>
  );
}

export default Input;
