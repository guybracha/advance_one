import logo from './logo.svg';
import './App.css';
import Counter from './comp/Counter';
import Message from './comp/Message';
import Value from './comp/Value';
import FoodsApi from './comp/FoodsApi';
import Parents from './comp/Parents';
import Children from './comp/Children';

function App() {
  return (
    <div className="Container">
      <h1 className='text-danger'>React Work</h1>
      <FoodsApi />
      <hr/>
      <Value/>
      <hr/>
      <Message txt="Hello" clr="red"/>
      <Message txt="Bye" clr="orange"/>
      <hr/>
      <Counter/>
      <hr/>
      <Parents>
        <Children/>
      </Parents>
    </div>
  );
}

export default App;
