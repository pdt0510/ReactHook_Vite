import './App.css';
import Nav from './components/nav/Nav';
import Search from './components/counter/Search';

function App()
{
 return (
  <div className='App'>
   <Nav />
   <header className='App-header'>
    <h1>React using vite</h1>
    <Search />
   </header>
  </div>
 );
}

export default App;
