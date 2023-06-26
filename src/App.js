import { useState } from 'react';
import './App.css';
import Body from './Components/Body/Body';
import Header from './Components/Header/Header';
import CounterContext from './Contexts/CounterContext';
import { Route, Routes } from 'react-router-dom';
import Basket from './Components/Basket/Basket';
import BasketButton from './Provider/Provider';
import BasketButtonProvider from './Provider/Provider';

function App() {
  return (
    <div className="App">
      <BasketButtonProvider>
      <Header/>
      <Routes>
        <Route path='/' element={<Body/>}></Route>
        <Route path='/basket' element={<Basket/>}></Route>
      </Routes>
      </BasketButtonProvider>
    </div>
  );
}

export default App;
