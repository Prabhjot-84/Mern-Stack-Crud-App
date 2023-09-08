import './App.css';

import NavBar from './components/NavBar';
import AddUser from './components/AddUser';
import CodeFox from './components/CodeFox'; 
import AllUsers from './components/AllUsers';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return ( 
    <BrowserRouter>

      <NavBar/>

      <Routes>
        <Route path='/' element={<CodeFox/>} />
        <Route path='/all' element={<AllUsers/>} /> 
        <Route path='/add' element={<AddUser/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
