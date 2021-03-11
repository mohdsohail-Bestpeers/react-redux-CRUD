import './App.css';
import AddTodo from './components/AddTodo/AddTodo'

import List from './components/List/List'     //step 12th

function App() {
  return (
    <div className="App">
      <h1>TODO APP</h1>
        <AddTodo />
        <List />      {/* step 12th */}
    </div>
  );
}

export default App;
