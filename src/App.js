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
import Header from './comp/Header';
import Page404 from './comp/Pages/Page404';
import Foods from './comp/Pages/Foods';
import Query from './comp/Pages/Query';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Gallery />} />
        <Route path='/shop' element={<ApiShop />} />
        <Route path='/foods/:id_category' element={<Foods />}/>
        <Route path='/query' element={<Query />}/>
        <Route path='*' element={<Page404 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
