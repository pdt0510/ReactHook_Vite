import './Search.scss';
import {useState} from 'react';

const arrObjs = [
  {
    id: 1,
    name: 'PDT',
  },
  {
    id: 2,
    name: 'PNT',
  },
];

//search2
const Search = () => {
  const [name, setName] = useState();
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState(arrObjs); //2ms05ss

  const handleClick = () => {
    if (address) {
      const newEle = {id: todos.length + 1, name: address};
      todos.push(newEle);

      // 13ms13ss  
      // setTodos(todos); //w1, not re-render
      setTodos([...todos]); //w2, re-render 
      setAddress('');
    }

  };

  const onChangeHandle = (e) => {
    setAddress(e.target.value);
  };

  const renderTodoList = (list) => {
    return list.map((item) => {
      return (
        <li
          key={item.id}
          className='todo-item'
        >
          {item.id} - {item.name}
        </li>
      );
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <>
      <input
        type='text'
        value={address}
        onChange={onChangeHandle}
        onKeyDown={handleKeyDown}
      />
      <button
        type='button'
        className='Search'
        onClick={handleClick}
      >
        Click me!
      </button>
      <div className='todos'>{todos && renderTodoList(todos)}</div>
    </>
  );
};

export default Search;
