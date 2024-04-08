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

function App() {
  return (
    <div className="Container">
      <h2 className='text-danger'>React</h2>
      <ApiShop/>
      <hr/>
      <Gallery/>
    </div>
  );
}

export default App;
