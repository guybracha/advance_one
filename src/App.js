import logo from './logo.svg';
import './App.css';
import Counter from './comp/Counter';
import Message from './comp/Message';

function App() {
  return (
    <div className="App">
      <h1 className='text-danger'>React Work</h1>
      <Message/>
      <hr/>
      <Counter/>
    </div>
  );
}

export default App;
