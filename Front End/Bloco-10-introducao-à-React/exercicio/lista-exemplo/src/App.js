import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const array = ['Hoje', 'vamos', 'aprender', 'React', '#VQV']

function App() {
  return (
    <div>
      {array.map((item) => Task(item))}
    </div>
  );
}

export default App;
