import logo from './logo.svg';
import './App.css';
import Counter from './comp/Counter';
import Message from './comp/Message';
import Value from './comp/Value';
import FoodsApi from './comp/FoodsApi';
import Parents from './comp/Parents';
import Children from './comp/Children';
import Increase from './comp/Increase';
import Gallery from './comp/Gallery';
import ApiShop from './comp/ApiShop';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>Header</header>
      <Routes>
        <Route path='/' element={<Gallery/>}/>
        <Route path='/shop' element={<ApiShop/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
