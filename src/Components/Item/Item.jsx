function Item() {
  return (
    <div className="grid gap-4 md:gap-10 grid-cols-12 mx-4 md:mx-10 mt-4">
      <div className="col-span-6 border flex items-center rounded-lg pl-4 hover:bg-gray-900 hover:text-white duration-300">
        <h2>item 1</h2>
      </div>
      <div className="col-span-4 border flex items-center rounded-lg pl-4 hover:bg-gray-900 hover:text-white duration-300">
        <h2>date 1</h2>
      </div>
      <div className="col-span-2">
        <button className="bg-gray-900 py-3 px-4 text-white rounded-lg outline-none font-semibold hover:bg-gray-800 active:bg-gray-950 duration-200 w-28">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Item;
