/* eslint-disable react/prop-types */

import Item from './Item/Item'
function Items({ todoItems }) {
  return (
    <div>
      {
        // eslint-disable-next-line react/prop-types
        todoItems.map((item, index) => (
          <Item key={index} item={item}></Item>
        ))
      }
    </div>
  );
}

export default Items