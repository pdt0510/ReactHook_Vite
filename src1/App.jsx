import './App.css';
import Nav from './components/nav/Nav';
import BtnGet from './components/counter/Search';

function App()
{
 return (
  <div className='App'>
   {/* 4ms01ss */}
   <Nav />
   <header className='App-header'>
    <h1>React using vite</h1>
    <BtnGet />
   </header>
  </div>
 );
}

export default App;
