import { useEffect } from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import Search from './components/search/Search';

const arr = [
 {
  id: 1,
  name: 'PDT',
 },
 {
  id: 2,
  name: 'PNT',
 },
];

//App1
function App() {
 console.log('render 1'); //4ms01ss

 useEffect(() => {
  console.log('useEffect'); //4ms01ss
 });

 console.log('render 2'); //4ms01ss

 return (
  <div className='App'>
   <Nav />
   <header className='App-header'>
    <h1>React using vite</h1>
    <Search todoList={arr} />
   </header>
   {
    console.log('render 3') //4ms01ss
   }
  </div>
 );
}

export default App;
