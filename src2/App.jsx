import './App.css';
import Nav from './components/nav/Nav';
import Search from './components/search/Search';

const arr=[
 {
  id: 1,
  name: 'PDT'
 },
 {
  id: 2,
  name: 'PNT'
 },
];


function App() {
 return (
  <div className='App'>
   <header className='App-header'>
    <Nav />
    <h1>React using vite</h1>

    {/* 2ms38ss */}
    <Search todoList={arr} />
   </header>
  </div>
 );
}

export default App;
