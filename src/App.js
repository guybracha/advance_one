import logo from './logo.svg';
import './App.css';
import Counter from './comp/Counter';
import Message from './comp/Message';
import Value from './comp/Value';

function App() {
  return (
    <div className="Container">
      <h1 className='text-danger'>React Work</h1>
      <Value/>
      <hr/>
      <Message txt="Hello" clr="red"/>
      <Message txt="Bye" clr="orange"/>
      <hr/>
      <Counter/>
    </div>
  );
}

export default App;
