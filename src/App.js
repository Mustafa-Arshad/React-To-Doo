import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState("")
  const [items, setItems] = useState([])
  let todos = () => {
    setItems((previous) => {
      return [...previous, text]
    })
    setText('')
  }
  let deleteItems = (inex) => {
    const updatedItem = items.filter((val, id) => {
      return inex = id;
    })
    setItems(updatedItem)
  }
  let delt = () => {
    setItems([])
  }
  let update = (inex) => {
    let editedTask = items.map((elem, edit) => {
      if (edit == inex) {
        items[edit] = prompt()

      }
    })
    setItems([...items])
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3>To Do App React </h3>
        <input  className='input' value={text} onChange={(e) => { setText(e.target.value) }} type="text" placeholder='Add Data' />
        <button className='bt' onClick={todos}>Add</button>
        <ol>

          {items.map((itemval, inex) => {
            return (<div key={inex}> <button className='bt' onClick={() => deleteItems(inex)}>Delete line</button>
              <li>{itemval} <button className='bt' onClick={() => update(inex)}>Edit data</button></li></div>)
          }
          )}
        </ol>
        <button className='remove' onClick={delt}>Remove All data</button>
      </header>
    </div>
  );
};
export default App;
