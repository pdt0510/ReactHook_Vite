import "./Search.scss";

const Search = () =>
{
  const searchHandle = () =>
  {
    console.log( 'search handle' );
  };

  return <>
    <input type="text" />
    <button
      type="button"
      className="Search"
      onClick={searchHandle}
    >Search</button>
  </>
};

export default Search