import "./Search.scss";
import {useState} from 'react';

//search1
const Search = () => {
  const [name, setName] = useState();
  const [address, setAddress] = useState(''); //v14xx1

  const handleClick = () => {
    setName(address);  //20ms08ss
    console.log('address ---', address);

    // setName('Phan Duc Tai');
    // console.log('name ---', name); //18ms11ss
  };

  // 20ms08ss
  const onChangeHandle = (e) => {
    setAddress(e.target.value);
  };


  return <>
    <input type="text" value={address} onChange={onChangeHandle} />
    <button
      type="button"
      className="Search"
      onClick={handleClick}
    >Search</button>
  </>;
};

export default Search;