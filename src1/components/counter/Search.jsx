import "./Search.scss"; //4ms01ss

const BtnGet = () =>
{
  const searchHandle = ( event ) =>
  {
    console.log( event.target.value );
  };

  return <>
    <input type="text" value='PDT' onClick={( event ) => searchHandle( event )} />
    <button
      type="button" className="Search"
      // 12ms31ss
      // onClick={handleCounter}>Search
      onClick={searchHandle}>Search</button>

  </>
};

export default BtnGet