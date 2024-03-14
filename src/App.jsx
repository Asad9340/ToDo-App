import { useState } from 'react';
import Header from './Components/Header/Header.jsx';
import Input from './Components/Input/Input.jsx';
import Items from './Components/Items.jsx';
function App() {
const [todoItems,setTodoItems] =useState([])
  const handleBtnClick = (todo, dateTime) => {
    const newTodoItems=[...todoItems,{name:todo,dueDate:dateTime}]
    setTodoItems(newTodoItems);
  };
  return (
    <>
      <Header></Header>
      <Input handleBtnClick={handleBtnClick}></Input>
      <Items todoItems={todoItems}></Items>
    </>
  );
}

export default App;
