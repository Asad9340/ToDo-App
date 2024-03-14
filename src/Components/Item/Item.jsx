/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function Item({ item }) {
  console.log(item);
  const { name, dueDate } = item;
  return (
    <div className="grid gap-2 md:gap-10 grid-cols-12 mx-4 md:mx-10 mt-4">
      <div className="col-span-6 border flex items-center rounded-lg pl-4 hover:bg-gray-900 hover:text-white duration-300">
        <h2>{name}</h2>
      </div>
      <div className="col-span-3 border flex items-center rounded-lg pl-4 hover:bg-gray-900 hover:text-white duration-300">
        <h2>{dueDate}</h2>
      </div>
      <div className="col-span-2">
        <button className="bg-red-800 py-3 px-4 text-white rounded-lg outline-none font-semibold hover:bg-red-700 active:bg-red-950 duration-200  md:w-28">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Item;
